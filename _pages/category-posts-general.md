---
title: "Posts"
permalink: /posts/
layout: single
author_profile: true
---


{% assign posts = site.posts %}
{% for post in posts %} {% include archive-single.html type=page.entries_layout %} {% endfor %}
