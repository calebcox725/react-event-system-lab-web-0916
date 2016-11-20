const React = require('react')

class EyesOnMe extends React.Component {
  constructor () {
    super()

    this.eyesOn = this.eyesOn.bind(this)
    this.eyesOff = this.eyesOff.bind(this)
  }

  eyesOn() {
    console.log('Good!')
  }

  eyesOff() {
    console.log('Hey! Eyes on me!')
  }

  render() {
    return (
      <div>
        <button onFocus={this.eyesOn} onBlur={this.eyesOff} />
      </div>
    )
  }
}

module.exports = EyesOnMe
