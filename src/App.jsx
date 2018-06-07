import React, { Component } from 'react'
import { Step } from './components'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      step: 1
    }
    this.nextPage = this.nextPage.bind(this)
    this.prevPage = this.prevPage.bind(this)
  }

  nextPage() {
    const step = this.state.step + 1
    this.setState({ step })
  }

  prevPage() {
    const step = this.state.step - 1
    this.setState({ step })
  }

  handleSubmit(e) {
    e.preventDefault()
    console.log('submit')
  }

  renderForm(step) {
    switch (step) {
      case 2:
        return (
          <Step
            step={this.state.step}
            onSubmit={this.nextPage}
            prev={this.prevPage}
          />
        )
      case 3:
        return (
          <Step
            step={this.state.step}
            onSubmit={this.nextPage}
            prev={this.prevPage}
          />
        )
      case 4:
        return (
          <Step
            step={this.state.step}
            onSubmit={this.nextPage}
            prev={this.prevPage}
          />
        )
      default:
        return <Step step={1} onSubmit={this.nextPage} />
    }
  }

  render() {
    const { step } = this.state
    console.log(step)
    return (
      <div>
        {this.renderForm(step)}
        {step > 1 && <button onClick={this.prevPage}>Previous</button>}
        {step === 4 ? (
          <button>Send</button>
        ) : (
          <button onClick={this.nextPage}>Next</button>
        )}
      </div>
    )
  }
}

export default App
