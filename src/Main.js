import React from 'react'
import { css } from '@emotion/core'
import { Panel } from './Panel'
import { createMarkdown } from './utils/createMarkdown'

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
        <Panel
          panel={{
            code: currentItem.options.code,
            readme: currentItem.options.readme
          }}
        />
      </div>
    )
  }

  return (
    <div css={styles.main}>
      {readme && <div css={styles.readme}>{createMarkdown(readme)}</div>}
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

    @media (min-width: 992px) {
      padding: 10px 20px;
    }
  `
}
