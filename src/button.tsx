/** @jsx $mol_jsx */

import { $mol_jsx_view as View, $mol_jsx } from 'mol_jsx_lib/web'

export class Button extends View {
  // empty handler
  activate(event: Event) {}

  // render dom
  render() {
    console.log(`Render ${this}`)
    return (
      <button onclick={(event: Event) => this.activate(event)}>
        {...this.childNodes}
      </button>
    )
  }
}
