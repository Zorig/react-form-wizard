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

class StepThree extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dishes: [
        {
          meal: '',
          numberOfServings: 1
        }
      ]
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange({ target }) {
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name
    this.setState({
      [name]: value,
      numberOfService: 1
    })
  }

  addDishOption(e) {
    e.preventDefault()
    this.state({
      dishes: this.state.dish.concat([
        {
          numberOfServings: 1,
          meal: ''
        }
      ])
    })
  }

  render() {
    const props = this.props
    const { dishes } = this.state
    return (
      <form onSubmit={props.onSubmit} className="step-3">
        {dishes.map((dish, index) => (
          <DishOption
            key={index + dish.meal}
            index={index}
            dish={this.state.dishes[index]}
            {...props}
          />
        ))}
        <button className="add">+</button>
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

const DishOption = ({ props }) => (
  <div>
    <label htmlFor="">
      Please select a Dish
      <Select options={dishes} value={props} labelKey="name" valueKey="id" />
    </label>
    <label htmlFor="">
      Please enter no. of servings
      <input
        type="number"
        name="numberOfServings"
        value="numberOfServings"
        onChange={this.handleChange}
      />
    </label>
  </div>
)

export default StepThree
