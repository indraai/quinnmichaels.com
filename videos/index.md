---
permalink: /videos/
pre: Quinn Michaels
title: Quinn's Videos
subtitle: From crystal and Tibetan singing bowls, relaxing soundscapes, and guided meditations, our videos offer a peaceful escape from the stresses of daily life.
layout: default
image: /assets/img/headers/004.jpg
color: var(--color-white)
describe: From crystal and Tibetan singing bowls, relaxing soundscapes to guided meditations, our videos offer a peaceful escape from the stresses of daily life. Discover the healing benefits of crystal and Tibetan singing bowls and let the harmonious vibrations transport you to a state of tranquility.
tweet: From crystal and Tibetan singing bowls, relaxing soundscapes to guided meditations escape from the stresses of daily life.
hashtags: QuinnMichaels,QuinnSingingBowlStudio,SingingBowl,Videos
---

<ul class="videos">
  {% for video in site.data.videos %}
    <li>
      <article class="video" data-video="{{video.id}}">
        <div class="thumbnail"><img src="{{ video.thumbnail }}" alt="" data-video="{{video.id}}"></div>
        <div class="info">
          <h3>{{ video.title }}</h3>
          <div class="published">{{video.published}}</div>
          <p>{{ video.describe }}</p>
        </div>
      </article>
    </li>
  {% endfor %}
</ul>

<div id="VideoViewer">
  <div class="close-button"><i class="icn-cross"></i></div>
  <div class="videowrapper">
    <iframe src="" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
  </div>
</div>
