import React from 'react'
import { css } from '@emotion/core'

export const Resizebar = ({ axis, rootSelector, bounds }) => {
  const checkX = e => {
    const barPosition = axis === 'x' ? e.pageX : window.innerHeight - e.pageY

    if (bounds && (bounds.min >= barPosition || bounds.max <= barPosition))
      return false

    document.documentElement.style.setProperty(rootSelector, barPosition + 'px')
  }

  const dragstart = e => {
    e.preventDefault()
    window.addEventListener('mousemove', checkX)
    window.addEventListener('mouseup', () =>
      window.removeEventListener('mousemove', checkX)
    )
  }

  return <div css={styles[axis]} onMouseDown={dragstart}></div>
}

const styles = {
  x: css`
    height: 100vh;
    width: 5px;
    position: absolute;
    bottom: 0;
    right: -5px;
    cursor: ew-resize;
  `,
  y: css`
    height: 5px;
    width: 100%;
    position: absolute;
    top: -5px;
    left: 0;
    cursor: ns-resize;
  `
}
