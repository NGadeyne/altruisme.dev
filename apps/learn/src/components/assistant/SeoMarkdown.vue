<script setup lang="ts">
import { computed } from 'vue'
import MarkdownIt from 'markdown-it'

const props = defineProps<{ content: string }>()

// Assistant output is untrusted. Raw HTML and images stay disabled.
const markdown = new MarkdownIt({ html: false, linkify: false, breaks: false }).disable('image')
const originalLinkOpen = markdown.renderer.rules.link_open
markdown.renderer.rules.link_open = (tokens, index, options, env, renderer) => {
  tokens[index]?.attrSet('target', '_blank')
  tokens[index]?.attrSet('rel', 'noopener noreferrer')
  return originalLinkOpen
    ? originalLinkOpen(tokens, index, options, env, renderer)
    : renderer.renderToken(tokens, index, options)
}

const rendered = computed(() => markdown.render(props.content))
</script>

<template>
  <div
    class="seo-markdown min-w-0 break-words text-sm leading-7 text-ink-soft sm:text-[0.95rem]"
    v-html="rendered"
  />
</template>

<style scoped>
.seo-markdown :deep(p + p),
.seo-markdown :deep(p + ul),
.seo-markdown :deep(p + ol),
.seo-markdown :deep(ul + p),
.seo-markdown :deep(ol + p),
.seo-markdown :deep(pre + p) {
  margin-top: 0.85rem;
}

.seo-markdown :deep(h1),
.seo-markdown :deep(h2),
.seo-markdown :deep(h3) {
  margin-top: 1.25rem;
  margin-bottom: 0.5rem;
  color: var(--color-petrol-dark);
  font-weight: 700;
  line-height: 1.4;
}

.seo-markdown :deep(ul),
.seo-markdown :deep(ol) {
  padding-left: 1.4rem;
}

.seo-markdown :deep(ul) {
  list-style: disc;
}

.seo-markdown :deep(ol) {
  list-style: decimal;
}

.seo-markdown :deep(li + li) {
  margin-top: 0.3rem;
}

.seo-markdown :deep(strong) {
  color: var(--color-petrol-dark);
  font-weight: 700;
}

.seo-markdown :deep(a) {
  color: #315960;
  text-decoration: underline;
  text-underline-offset: 3px;
}

.seo-markdown :deep(a:focus-visible) {
  outline: 2px solid #315960;
  outline-offset: 2px;
}

.seo-markdown :deep(pre) {
  max-width: 100%;
  overflow-x: auto;
  margin-top: 0.9rem;
  border-radius: 0.85rem;
  background: #233b3a;
  padding: 1rem;
  color: #f8fbf8;
  font-size: 0.85rem;
  line-height: 1.6;
}

.seo-markdown :deep(:not(pre) > code) {
  border-radius: 0.3rem;
  background: #eef3ef;
  padding: 0.1rem 0.3rem;
  font-size: 0.9em;
}

.seo-markdown :deep(blockquote) {
  margin-top: 0.9rem;
  border-left: 3px solid #668c89;
  padding-left: 0.9rem;
  color: #456b68;
}
</style>
