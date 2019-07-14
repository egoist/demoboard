import React from 'react'
import { css } from '@emotion/core'
import { Link } from 'react-router-dom'
import { Board } from './Board'
import { Resizebar } from './Resizebar'

export const Sidebar = ({ title, boards, showMenu, setShowMenu, isWide }) => {
  if (showMenu === null) {
    return null
  }

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

  const menuIcon = isWide ? null : showMenu ? (
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
  )

  const resizeBar = isWide ? (
    <Resizebar
      axis={'x'}
      rootSelector={'--sidebar-width'}
      bounds={{ min: 160, max: window.outerWidth - 480 }}
    ></Resizebar>
  ) : null

  return (
    <div css={styles.sidebar}>
      <div css={styles.header}>
        <div css={styles.headerLeft}>
          {menuIcon}

          <h1 css={styles.siteTitle}>
            <Link to="/">{title}</Link>
          </h1>
        </div>
      </div>
      {showMenu && (
        <div css={styles.menu}>
          {resizeBar}
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
    height: var(--header-height);
    border-bottom: 1px solid var(--border-color);
    display: flex;
    align-items: center;
    padding: 0 10px;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background: var(--sidebar-bg);
    border-right: 1px solid var(--border-color);
    z-index: 1000;
    @media (min-width: 992px) {
      width: var(--sidebar-width);
    }
  `,
  menu: css`
    position: fixed;
    top: var(--header-height);
    left: 0;
    bottom: 0;
    width: var(--sidebar-width);
    background: var(--sidebar-bg);
    border-right: 1px solid var(--border-color);
    z-index: 1000;
  `,
  headerLeft: css`
    display: flex;
    align-items: center;
    user-select: none;
    & svg {
      width: 1em;
      height: 1em;
      margin-right: 5px;
      color: #9a9898;
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
    & a {
      color: inherit;
      text-decoration: none;
    }
  `,
  searchWrapper: css`
    padding: 10px;
  `,
  search: css`
    border: 1px solid var(--border-color);
    border-radius: 3px;
    width: 100%;
    padding: 8px 10px;
    font-size: 0.9rem;
  `
}
