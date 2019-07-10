import React from 'react'
import { css } from '@emotion/core'
import ReactMarkdown from 'react-markdown'
import { Panel } from './Panel'
import { CodeBlock } from './CodeBlock'
import { HeadingRenderer } from './renderers/Heading'

export const Main = props => {
  const { readme, showMenu, currentItem } = props

  // Let's show stuff when `showMenu` is set
  // To prevent from content flashing
  if (showMenu === null) {
    return null
  }

  if (currentItem) {
    return (
      <div css={styles.main}>
        <div css={styles.component}>
          <currentItem.options.component />
        </div>
        <Panel panel={{ code: currentItem.options.code }} />
      </div>
    )
  }

  const readmeComponent =
    typeof readme === 'function' ? (
      React.createElement(readme, null)
    ) : (
      <ReactMarkdown
        source={readme}
        escapeHtml={false}
        renderers={{ code: CodeBlock, heading: HeadingRenderer }}
      />
    )

  return (
    <div css={styles.main}>
      <div css={styles.readme}>{readmeComponent}</div>
    </div>
  )
}

const styles = {
  main: css`
    position: absolute;
    top: var(--header-height);
    left: 0;
    bottom: 0;
    width: 100%;
    @media (min-width: 992px) {
      padding-left: var(--sidebar-width);
      top: 0;
    }
  `,
  component: css`
    padding: 10px;
    height: calc(100% - var(--panel-height));
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    overflow: auto;

    @media (min-width: 992px) {
      padding: 10px calc(var(--sidebar-width) + 10px);
    }
  `,
  readme: css`
    padding: 10px;
    max-width: 800px;
    line-height: 1.5;

    @media (min-width: 992px) {
      padding: 10px 20px;
    }

    & > *:first-of-type {
      margin-top: 0;
    }

    & > *:last-of-type {
      margin-bottom: 0;
    }

    & a {
      color: #0366d6;
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }

    & pre {
      background-color: #f6f8fa;
      border-radius: 3px;
      padding: 16px;
      font-family: var(--font-code);
      margin: 15px 0;
    }

    & *:not(pre) > code {
      background-color: #f6f8fa;
      border-radius: 3px;
      padding: 3px 5px;
      font-size: 0.875rem;
    }

    & h1 {
      font-size: 32px;
    }

    & h2 {
      font-size: 24px;
      border-bottom: 1px solid var(--border-color);
      padding-bottom: 0.3em;
    }

    & h3 {
      font-size: 20px;
    }

    & h4 {
      font-size: 16px;
    }

    & h5 {
      font-size: 14px;
    }

    & h5,
    & h6 {
      font-weight: 600;
    }

    & h6 {
      font-size: 12px;
    }

    & p {
      margin: 15px 0;
    }

    & ul,
    & ol {
      padding-left: 20px;
    }

    & blockquote {
      border-left: 0.25em solid #dfe2e5;
      color: #6a737d;
      padding: 0 1em;
      margin: 15px 0;
    }
  `
}
