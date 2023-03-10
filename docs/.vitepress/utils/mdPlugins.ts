import mdContainer from 'markdown-it-container'
import type MarkdownIt from 'markdown-it/lib'
import type { RenderRule } from 'markdown-it/lib/renderer'

export const mdPlugin = (md: MarkdownIt) => {
  md.use(mdContainer, 'demo', {
    render: (tokens, idx) => {
      const token = tokens[idx]
      const demoName = token.info.split(' ')[1]
      return token.nesting === 1 ? `<Demo><${demoName}/><template #code>` : '</template></Demo>\n'
    },
  } as {
    render: RenderRule
  })
}
