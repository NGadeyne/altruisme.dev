# @altruisme/supabase

Fabriques génériques de clients Supabase utilisées par plusieurs applications.
Ce package ne contient ni schéma, ni table, ni politique RLS, ni secret : les
variables d'environnement et la logique métier restent dans chaque application.

```ts
import { createBrowserSupabaseClient } from '@altruisme/supabase'
```

Les applications installent `@supabase/supabase-js` et intègrent cette source à
leur bundle. Le package n'est pas déployé indépendamment.
