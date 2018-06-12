import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { mealSelector } from '../selectors'

class StepFour extends Component {
  handleSubmit(e) {
    e.preventDefault()
    console.log(this.props.data)
  }
  render() {
    const { data } = this.props
    console.log(data.dishes)
    return (
      <form>
        <div>Meal - {data.meal}</div>
        <div>No.of People - {data.numberOfPeople}</div>
        <div>Restaurant - {data.restaurant.name}</div>
        <div>Dish - {data.dishes.numberOfServings}</div>
        <br />
        <Link to="/3" className="button left">
          Previous
        </Link>
        <button
          type="submit"
          className="right button"
          onClick={this.handleSubmit}
        >
          Submit
        </button>
      </form>
    )
  }
}

const mapStateToProps = state => ({
  data: mealSelector(state)
})

export default connect(
  mapStateToProps,
  {}
)(StepFour)
