import React from 'react'
import { css } from '@emotion/core'
import Highlight, { defaultProps } from 'prism-react-renderer'
import prismTheme from 'prism-react-renderer/themes/nightOwlLight'

prismTheme.plain.backgroundColor = undefined

export const CodeBlock = ({ value, language }) => {
  return (
    <Highlight
      {...defaultProps}
      theme={prismTheme}
      code={value}
      language={language || 'js'}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre css={styles.code} className={className} style={style}>
          {tokens.map((line, i) => (
            <div {...getLineProps({ line })} key={i}>
              {line.map((token, key) => (
                <span {...getTokenProps({ token })} key={key} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  )
}

const styles = {
  code: css`
    margin: 0;
    font-family: var(--font-code);
    white-space: pre-wrap;
    word-break: normal;
    font-size: 0.875rem;
  `
}
