---
date: 2022-01-25
title: "One Proof A Day (5)"
layout: single
author_profile: false
categories:
  - mathematics
tags:
  - one-proof-a-day
---
This is the proof of Cayley-Hamilton theorem for $$R$$-modules.

**Cayley-Hamilton theorem**\
Let $M$ be a finitely generated $$R$$-module.
Let $$\phi: M \rightarrow M$$ be an $$R$$-module homomorphism.
If $$p(x)$$ is the characteristic polynomial of any matrix representing $$\phi$$, then $$p(\phi) = 0$$.

*Proof*\
Suppose that $$M$$ has a generating set $$m_1, \cdots, m_n$$ and
$$\phi$$ is represented by an $$n \times n$$ matrix $$A = (a_{jk})$$
where $$\phi(m_j) = \sum_{k=1}^n a_jk m_k$$. Hence we have that $$\sum_{k=1}^n \delta_{jk}\phi-a_{jk} m_k = 0$$ for all $$j$$
where $$\delta_{jk}$$ is the Kronecker symbol.
Consider a matrix $$\Delta$$ having $$jk$$th entry: $$\delta_{jk}\phi - a_{jk}$$.
Then $$\Delta m_j = 0$$ for all $$j$$. Recalling that $$\mathrm{adj} \Delta \cdot \Delta = \det \Delta I_n$$.
Therefore $$\det(\Delta) m_j = 0$$ for all $$j$$. Since $$\det(\Delta) = p(\phi)$$ where $$p(x)$$ is the characteristic polynomial of $$A$$,
it is proved that $$p(\phi) = 0$$.
