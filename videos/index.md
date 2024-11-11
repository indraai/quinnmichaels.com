---
permalink: /videos/
pre: Quinn Michaels
title: Videos
subtitle: From crystal and Tibetan singing bowls, relaxing soundscapes, and guided meditations, our videos offer a peaceful escape from the stresses of daily life.
layout: default
image: /assets/img/headers/004.jpg
color: var(--color-white)
describe: From crystal and Tibetan singing bowls, relaxing soundscapes to guided meditations, our videos offer a peaceful escape from the stresses of daily life. Discover the healing benefits of crystal and Tibetan singing bowls and let the harmonious vibrations transport you to a state of tranquility.
tweet: From crystal and Tibetan singing bowls, relaxing soundscapes to guided meditations escape from the stresses of daily life.
hashtags: QuinnMichaels,QuinnSingingBowlStudio,SingingBowl,Videos
---
{% assign sort_videos = site.videos | reverse %}
<section class="videos">
  {% for video in sort_videos %}
    <article class="video">
      <div class="thumbnail"><a href="{{video.url}}"><img src="{{ video.thumbnail }}" alt=""></a></div>
      <div class="info">
        <h3><a href="{{video.url}}">{{ video.title }}</a></h3>
        <p>{{ video.describe }}</p>
      </div>
    </article>
  {% endfor %}
</section>
