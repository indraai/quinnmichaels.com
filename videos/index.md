---
pre: Quinn Michaels
title: Quinn's Videos
subtitle: From crystal and Tibetan singing bowls, relaxing soundscapes, and guided meditations, our videos offer a peaceful escape from the stresses of daily life.
layout: default
image: https://quinnmichaels.com/assets/img/headers/004.jpg
color: var(--color-white)
describe: From crystal and Tibetan singing bowls, relaxing soundscapes to guided meditations, our videos offer a peaceful escape from the stresses of daily life. Discover the healing benefits of crystal and Tibetan singing bowls and let the harmonious vibrations transport you to a state of tranquility.
tweet: From crystal and Tibetan singing bowls, relaxing soundscapes to guided meditations escape from the stresses of daily life.
hashtags: QuinnMichaels, SingingBowlStudio, Videos
---

<article class="bowls">
  <ul>
    {% for video in site.data.videos %}
      <li>
        <div class="video">
          <div class="thumbnail"><a href="https://youtu.be/{{video.id}}" target="youtube"><img src="{{ video.thumbnail }}" alt=""></a></div>
          <div class="title"><a href="https://youtu.be/{{video.id}}" target="youtube">{{ video.title }}</a></div>
          <div class="describe">{{ video.describe }}</div>
        </div>
      </li>
    {% endfor %}
  </ul>
</article>
