import React from 'react'
import slugo from 'slugo'

function flatten(text, child) {
  return typeof child === 'string'
    ? text + child
    : React.Children.toArray(child.props.children).reduce(flatten, text)
}

export const HeadingRenderer = props => {
  const children = React.Children.toArray(props.children)
  const text = children.reduce(flatten, '')
  const slug = slugo(text)
  return React.createElement(`h${props.level}`, { id: slug }, props.children)
}
