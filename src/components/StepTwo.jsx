import React, { Component } from 'react'
import Select from 'react-select'
import { Link } from 'react-router-dom'

const dishes = [
  {
    id: 1,
    name: 'Chicken Burger',
    restaurant: 'Mc Donalds',
    availableMeals: ['lunch', 'dinner']
  }
]

class Step2 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      restaurant: ''
    }
    this.handleSelect = this.handleSelect.bind(this)
  }

  handleSelect(restaurant) {
    this.setState({
      restaurant
    })
  }

  render() {
    const props = this.props
    return (
      <form onSubmit={props.onSubmit} className="step-2">
        <label>
          Please select a Restaurant
          <Select
            value={this.state.restaurant}
            options={dishes}
            labelKey="restaurant"
            valueKey="id"
            onChange={this.handleSelect}
          />
        </label>
        <div className="navigation">
          <Link to="/" className="button left">
            Previous
          </Link>
          <button className="button right" type="submit">
            Next
          </button>
        </div>
      </form>
    )
  }
}

export default Step2
