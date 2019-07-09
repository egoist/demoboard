import React from 'react'
import { css } from '@emotion/core'
import { Panel } from './Panel'

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
      <div dangerouslySetInnerHTML={{ __html: readme }}></div>
    )

  return <div css={styles.main}>{readmeComponent}</div>
}

const styles = {
  main: css`
    height: 100%;
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    margin-top: var(--header-height);
    @media (min-width: 992px) {
      margin-top: 0;
      left: var(--sidebar-width);
      width: calc(100% - var(--sidebar-width));
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
  `
}
