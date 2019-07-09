import querystring from 'querystring'
import React from 'react'
import { Global, css } from '@emotion/core'
import { withRouter } from 'react-router'
import { Sidebar } from './Sidebar'
import { Main } from './Main'
import { useMedia } from './utils/useMedia'
import { findItems } from './utils/findItem'

export const App = withRouter(({ boards, options, location }) => {
  // Show sidebar menu when the view port is at least 992px (tablet-landscape) wide
  const [isWide] = useMedia('(min-width:992px)', null)
  const [showMenu, setShowMenu] = useMedia('(min-width:992px)', null)
  const query = querystring.parse(location.search.slice(1))
  const currentItem = findItems(boards, query)

  const { title = 'Demoboard' } = options

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
            --border-color: #e6e6e6;
            --menu-item-active-color: #0088cc;
            --panel-height: 300px;
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
        title={title}
        boards={boards}
        showMenu={showMenu}
        setShowMenu={setShowMenu}
        isWide={isWide}
      />
      <Main
        currentItem={currentItem}
        title={title}
        boards={boards}
        readme={options.readme}
        showMenu={showMenu}
      />
    </div>
  )
})
