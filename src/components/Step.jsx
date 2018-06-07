import React, { Component } from 'react'
import Select from 'react-select'
import PropTypes from 'prop-types'
import 'react-select/dist/react-select.css'
const dishes = [
  {
    id: 1,
    name: 'Chicken Burger',
    restaurant: 'Mc Donalds',
    availableMeals: ['lunch', 'dinner']
  }
]
class Step extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '',
      people: 0,
      dishCount: [],
      meal: '',
      dish: ''
    }
    this.addDishCount = this.addDishCount.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSelect = this.handleSelect.bind(this)
  }

  handleChange({ target }) {
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name
    this.setState({
      [name]: value
    })
  }

  handleSelect(option) {
    return value => {
      this.setState({
        [option]: value
      })
    }
  }

  addDishCount() {
    const dishCount = this.state.dishCount
    this.setState({
      dishCount: dishCount.concat([
        {
          dish: '',
          no: 1
        }
      ])
    })
  }

  renderForm(step) {
    switch (step) {
      case 2:
        return (
          <form onSubmit={this.props.onSubmit}>
            <label htmlFor="">
              Please select a Restaurant
              <Select
                value={this.state.restaurant}
                options={dishes}
                valueKey="id"
                labelKey="restaurant"
                onChange={this.handleSelect('restaurant')}
              />
            </label>
          </form>
        )
      case 3:
        return (
          <div>
            <div>
              {this.state.dishCount.map(index => (
                <DishSelect
                  key={index + 'a'}
                  dish={this.state.dish}
                  servings={this.state.servings}
                />
              ))}
            </div>
            <div>
              <a onClick={this.addDishCount}>add</a>
            </div>
          </div>
        )
      default:
        return (
          <form onSubmit={this.props.onSubmit}>
            <label>
              <Select
                value={this.state.value}
                options={dishes}
                labelKey="name"
                valueKey="id"
                onChange={this.handleSelect('meal')}
              />
            </label>
            <label>
              <input
                type="number"
                name="people"
                value={this.state.people}
                onChange={this.handleChange}
              />
            </label>
          </form>
        )
    }
  }

  render() {
    const props = this.props

    return this.renderForm(props.step)
  }
}

const DishSelect = ({ props }) => (
  <div>
    <label htmlFor="">
      Please select a Dish
      <Select
        value={props.dish}
        options={dishes}
        valueKey="id"
        labelKey="dish"
        onChange={this.handleSelect('restaurant')}
      />
    </label>
    <input
      type="number"
      name="servings"
      value={props.servings}
      onChange={this.handleChange}
      ter
    />
  </div>
)

Step.propTypes = {
  onSubmit: PropTypes.func
}

export default Step
