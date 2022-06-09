/** @jsx $mol_jsx */

import {
  $mol_jsx,
  $mol_jsx_view as View,
  $mol_wire_mem as mem,
  $mol_wire_method as action
} from 'mol_jsx_lib/web'

import { Title } from './title'
import { Button } from './button'

export class App extends View {
  // reactive state
  @mem(0)
  title(next = 'Hello') {
    return next
  }

  // reactive action
  @action
  change(event: Event) {
    this.title(this.title() + ' World')
  }

  // render bound components
  render() {
    console.log(`Render ${this}`)
    return (
      <div>
        <Button id="/change" activate={(event) => this.change(event)}>
          <Title id="/word" value={() => this.title()} />
        </Button>
      </div>
    )
  }
}
