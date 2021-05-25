import React, { FC, useEffect } from 'react'
import marked from 'marked'
import hljs from 'highlight.js'
import * as PreviewStyles from './styles'

interface PreviewProps {
  markdown: string
}

const Preview: FC<PreviewProps> = ({ markdown }) => {
  return (
    <>
      <PreviewStyles.Label>Preview</PreviewStyles.Label>
      <PreviewStyles.Markdown
        id="preview"
        dangerouslySetInnerHTML={{
          __html: marked(markdown.replace(/&gt;+/g, '>'), {
            breaks: true,
            gfm: true,
            highlight: function (code: string) {
              return hljs.highlightAuto(code).value
            },
          }),
        }}
      />
    </>
  )
}

export default Preview
