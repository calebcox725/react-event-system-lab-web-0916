const React = require('react')

class Keypad extends React.Component {
  constructor() {
    super()

    this.passwordEntry = this.passwordEntry.bind(this)
  }

  passwordEntry() {
    console.log('Entering password...')
  }

  render() {
    return (
      <div>
        <input type="password" onKeyUp={this.passwordEntry} />
      </div>
    )
  }
}

module.exports = Keypad
