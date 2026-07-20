# quinnmichaels.com
The source code for quinnmichaels.com. The site runs on the Jekyll static site publishing platform.

## Local development

### Requirements

- Ruby 3.4.1 with Bundler 2.6.2
- Node.js and npm

Install the locked Ruby and Node dependencies:

```bash
bundle install
npm install
```

Start Jekyll at [http://localhost:4000](http://localhost:4000):

```bash
npm run serve
```

Build the production-ready static site in `_site`:

```bash
npm run build
```

Jekyll and WEBrick versions are pinned in `Gemfile.lock` so local and deployment builds use the same Ruby dependencies. Run `bundle update` intentionally when those dependencies need to be upgraded.

Stylus is maintained separately. To watch the Stylus source and compile changes into `assets/css/main.css`, run:

```bash
npm run style
```

## Directories
/\_art - Markdown Pages for artwork.
/\_bowls - Markdown files for the differeing singing bowl types. 
/\_data - The JSON data files for the site content, nav, and other features.
/\_drafts - Markdown Blog drafts are stored here until publishing is ready.
/\_includes - The site include html files. Headers, Footers, and other included templates.
/\_layouts - The various html site layouts that can be used on pages
/\_posts - The Markdown blog posts organized into year (YYYY), month (MM), day (DD)
/\_site - where the `jekyll build` command builds the site to.
/\_styl - The Stylus code that builds the site css using the `npm run style` command.
/\_videos - Markdown pages for the videos presented on the site.

---

/about - The main markdown file for about page.
/art - The main markdown file for the art page.
/assets - Where css, js, images, and other assets are located.
/blog - The main markdown file for the blog page.
/bowls - The main markdown file for the singing bowl page.
/contact - The main markdown file for the contact page. 
/offerings - The main markdown file for the offerings page.
/reports - Report files for pdf and document storage.
/sitemaps - The sitemaps for the site.
/videos - The markdown file for the videos page.

_config.yml - The config file for the site configuration data.
404.md - The site custom 404 page.
CNAME - The quinnmichaels.com CNAME file.
index.html - The main index file for the quinnmichaels.com site.
index.js - The main index.js for the node application helper.
LICENSE.md - License file that defines how Quinn Michaels site can be used.
package.json - The package file which sets up the basic properties.
robots.txt - The Robots text file that tells robots what to index.  

**Copyright ©2000-2026 Quinn Arjuna Michaels; All rights reserved.**
