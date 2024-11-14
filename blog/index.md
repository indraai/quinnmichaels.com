---
permalink: /blog/
title: Blog
subtitle: Insights on Meditation, Singing Bowls, and Ancient Wisdom
layout: default
header: /assets/img/blog/header.jpg
image: /assets/img/blog/image.jpg
thumbnail: /assets/img/blog/thumbnail.jpg
color: var(--color-white)
describe: Quinn Michaels Blog - Quinn shares his passion for studying the Vedic texts, singing bowls, meditation, art, and various other interests.
tweet: Quinn shares his passion for studying the Vedic texts, singing bowls, meditation, art, and various other interests.
hashtags: QuinnMichaels,QuinnSingingBowlStudio,Blog,Meditation
---

<section class="posts">
  {% for post in site.posts %}
    <article class="post">
      <div class="thumbnail"><a href="{{ post.url }}"><img src="{{post.thumbnail}}" alt="{{post.title}} {{post.subtitle}}"></a></div>
      <div class="info">
        <h3><a href="{{ post.url }}">{{post.title}}</a></h3>
        <div class="date">{{post.date | date: "%B %d, %Y"}}</div>
        <div class="excerpt">
          {{post.excerpt}}
        </div>
      </div>
    </article>
  {% endfor %}
</section>
