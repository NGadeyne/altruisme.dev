/// <reference types="vite/client" />

interface TurnstileOptions {
  action: string
  callback: () => void
  sitekey: string
  size: 'flexible'
}

interface Window {
  turnstile?: {
    render: (container: HTMLElement, options: TurnstileOptions) => string
    reset: (widgetId: string) => void
  }
  turnstileReady?: () => void
}
