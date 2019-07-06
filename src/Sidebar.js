import React from 'react'
import { css } from '@emotion/core'
import { Board } from './Board'

export const Sidebar = ({ boards }) => {
  const [showMenu, setShowMenu] = React.useState(false)
  const [keyword, setKeyword] = React.useState('')

  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }

  const handleSearch = e => {
    setKeyword(e.target.value)
  }

  const Boards = boards.map((board, index) => (
    <Board key={index} board={board} keyword={keyword} />
  ))

  return (
    <div css={styles.sidebar}>
      <div css={styles.header}>
        <div css={styles.headerLeft}>
          {showMenu ? (
            <svg
              onClick={toggleMenu}
              aria-hidden="true"
              focusable="false"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 352 512"
            >
              <path
                fill="currentColor"
                d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"
              ></path>
            </svg>
          ) : (
            <svg
              onClick={toggleMenu}
              aria-hidden="true"
              focusable="false"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
              ></path>
            </svg>
          )}

          <h1 css={styles.siteTitle}>Demoboard</h1>
        </div>
      </div>
      {showMenu && (
        <div>
          <div css={styles.searchWrapper}>
            <input
              css={styles.search}
              type="text"
              placeholder="Search.."
              onInput={handleSearch}
            />
          </div>
          {Boards}
        </div>
      )}
    </div>
  )
}

const styles = {
  sidebar: css`
    background: var(--sidebar-bg);
  `,
  header: css`
    height: 50px;
    border-bottom: 1px solid #e2e2e2;
    display: flex;
    align-items: center;
    padding: 0 10px;
  `,
  headerLeft: css`
    display: flex;
    align-items: center;
    user-select: none;
    & svg {
      width: 1em;
      height: 1em;
      margin-right: 5px;
      color: #b9b9b9;
      cursor: pointer;
      transition: color 0.3s ease;
      &:hover {
        color: inherit;
      }
    }
  `,
  siteTitle: css`
    font-weight: 500;
    font-size: 1.1rem;
  `,
  searchWrapper: css`
    padding: 10px;
  `,
  search: css`
    border: 1px solid #e2e2e2;
    border-radius: 3px;
    width: 100%;
    padding: 8px 10px;
    font-size: 0.9rem;
  `
}
