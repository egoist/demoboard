import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { App } from './App'
import { createMarkdown } from './utils/createMarkdown'

const uid = () =>
  Math.random()
    .toString(36)
    .substring(7)

class Demoboard {
  constructor() {
    this.id = uid()
    this.sections = []
  }

  /**
   * Create a section in this demoboard
   */
  section(title, options = {}) {
    const section = new Section(title, options)
    this.sections.push(section)
    return section
  }
}

class Section {
  constructor(title, options) {
    this.title = title
    this.options = options
    this.items = []
    this.id = uid()
  }

  /**
   * Add a demo to this section
   */
  add(title, options = {}) {
    this.items.push({
      title,
      options,
      id: uid()
    })
    return this
  }
}

function create(opts) {
  return new Demoboard(opts)
}

function mount(_boards, target, options) {
  const boards = [].concat(_boards)

  render(
    <Router>
      <Route
        path="*"
        render={props => (
          <App {...props} boards={boards} options={options || {}} />
        )}
      />
    </Router>,
    typeof target === 'string' ? document.querySelector(target) : target
  )
}

export { create, mount }
export { CodeBlock } from './CodeBlock'

export const Markdown = ({ source }) => createMarkdown(source)
