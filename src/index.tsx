/** @jsx $mol_jsx */

import { $mol_jsx_attach as attach, $mol_jsx } from 'mol_jsx_lib/web'

import { App } from './app'
import { Title } from './title'
import { Button } from './button'

// Attach component to the document by id
attach(document, () => <App id="/app" />)

// Take component instance for element
const button = Button.of(document.getElementById('/app/change')!)
const title = Title.of(document.getElementById('/app/word')!)

// Check default output
console.assert(title.value() === 'Hello', 'Wrong title value')

setTimeout(() => {
  // Enforce click event
  button.activate(new PointerEvent('click'))

  // Check changed output
  console.assert(title.value() === 'Hello World', 'Wrong title value')
}, 1000)
