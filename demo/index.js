import React from 'react'
import { create, mount } from '../src'
// eslint-disable-next-line
import readme from '!raw-loader!../README.md'

const demoboard = create()

demoboard
  .section('Buttons')
  .add('Primary Button', {
    component: () => <button>Primary Button</button>,
    code: `<button>Primary Button</button>`
  })
  .add('Pink Button', {
    component: () => <button style={{ color: 'pink' }}>Pink Button</button>,
    code: `<button style={{ color: 'pink' }}>Pink Button</button>`
  })

demoboard.section('Lists').add('Unordered List', {
  component: () => (
    <ul>
      <li>First item</li>
      <li>Second item</li>
    </ul>
  ),
  code: `<ul>
  <li>First item</li>
  <li>Second item</li>
</ul>`,
  readme: `
  \`ul\` tag is used for unordered lists.
  `
})

demoboard.section('Other').add('Blockquote', {
  component: () => <blockquote>lorem</blockquote>
})

mount(demoboard, '#app', {
  readme,
  title: 'With Social Links',
  socialLinks: [
    {
      type: 'github',
      url: 'https://github.com/egoist/demoboard'
    },
    {
      type: 'twitter',
      url: 'https://twitter.com/github'
    },
    {
      type: 'donate',
      url: 'https://www.patreon.com/egoist'
    },
    {
      type: 'custom',
      url: 'https://www.google.com'
    }
  ]
})
