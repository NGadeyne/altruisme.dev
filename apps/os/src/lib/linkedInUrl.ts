const linkedInHosts = new Set([
  'linkedin.com',
  'www.linkedin.com',
])

export function getSafeLinkedInUrl(value: string | undefined) {
  if (!value) {
    return ''
  }

  try {
    const url = new URL(value.trim())

    if (
      url.protocol !== 'https:' ||
      !linkedInHosts.has(url.hostname.toLowerCase()) ||
      url.port ||
      url.username ||
      url.password
    ) {
      return ''
    }

    return url.href
  } catch {
    return ''
  }
}
