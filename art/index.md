---
permalink: /art/
pre: Quinn Michaels
title: Art
subtitle: Artistry Inspired by Sound and Meditation
layout: default
header: /assets/img/art/header.jpg
image: /assets/img/art/image.jpg
thumbnail: /assets/img/art/thumbnail.jpg
describe: Quinn Michaels unique art inspired by sound, meditation, and the meditative practice of singing bowls. Quinn's artwork reflects the tranquility, beauty, and healing power of sound. Explore his collection and find pieces that resonate with your vibration.
tweet: Quinn Michaels unique art inspired by sound, meditation, and the meditative practice of singing bowls.
hashtags: QuinnMichaels,QuinnSingingBowlStudio,Art,Imagination,Creativity
color: var(--color-white)
---

<section class="art">
  {% for art in site.art %}
    <article class="artwork">
      <div class="thumbnail"><a href="{{art.url}}"><img src="{{ art.thumbnail }}" alt=""></a></div>
      <div class="title"><a href="{{art.url}}">{{art.title}}</a>
      </div>
    </article>
  {% endfor %}
</section>
