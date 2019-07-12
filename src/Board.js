import querystring from 'querystring'
import React from 'react'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'
import { css } from '@emotion/core'

export const Board = withRouter(({ board, location, keyword, hideMenu }) => {
  const query = querystring.parse(location.search.slice(1))
  const [closedSections, setClosedSections] = React.useState([])
  const toggleSection = id => {
    const index = closedSections.indexOf(id)
    if (index === -1) {
      setClosedSections([...closedSections, id])
    } else {
      setClosedSections(closedSections.filter(sectionId => sectionId !== id))
    }
  }

  const checkKeyword = title => {
    if (!keyword) {
      return true
    }

    return title.toLowerCase().indexOf(keyword) > -1
  }

  return (
    <div css={styles.board}>
      {board.sections.map(section => {
        return (
          <div key={section.id}>
            <div
              css={styles.sectionTitle}
              onClick={() => toggleSection(section.id)}
            >
              {section.title}
            </div>
            {closedSections.indexOf(section.id) === -1 &&
              section.items.map(item => {
                const currentHref = querystring.stringify({
                  section: query.section,
                  item: query.item
                })
                const href = querystring.stringify({
                  section: section.title,
                  item: item.title
                })
                return (
                  checkKeyword(item.title) && (
                    <Link
                      css={[
                        styles.itemTitle,
                        href === currentHref && styles.itemTitleActive
                      ]}
                      onClick={hideMenu}
                      key={item.id}
                      to={`?${href}`}
                    >
                      {item.title}
                    </Link>
                  )
                )
              })}
          </div>
        )
      })}
    </div>
  )
})

const styles = {
  board: css`
    font-size: 0.9rem;
    &:not(:last-child) {
      border-bottom: 1px solid #e2e2e2;
      padding-bottom: 30px;
      margin-bottom: 30px;
    }
  `,
  sectionTitle: css`
    padding: 5px 10px;
    font-size: 0.9rem;
    display: flex;
    align-items: center;
    cursor: pointer;
    user-select: none;
    text-decoration: none;
    color: #999;
    font-weight: 500;

    & svg {
      width: 1em;
      height: 1em;
      fill: #999;
      margin-right: 2px;
    }

    &:hover {
      color: inherit;
    }
  `,
  itemTitle: css`
    display: flex;
    padding: 5px 10px 5px 20px;
    text-decoration: none;
    font-size: 0.875rem;
    color: inherit;

    &:hover {
      color: var(--menu-item-active-color);
    }
  `,
  itemTitleActive: css`
    color: var(--menu-item-active-color) !important;
    &:hover {
      text-decoration: underline !important;
    }
  `
}
