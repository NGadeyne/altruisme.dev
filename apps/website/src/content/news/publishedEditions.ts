import { week39 } from './week39Metadata'
import { week40 } from './week40Metadata'
import { week41 } from './week41Metadata'
import { week42 } from './week42Metadata'
import { week43 } from './week43Metadata'
import { week44 } from './week44Metadata'

// Add an edition here only when its article route and content are published.
export const publishedEditions = [week39, week40, week41, week42, week43, week44].sort((a, b) =>
  a.publishedAt.localeCompare(b.publishedAt),
)
