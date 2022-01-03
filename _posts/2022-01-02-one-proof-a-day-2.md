---
date: 2022-01-02
title: "One Proof A Day (2)"
layout: single
author_profile: false
categories:
  - mathematics
tags:
  - one-proof-a-day
---
This is my solution of *Exercise 1.1.i* of *Category Theory in Context* of Emily Riehl.

**Exercise 1.1.i**\
(i) Consider a morphism $$f: x \rightarrow y$$. Show that if there exists a pair of morphisms $$g, h: y \rightrightarrows x$$ so that $$gf = 1_x$$ and $$fh = 1_y$$, then $$g = h$$ and $$f$$ is an isomorphism.

*Solution*\
Since $$g: y \rightarrow x$$, we have $$g = g1_y = g(fh)$$. With associativity of compositions of morphisms, $$g(fh) = (gf)h = 1_xh = h$$. Therefore $$g = h$$. From the given condition, $$g=h$$ is the inverse morphism of $$f$$ hence $$f$$ is an isomorphism.

(ii) Show that a morphism can have at most one inverse isomorphism.

*Solution*\
Assume that a morphism $$f: x\rightarrow y$$ has some inverse isomorphisms $$g, h: y \rightrightarrows x$$. Then $$g, h$$ can be regarded as a left inverse and a right inverse respectively from (i). Hence we can get the same conclusion that $$g = h$$. We can conclude that a morphism $$f$$ has a unique inverse isomorphism if it has one. Therefore a morphism can have at most one inverse isomorphism.