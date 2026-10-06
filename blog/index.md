---
permalink: /blog/
title: Blog
subtitle: Exposing the Truth Behind 47 Years of Kidnapping and Government Injustice
layout: default
header: /assets/img/blog/header.jpg
image: /assets/img/blog/image.jpg
thumbnail: /assets/img/blog/thumbnail.jpg
color: var(--color-white)
describe: Quinn Michaels writes here about the work as it happens. Code, databases, front-end builds, and the design around them. The posts also cover artwork, singing bowls, and the daily practice behind Indra.ai, Deva.world, Deva.cloud, and Deva.space. Life and systems stay on the same page, named, dated, and left in a form the next session can pick up.
tweet: Quinn Michaels Blog where you can follow the work as it happens.
hashtags: QuinnMichaels,Blog
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
