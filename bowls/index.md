---
pre: Quinn Michaels
title: Quinn's Singing Bowls
subtitle: A curated selection of Crystal and Tibetan Singing Bowls.
layout: default
image: /assets/img/headers/002.jpg
describe: Learn about our a curated selection of handcrafted crystal and Tibetan singing bowls, designed to promote relaxation, meditation, and healing. Each singing bowl is unique and offers its own distinctive vibrations. Explore our collection and find the perfect instrument to enhance your spiritual journey.
tweet: Learn about our a curated selection of handcrafted crystal and Tibetan singing bowls, designed to promote relaxation, meditation, and healing.
hashtags: QuinnMichaels,SingingBowlStudio,SingingBowls,Meditation
color: var(--color-white)
---

<ul class="bowls">
  {% for bowl in site.data.bowls %}
    <li>
      <article class="bowl">
        <div class="thumbnail"><img src="{{ bowl.thumbnail }}" alt=""></div>
        <div class="info">
          <div class="title">{{bowl.name}}</div>
          <div class="type"><span class="label">type:</span>{{bowl.type}}</div>
          <div class="note"><span class="label">note:</span> {{bowl.note}}</div>
          <div class="describe">{{bowl.describe}}</div>
        </div>
      </article>
    </li>
  {% endfor %}
</ul>
