import React from 'react'
import ReactMarkdown from 'react-markdown'
import { CodeBlock } from '../CodeBlock'
import { HeadingRenderer } from '../renderers/Heading'
import { markdownStyle } from './markdownStyle'

export const createMarkdown = source => {
  return (
    <>
      <style>{`.css-${markdownStyle.name} >*:first-child {margin-top:0}`}</style>
      <ReactMarkdown
        css={markdownStyle}
        source={source}
        escapeHtml={false}
        renderers={{ code: CodeBlock, heading: HeadingRenderer }}
      />
    </>
  )
}
