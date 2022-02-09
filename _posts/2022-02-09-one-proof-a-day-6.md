---
date: 2022-02-09
title: "One Proof A Day (6)"
layout: single
author_profile: false
categories:
  - mathematics
tags:
  - one-proof-a-day
---

In $$\mathbb{Z}[x]$$, $$x^4+1$$ is irreducible. But it is reducible in $$\mod p$$ for all prime $$p$$.
I searched for a proof done by more basic concepts and I found a beautiful solution for this!! Here is the reference of this proof:
https://math.stackexchange.com/questions/1159950/proving-that-x41-is-reducible-over-all-finite-prime-fields/1159962#1159962

It is known that $$\mathbb{Z}_p^*}$$ is a cyclic multiplicative group if $$p$$ is a prime.
We claim that $$ab$$ is a square of some element in $$\mod p$$ if $$a$$ and $$b$$ are not squares.
Since $$a = x^k$$ and $$b = x^l$$ for an element $$x$$ which geneartes $$\mathbb{Z}_p^*}$$.
We have that $$k,l$$ are odd because $$a,b$$ are not squares.
Then $$ab = x^{k+l}$$ is a square of $$x^{(k+l)/2}$$ because $$k+l$$ is even.
Therefore we have that at least one of $$a, b, ab$$ is a square of some element for any $$a,b \in \mod p$$.

Let $$k$$ be an algebraic closure of $$\mathbb{Z}_p$$.
Then we have $$x^4+1 = (x^2+i)(x^2-i)=(x^2+\sqrt{2}x+1)(x^2-\sqrt{2}x+1)=(x^2+\sqrt{2}x+1)(x^2-\sqrt{2}x+1)$$.
Hence we need to show that at least one of $$i, \sqrt{2}, i\sqrt{2}$$ is in $$\mathbb{Z}_p$$.
In other words, we need to show the existence of an element $$n$$ such that $$n^2$$ is one of $$-1,2,-2 \in \mathbb{Z}_p^*$$ in $$\mod p$$.
From the previous paragraph, we can show the existence.
Therefore $$x^4+1$$ is reducible in $$\mathbb{Z}_p[x]$$.
