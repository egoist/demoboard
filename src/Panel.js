import querystring from 'querystring'
import React from 'react'
import { css } from '@emotion/core'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'
import Highlight, { defaultProps } from 'prism-react-renderer'
import prismTheme from 'prism-react-renderer/themes/nightOwlLight'

prismTheme.plain.backgroundColor = '#fff'

export const Panel = withRouter(({ panel, location }) => {
  const query = querystring.parse(location.search.slice(1))
  const tabs = [
    {
      name: 'code',
      content: () => (
        <Highlight
          {...defaultProps}
          theme={prismTheme}
          code={panel.code}
          language={panel.codeLang || 'js'}
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
  ]
    .filter(tab => tab.content)
    .map((tab, index) => {
      if (query.tab === tab.name) {
        tab.active = true
      } else if (!query.tab && index === 0) {
        tab.active = true
      }

      return tab
    })
  return (
    <div css={styles.panel}>
      <div css={styles.tabHeader}>
        {tabs.map(tab => {
          const href = `?${querystring.stringify({ ...query, tab: tab.name })}`
          return (
            <Link
              key={tab.name}
              to={href}
              css={[styles.tabTitle, tab.active && styles.tabTitleActive]}
            >
              {tab.name}
            </Link>
          )
        })}
      </div>
      {tabs.map(
        tab =>
          tab.active && (
            <div key={tab.name} css={styles.content}>
              <tab.content />
            </div>
          )
      )}
    </div>
  )
})

const styles = {
  panel: css`
    position: absolute;
    height: var(--panel-height);
    bottom: 0;
    left: 0;
    width: 100%;
    border-top: 1px solid var(--border-color);
  `,
  tabHeader: css`
    height: 30px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid var(--border-color);
  `,
  tabTitle: css`
    padding: 0 10px;
    color: #999;
    text-decoration: none;
    &:hover {
      color: #555;
    }
  `,
  tabTitleActive: css`
    color: inherit !important;
  `,
  code: css`
    margin: 0;
    font-family: var(--font-code);
    white-space: pre-wrap;
    word-break: normal;
    font-size: 0.875rem;
  `,
  content: css`
    overflow: auto;
    padding: 10px;
  `
}
