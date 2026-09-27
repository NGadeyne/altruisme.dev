# @altruisme/brand

Tokens CSS et typographie Inter partagés par les applications Altruisme.DEV. Ce
package ne contient ni composants, ni logique applicative et n'est pas déployé.

Les applications consommatrices importent les tokens après Tailwind :

```css
@import 'tailwindcss';
@import '@altruisme/brand/tokens.css';
```

Vite intègre les tokens dans le bundle de chaque application. Les palettes ou
ajustements propres à une page restent locaux.

Le fichier Inter variable WOFF2 est servi localement par chaque application,
en graisse normale de 300 à 700 avec `font-display: swap`. La pile système
reste disponible en repli. Inter v4.1 est distribué sous la licence SIL Open
Font License, conservée dans `OFL.txt`.
