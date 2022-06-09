/** @jsx $mol_jsx */

import { $mol_jsx_view as View, $mol_jsx } from 'mol_jsx_lib/web'

export class Title extends View {
  // constant as default
  value() {
    return ''
  }

  // render dom
  render() {
    console.log(`Render ${this}`)
    return <h1>{this.value()}</h1>
  }
}
