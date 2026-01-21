---
permalink: /blog/
title: Blog
subtitle: Exposing the Truth Behind 47 Years of Kidnapping and Government Injustice
layout: default
header: /assets/img/blog/header.jpg
image: /assets/img/blog/image.jpg
thumbnail: /assets/img/blog/thumbnail.jpg
color: var(--color-white)
describe: Quinn Michaels has spent over four decades trapped in a web of lies and manipulation. This blog serves as a platform to expose the truth about his kidnapping, the corruption, and the ongoing fight. Despite his please for help, Quinn continues to face resistance, abandonment, and dehumanization. 
tweet: 47 years in the dark, abandoned by a broken system. Quinn Michaels deserves justice, but the fight for his rights continues.
hashtags: QuinnMichaels,JusticeDenied,VictimsRights,CorruptionExposed
---

<section class="posts">
  {% for post in site.posts %}
    <article class="post">
      <!-- <div class="thumbnail"><a href="{{ post.url }}"><img src="{{post.thumbnail}}" alt="{{post.title}} {{post.subtitle}}"></a></div> -->
      <div class="info">
        <h2><a href="{{ post.url }}">{{post.title}}</a></h2>
        <div class="date">{{post.date | date: "%B %d, %Y"}}</div>
        <div class="excerpt">
          {{post.excerpt}}
        </div>
      </div>
    </article>
  {% endfor %}
</section>
