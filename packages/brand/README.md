# @altruisme/brand

Tokens CSS partagés par les applications Altruisme.DEV. Ce package ne contient
ni styles globaux, ni composants, ni logique applicative et n'est pas déployé.

Les applications consommatrices importent les tokens après Tailwind :

```css
@import 'tailwindcss';
@import '@altruisme/brand/tokens.css';
```

Vite intègre les tokens dans le bundle de chaque application. Les palettes ou
ajustements propres à une page restent locaux.
