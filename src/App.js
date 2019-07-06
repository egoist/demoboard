import React from 'react'
import { Global, css } from '@emotion/core'
import { Sidebar } from './Sidebar'
import { Main } from './Main'

export const App = ({ boards, readme }) => {
  return (
    <div>
      <Global
        styles={css`
          :root {
            --sidebar-width: 280px;
            --sidebar-bg: #f6f9fc;
            --font-sans: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
              'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
              'Helvetica Neue', sans-serif;
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
      <Sidebar boards={boards} />
      <Main boards={boards} readme={readme} />
    </div>
  )
}
