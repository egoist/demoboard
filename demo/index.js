import React from 'react'
import 'highlight.js/styles/github.css'
import 'github-markdown-css/github-markdown.css'
import { create, mount } from '../src'
import readme from '../README.md'

const demoboard = create()

demoboard
  .section('Buttons')
  .add('Primary Button', {
    component: () => <button>Primary Button</button>
  })
  .add('Pink Button', {
    component: () => <button style={{ color: 'pink' }}>Pink Button</button>
  })

demoboard.section('Lists').add('Unordered List', {
  component: () => (
    <ul>
      <li>First item</li>
      <li>Second item</li>
    </ul>
  )
})

mount(demoboard, '#app', {
  readme: () => (
    <div
      className="markdown-body"
      dangerouslySetInnerHTML={{ __html: readme }}
    ></div>
  )
})
