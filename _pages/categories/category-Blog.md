---
title: "Blog"
layout: archive
permalink: categories/blog
sidebar_categories: true
---

{% assign posts = site.categories.Blog %}
{% for post in posts %} {% include archive-single.html type=page.entries_layout %} {% endfor %}