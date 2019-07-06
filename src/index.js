import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { App } from './App'

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

function create() {
  return new Demoboard()
}

function mount(_boards, target) {
  const boards = [].concat(_boards)

  render(
    <Router>
      <Route path="*" render={props => <App {...props} boards={boards} />} />
    </Router>,
    document.querySelector(target)
  )
}

export { create, mount }
