---
date: 2022-01-03
title: "One Proof A Day (3)"
layout: single
author_profile: false
categories:
  - mathematics
tags:
  - one-proof-a-day
---
Today, we will discuss a theorem which is a standard application of Zorn's lemma. First, let us talk about Zorn's lemma.

**Zorn's Lemma**\
Let $$S$$ be a non-empty partially ordered set. If every chain $$T$$ of $$S$$ has an upper bound in $$S$$ then $$S$$ has at least one maximal element.

It is well known that Zorn's lemma and the axiom of choice is equivalent. But we will not talk about that now.

Today's topic is existence of maximal ideal of commutative ring with $$1$$. The theorem and proof are from *Commutative Algebra* of Atiyah and MacDonald.

**Theorem 1.3**\
Every commutative ring $$A\neq0$$ with $$1$$ has at least one maximal ideal.

*Proof*\
Let $$\Sigma$$ be the set of all proper ideals of $$A$$. Then $$\Sigma$$ is a partially ordered by inclusion and it is not empty because it contains $$0$$. Take any chain $$(a_\alpha)$$ from $$\Sigma$$ then $$\bigcup_\alpha a_\alpha$$ is an upper bound of the chain. Furthermore, $$\bigcup_\alpha a_\alpha$$ is a proper ideal of $$A$$. First, it is an ideal of $$A$$ because it is a union of ideals. Second, it is a prpoer subset of $$A$$ because all proper ideals in the chain don't include $$1$$ and so doesn't their union. Hence an upper bound of any chain is in $$\Sigma$$. By Zorn's lemma, $$\Sigma$$ has a maximal element which is an maximal ideal.