import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Select from 'react-select'
import PropTypes from 'prop-types'

import { restaurantSelector, mealSelector } from '../selectors'
import { setRestaurant } from '../actions'

class Step2 extends Component {
  constructor(props) {
    super(props)
    this.handleSelect = this.handleSelect.bind(this)
  }

  handleSelect(restaurant) {
    this.props.setRestaurant(restaurant)
  }

  render() {
    const { restaurants, food } = this.props
    return (
      <form className="step-2">
        <label>
          Please select a Restaurant
          <Select
            value={food.restaurant}
            options={restaurants}
            labelKey="restaurant"
            valueKey="restaurant"
            onChange={this.handleSelect}
          />
        </label>
        <div className="navigation">
          <Link to="/" className="button left">
            Previous
          </Link>
          <Link to="/3" className="button right">
            Next
          </Link>
        </div>
      </form>
    )
  }
}

Step2.propTypes = {
  setRestaurant: PropTypes.func,
  restaurants: PropTypes.array,
  food: PropTypes.any
}

const mapStateToProps = state => ({
  restaurants: restaurantSelector(state),
  food: mealSelector(state)
})

export default connect(
  mapStateToProps,
  {
    setRestaurant
  }
)(Step2)
