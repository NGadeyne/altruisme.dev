import { week39 } from './week39Metadata'
import { week40 } from './week40Metadata'
import { week41 } from './week41Metadata'

// Add an edition here only when its article route and content are published.
export const publishedEditions = [week39, week40, week41].sort((a, b) =>
  a.publishedAt.localeCompare(b.publishedAt),
)
