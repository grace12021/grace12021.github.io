---
date: 2022-01-01
title: "One Proof A Day (1)"
layout: single
author_profile: false
categories:
  - mathematics
tags:
  - one-proof-a-day
---

I have a goal to share one proof a day in 2022!
Today's proof is for one **proposition** in section 0.3 of *Undergraduate Commutative Algebra* by Miles Reid. In the book, UFD(*unique factorization domain*) is defined as an integral domain such taht every element factors as a product of finitely many irreducibles and irreducible implies prime.

**Proposition**\
In a UFD $$A$$, the expression of 
$$x = b \prod p_i^{n_i}$$ as a product of irreducibles with $$p_i \not\vert p_j$$ is unique up to invertible elements.

*Proof*\
For any $$x$$, define $$\vert x \vert$$ be the minimum value of $$\sum n_i$$ where $$x = b \prod p_i^{n_i}$$. We proceed by induction on $$\vert x\vert$$.

When $$\vert x\vert = 1$$, we can write that $$x = bp$$ where $$p$$ is irreducible and $$b_1$$ is a unit. Suppose that we can write $$x = c \prod_{j=1}^{M}q_j^{m_j}$$ as a product of a unit and irreducibles not dividing each other. Since $$p$$ is irreducible, $$M=1$$ and furthermore $$m_1=1$$. Then the expression of $$x$$ is unique up to invertible elements.

When $$\vert x \vert = K$$, we can write $$x = b \prod_{j=1}^{N}p_j^{n_j}$$ where $$\sum_{j=1}^N n_j = K$$. Suppose that we can write $$x = c \prod_{j=1}^Mq_j^{m_j}$$ too. For any $$p_j$$, $$p_j$$ divides some $$q_i^{m_i}$$. Hence $$p_j$$ divides $$q_i$$ so $$p_j u_j = q_i$$ for some unit $$u$$ because both are irreducibles. With the premise that $$p_j$$s don't divide each other and $$q_j$$s don't divide each other, each $$p_j$$ equals to distinct $$q_i$$s up to invertible elements. Hence we have $$M\geq N$$ and , with reordering, we can say that $$p_j u_j = q_j$$ for $$j=1, \cdots, N$$ and some units $$u_j$$. If $$M>N$$, $$q_{N+1}$$ divides $$x$$ but it doesn't divide any $$p_j$$, which is a contradiction. Therefore $$M=N$$.

With $$M=N$$ and $$p_j u_j = q_j$$, we have $$x = b \prod_{j=1}^{N}p_j^{n_j} = c^\prime \prod_{j=1}^{N}p_j^{m_j}$$ where $$c^\prime = c \prod_{j=1}^Nu_j^{m_j}$$. For $$y = b (\prod_{j=1}^{N-1}p_j^{n_j})p_N^{n_N-1}$$, with induction hypothesis, the expression is unique upt to invertible elements. Since we have $$x = yp_N = (c^\prime\prod_{j=1}^{N-1}p_j^{m_j}p_N^{m_N-1})p_N$$, we also have $$y = c^\prime\prod_{j=1}^{N-1}p_j^{m_j}p_N^{m_N-1}$$ which is uniquely determined. Hence $$x$$ is uniquely determined up to invertible elements.