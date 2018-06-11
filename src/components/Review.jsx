import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { mealSelector } from '../selectors'

class StepFour extends Component {
  handleSubmit(e) {
    e.preventDefault()
    console.log(this.props)
  }
  render() {
    return (
      <form>
        Meals: No. of People: Restaurant: Dishes:
        <Link to="/3">Previous</Link>
        <button type="submit" onClick={this.handleSubmit}>
          Submit
        </button>
      </form>
    )
  }
}

const mapStateToProps = state => ({
  data: mealSelector(state)
})

export default connect(mapStateToProps, {})(StepFour)
