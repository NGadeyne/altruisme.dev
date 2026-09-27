import { describe, expect, it } from 'vitest'

import { getSafeLinkedInUrl } from '../linkedInUrl'

describe('getSafeLinkedInUrl', () => {
  it('accepts canonical HTTPS LinkedIn profiles', () => {
    expect(getSafeLinkedInUrl('https://www.linkedin.com/in/altruisme')).toBe(
      'https://www.linkedin.com/in/altruisme',
    )
  })

  it.each([
    '',
    'javascript:alert(1)',
    'data:text/html,test',
    'https://linkedin.com.evil.example/in/test',
    'https://linkedin.com@evil.example/in/test',
    'https://www.linkedin.com:444/in/test',
  ])('rejects unsafe URL %s', (value) => {
    expect(getSafeLinkedInUrl(value)).toBe('')
  })
})
