# Demoboard

[![NPM version](https://badgen.net/npm/v/demoboard)](https://npmjs.com/package/demoboard) [![NPM downloads](https://badgen.net/npm/dm/demoboard)](https://npmjs.com/package/demoboard) [![CircleCI](https://badgen.net/circleci/github/egoist/demoboard/master)](https://circleci.com/gh/egoist/demoboard/tree/master) [![donate](https://badgen.net/badge/support%20me/donate/ff69b4)](https://patreon.com/egoist) [![chat](https://badgen.net/badge/chat%20on/discord/7289DA)](https://chat.egoist.moe)

## Table of Contents

<!-- toc -->

- [Install](#install)
- [Basic Usage](#basic-usage)
- [Guide](#guide)
  - [React Components](#react-components)
  - [Vue Components](#vue-components)
  - [Customize Homepage](#customize-homepage)
- [Contributing](#contributing)
- [Author](#author)

<!-- tocstop -->

## Install

```bash
yarn add demoboard
```

## Basic Usage

[![Edit Demoboard Example](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/demoboard-example-eplue?fontsize=14)

```js
import React from 'react'
import { create, mount } from 'demoboard'

// A component that you want to demonstrate
import Button from './Button'

// Create a demoboard instance
const demoboard = create()

// Add a section to demonstrate the `Button` component
demoboard
  .section('Buttons')
  .add('Primary Button', {
    // `component` should be a React component
    component: () => <Button>Primary Button</Button>
  })
  .add('Success Button', {
    component: () => <Button variant="success">Success Button</Button>
  })

// Mount the demoboard to given selector
mount(demoboard, '#app')
```

## Guide

### React Components

It just works™.

### Vue Components

Just convert your Vue component into React component with [@egoist/vue-to-react](https://github.com/egoist/vue-to-react):

```js
import toReact from '@egoist/vue-to-react'
import Button from './Button.vue'

demoboard.section('Buttons').add('Primary Button', {
  component: toReact(Button)
})
```

### Customize Homepage

```js
import { create, mount } from 'demoboard'

const demoboard = create()

const readme = `<h1>Hello</h1>`
// Or
// const readme = () => <h1>Hello</h1>

mount(demoboard, '#app', {
  readme
})
```

`readme` can be an HTML string or a React component.

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## Author

**demoboard** © [EGOIST](https://github.com/egoist), Released under the [MIT](./LICENSE) License.<br>
Authored and maintained by EGOIST with help from contributors ([list](https://github.com/egoist/demoboard/contributors)).

> [github.com/egoist](https://github.com/egoist) · GitHub [@EGOIST](https://github.com/egoist) · Twitter [@\_egoistlily](https://twitter.com/_egoistlily)
