import '@testing-library/jest-dom'

// Polyfill IntersectionObserver for jsdom
global.IntersectionObserver = class IntersectionObserver {
  readonly root: Element | null = null
  readonly rootMargin: string = ''
  readonly thresholds: ReadonlyArray<number> = []
  constructor(private callback: IntersectionObserverCallback) {}
  observe() {}
  unobserve() {}
  disconnect() {}
  takeRecords(): IntersectionObserverEntry[] { return [] }
} as unknown as typeof IntersectionObserver
