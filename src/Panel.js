import querystring from 'querystring'
import React from 'react'
import { css } from '@emotion/core'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'
import { CodeBlock } from './CodeBlock'
import { createMarkdown } from './utils/createMarkdown'

export const Panel = withRouter(({ panel, location }) => {
  const query = querystring.parse(location.search.slice(1))
  const tabs = [
    panel.readme && {
      name: 'readme',
      displayName: 'Readme',
      content: () => createMarkdown(panel.readme)
    },
    panel.code && {
      name: 'code',
      displayName: 'Code',
      content: () => <CodeBlock language={panel.codeLang} value={panel.code} />
    }
  ]
    .filter(Boolean)
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
              {tab.displayName}
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
    color: #999;
    text-decoration: none;
    padding: 0 10px;
    display: flex;
    height: 100%;
    align-items: center;
    &:hover {
      color: #555;
    }
  `,
  tabTitleActive: css`
    color: var(--theme-color) !important;
    box-shadow: inset 0 -1px 0 0 var(--theme-color);
    background-color: var(--panel-title-bg);
  `,
  content: css`
    overflow: auto;
    padding: 10px;
    height: calc(100% - 30px);
  `
}
