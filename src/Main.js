import querystring from 'querystring'
import React from 'react'
import { withRouter } from 'react-router'
import { css } from '@emotion/core'

export const Main = withRouter(({ location, boards, readme }) => {
  const query = querystring.parse(location.search.slice(1))
  const item = findItem(boards, query)
  if (item) {
    return (
      <div css={styles.main}>
        <item.options.component />
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
})

const findItem = (boards, query) => {
  let board
  let item

  // Find matched board
  for (let i = 0; i < boards.length; i++) {
    if (query.board && query.board === boards[i].title) {
      board = boards[i]
    } else if (!query.board) {
      board = boards[0]
    }
  }

  for (let i = 0; i < board.sections.length; i++) {
    const section = board.sections[i]
    if (section.title === query.section) {
      for (let i = 0; i < section.items.length; i++) {
        if (section.items[i].title === query.item) {
          item = section.items[i]
          break
        }
      }
    }
  }

  return item
}

const styles = {
  main: css`
    padding: 10px;
  `
}
