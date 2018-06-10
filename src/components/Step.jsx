import React, { Component } from 'react'
import Select from 'react-select'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import 'react-select/dist/react-select.css'

import { setMealType } from '../actions'
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
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name
    this.setState({
      [name]: value
    })
  }

  handleSelect(value) {
    console.log(value)
    this.setState({
      value
    })
  }

  async handleSubmit(e) {
    e.preventDefault()
    await this.props.setMealType(this.state.value, this.state.people)
  }

  render() {
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
            value={this.state.value}
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
            value={this.state.people}
            onChange={this.handleChange}
            max={10}
            min={1}
          />
        </label>
        <div>
          <button type="submit" className="right">
            Next
          </button>
        </div>
      </form>
    )
  }
}

Step.propTypes = {
  setMealType: PropTypes.func
}

const mapStateToProps = state => ({
  mealOptions: mealSelector(state)
})

export default connect(mapStateToProps, {
  setMealType
})(Step)
