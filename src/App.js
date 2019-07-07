import React from 'react'
import { Global, css } from '@emotion/core'
import { Sidebar } from './Sidebar'
import { Main } from './Main'
import { useMedia } from './utils/useMedia'

export const App = ({ boards, options }) => {
  // Show sidebar menu when the view port is at least 992px (tablet-landscape) wide
  const [showMenu, setShowMenu] = useMedia('(min-width:992px)', null)

  return (
    <div>
      <Global
        styles={css`
          :root {
            --sidebar-width: 280px;
            --sidebar-bg: #f7f7f7;
            --font-sans: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
              'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
              'Helvetica Neue', sans-serif;
            --header-height: 50px;
            --border-color: #e2e2e2;
            --menu-item-active-bg: #e6e6e6;
            --menu-item-hover-bg: #f0f0f0;
          }

          * {
            box-sizing: border-box;
          }

          body {
            margin: 0;
            font-family: var(--font-sans);
          }
        `}
      />
      <Sidebar
        title={options.title}
        boards={boards}
        showMenu={showMenu}
        setShowMenu={setShowMenu}
      />
      <Main boards={boards} readme={options.readme} showMenu={showMenu} />
    </div>
  )
}
