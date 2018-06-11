import React, { Component } from 'react'
import Select from 'react-select'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { dishSelector } from '../selectors'

const dishes = [
  {
    id: 6,
    name: 'Burrito',
    restaurant: 'Taco Bell',
    availableMeals: ['lunch', 'dinner']
  },
  {
    id: 7,
    name: 'Tacos',
    restaurant: 'Taco Bell',
    availableMeals: ['lunch', 'dinner']
  },
  {
    id: 8,
    name: 'Quesadilla',
    restaurant: 'Taco Bell',
    availableMeals: ['lunch', 'dinner']
  }
]
class StepThree extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.addDishOption = this.addDishOption.bind(this)
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
    console.log(this.props)
    const f = [{ dishes: '', number: 1 }]
    return (
      <form className="step-3">
        {f.map((dish, index) => (
          <DishOption key={index + dish.number} {...dish} />
        ))}
        <button className="add">+</button>
        <div className="navigation">
          <Link to="/2" className="button left">
            Previous
          </Link>
          <Link to="/4" className="button right">
            Next
          </Link>
        </div>
      </form>
    )
  }
}

const DishOption = ({ props }) => (
  <div>
    <label htmlFor="">
      Please select a Dish
      {/* <Select
        options={dishes}
        value={}
        labelKey="name"
        valueKey="id"
      /> */}
      <input type="text" />
    </label>
    <label htmlFor="">
      Please enter no. of servings
      <input
        type="number"
        name="numberOfServings"
        onChange={this.handleChange}
      />
    </label>
  </div>
)

const mapStateToProps = state => ({
  data: dishSelector(state)
})

export default connect(mapStateToProps, {})(StepThree)
