#!/usr/bin/env ruby

require "cgi"
require "pathname"
require "set"
require "uri"

site_dir = Pathname.new(ARGV.fetch(0, "_site")).expand_path
abort "Site directory does not exist: #{site_dir}" unless site_dir.directory?

errors = []
html_files = Dir.glob(site_dir.join("**/*.html")).reject do |file|
  Pathname.new(file).relative_path_from(site_dir).to_s.start_with?("assets/")
end

read_html = lambda do |file|
  File.binread(file).encode("UTF-8", invalid: :replace, undef: :replace)
end

resolve_target = lambda do |source_file, raw_url|
  url = CGI.unescapeHTML(raw_url).strip
  return if url.empty? || url == "#"
  return if url.start_with?("//")
  return if url.match?(/\A[a-z][a-z0-9+.-]*:/i)

  uri = URI.parse(url)

  path = CGI.unescape(uri.path.to_s)
  fragment = CGI.unescape(uri.fragment.to_s)
  base = if path.empty?
           Pathname.new(source_file)
         elsif path.start_with?("/")
           site_dir.join(path.delete_prefix("/"))
         else
           Pathname.new(source_file).dirname.join(path)
         end

  candidates = [base]
  candidates << Pathname.new("#{base}.html") if base.extname.empty?
  candidates << base.join("index.html") if base.extname.empty? || base.directory?
  target = candidates.find(&:file?)

  unless target
    relative_source = Pathname.new(source_file).relative_path_from(site_dir)
    errors << "#{relative_source}: missing internal target #{raw_url.inspect}"
    return
  end

  return if fragment.empty? || target.extname != ".html"

  target_html = read_html.call(target)
  escaped_fragment = Regexp.escape(fragment)
  anchor_exists = target_html.match?(/\b(?:id|name)=["']#{escaped_fragment}["']/)
  unless anchor_exists
    relative_source = Pathname.new(source_file).relative_path_from(site_dir)
    relative_target = target.relative_path_from(site_dir)
    errors << "#{relative_source}: missing fragment ##{fragment} in #{relative_target}"
  end
rescue URI::InvalidURIError
  relative_source = Pathname.new(source_file).relative_path_from(site_dir)
  errors << "#{relative_source}: invalid URL #{raw_url.inspect}"
end

html_files.each do |file|
  relative = Pathname.new(file).relative_path_from(site_dir)
  html = read_html.call(file)
  checkable_html = html.gsub(/<!--.*?-->/m, "")

  errors << "#{relative}: missing HTML doctype" unless html.match?(/<!doctype html>/i)
  errors << "#{relative}: missing <html> element" unless html.match?(/<html\b/i)
  errors << "#{relative}: missing <head> element" unless html.match?(/<head\b/i)
  errors << "#{relative}: missing <body> element" unless html.match?(/<body\b/i)
  errors << "#{relative}: missing non-empty <title>" unless html.match?(/<title>\s*\S.+?<\/title>/im)

  ids = checkable_html.scan(/\bid=["']([^"']+)["']/i).flatten
  duplicates = ids.tally.select { |_id, count| count > 1 }.keys
  duplicates.each { |id| errors << "#{relative}: duplicate id #{id.inspect}" }

  checkable_html.scan(/\b(?:href|src)=["']([^"']*)["']/i).flatten.each do |url|
    if url.strip.empty?
      errors << "#{relative}: empty href or src attribute"
    else
      resolve_target.call(file, url)
    end
  end
end

if errors.any?
  warn "Site verification failed with #{errors.length} error(s):"
  errors.each { |error| warn "  - #{error}" }
  exit 1
end

puts "HTML and internal-link checks passed for #{html_files.length} pages."
