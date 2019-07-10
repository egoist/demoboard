import querystring from 'querystring'
import React from 'react'
import { css } from '@emotion/core'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'
import { CodeBlock } from './CodeBlock'

export const Panel = withRouter(({ panel, location }) => {
  const query = querystring.parse(location.search.slice(1))
  const tabs = [
    {
      name: 'code',
      content: () => <CodeBlock language={panel.codeLang} value={panel.code} />
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

    @media (min-width: 992px) {
      padding-left: var(--sidebar-width);
    }
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
  content: css`
    overflow: auto;
    padding: 10px;
  `
}
