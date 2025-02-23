---
permalink: /bowls/
pre: Quinn Michaels
title: Bowls
subtitle: Quinn's collection of Crystal and Tibetan Singing Bowls.
layout: default
header: /assets/img/bowls/header.jpg
image: /assets/img/bowls/image.jpg
thumbnail: /assets/img/bowls/thumbnail.jpg
describe: Learn about our a curated selection of handcrafted crystal and Tibetan singing bowls, designed to promote relaxation, meditation, and healing. Each singing bowl is unique and offers its own distinctive vibrations.
tweet: Learn about Quinn's Singing Bowl Studio selection of crystal and Tibetan singing bowls.
hashtags: QuinnMichaels,QuinnSingingBowlStudio,SingingBowls,Meditation
color: var(--color-white)
---

<section class="bowls">
  {% for bowl in site.bowls %}
    <article class="bowl">
      <div class="thumbnail"><a href="{{bowl.url}}"><img src="{{ bowl.thumbnail }}" alt=""></a></div>
      <div class="title"><a href="{{bowl.url}}">{{bowl.title}}</a></div>
    </article>
  {% endfor %}
</section>

<hr class="divider">

<h2>Singing Bowl Types</h2>
<section class="types">
  {% for type in site.data.types %}
    <article class="type">
      <h3><a href="{{ type.url }}">{{type.name}}</a></h3>
      <p>{{type.describe}}</p>
    </article>
  {% endfor %}
</section>
