import React, { Component } from 'react'
import Select from 'react-select'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import 'react-select/dist/react-select.css'

import { setMealType, setNumberOfPeople } from '../actions'
import { mealSelector } from '../selectors'

class Step extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '',
      people: 1
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSelect = this.handleSelect.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange({ target }) {
    this.props.setNumberOfPeople(target.value)
  }

  handleSelect(value) {
    console.log('setting meal', value)
    this.props.setMealType(value)
  }

  async handleSubmit(e) {
    e.preventDefault()
    await this.props.setMealType(this.state.value, this.state.people)
  }

  render() {
    console.log(this.props)
    const meals = [
      { label: 'Breakfast', value: 'breakfast' },
      { label: 'Lunch', value: 'lunch' },
      { label: 'Dinner', value: 'dinner' }
    ]
    return (
      <form onSubmit={this.handleSubmit} className="step-1">
        <label>
          Please select a Meal
          <Select
            value={this.props.food.meal}
            options={meals}
            simpleValue
            onChange={this.handleSelect}
          />
        </label>
        <label>
          Please enter Number of people
          <input
            type="number"
            name="people"
            value={this.props.food.numberOfPeople}
            onChange={this.handleChange}
            max={10}
            min={1}
          />
        </label>
        <div>
          <Link to="/2" className="button right">
            Next
          </Link>
        </div>
      </form>
    )
  }
}

Step.propTypes = {
  setMealType: PropTypes.func,
  food: PropTypes.object
}

const mapStateToProps = state => ({
  food: mealSelector(state)
})

export default connect(mapStateToProps, {
  setMealType,
  setNumberOfPeople
})(Step)
