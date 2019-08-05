import React from 'react'
import { css } from '@emotion/core'

export const Resizebar = ({ axis, rootSelector, bounds }) => {
  const checkPosition = e => {
    if (e.touches) e = e.touches[0]

    const barPosition = axis === 'x' ? e.pageX : window.innerHeight - e.pageY

    if (bounds && (bounds.min >= barPosition || bounds.max <= barPosition))
      return false

    document.documentElement.style.setProperty(rootSelector, barPosition + 'px')
  }

  const dragstart = () => {
    document.body.style = `
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
    `
    window.addEventListener('mousemove', checkPosition)
    window.addEventListener('mouseup', () => {
      window.removeEventListener('mousemove', checkPosition)
      dragend()
    })
    window.addEventListener('touchmove', checkPosition)
    window.addEventListener('touchend', () => {
      window.removeEventListener('touchmove', checkPosition)
      dragend()
    })
  }

  const dragend = () => {
    document.body.style = `
      -webkit-user-select: text;
      -moz-user-select: text;
      -ms-user-select: text;
    `
  }

  return (
    <div
      css={styles[axis]}
      onMouseDown={dragstart}
      onTouchStart={dragstart}
    ></div>
  )
}

const styles = {
  x: css`
    height: 100vh;
    width: 10px;
    position: absolute;
    bottom: 0;
    right: -5px;
    cursor: ew-resize;
  `,
  y: css`
    height: 10px;
    width: 100%;
    position: absolute;
    top: -5px;
    left: 0;
    cursor: ns-resize;
  `
}
