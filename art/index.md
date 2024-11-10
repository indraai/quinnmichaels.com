---
permalink: /art/
pre: Quinn Michaels
title: Quinn's Art
subtitle: Artistry Inspired by Sound and Meditation
layout: default
image: /assets/img/headers/art/main.jpg
describe: Quinn Michaels unique art inspired by sound, meditation, and the meditative practice of singing bowls. Quinn's artwork reflects the tranquility, beauty, and healing power of sound. Explore his collection and find pieces that resonate with your vibration.
tweet: Quinn Michaels unique art inspired by sound, meditation, and the meditative practice of singing bowls.
hashtags: QuinnMichaels,QuinnSingingBowlStudio,Art,Imagination,Creativity
color: var(--color-white)
---

<section class="art">
  {% for art in site.data.art %}
    <article class="artwork">
      <div class="thumbnail"><a href="{{art.url}}"><img src="{{ art.thumbnail }}" alt=""></a></div>
      <div class="info">
        <h2><a href="{{art.url}}">{{art.name}}</a></h2>
        <div class="note">{{art.note}}</div>
      </div>
    </article>
  {% endfor %}
</section>
