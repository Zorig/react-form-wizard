import React, { Component } from 'react'
import Select from 'react-select'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { dishOptionSelector, mealSelector } from '../selectors'
import { setNumberOfServings, setDish, addDish, removeDish } from '../actions'

class StepThree extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dishes: {
        numberOfServings: 1,
        dish: {}
      }
    }
    this.handleSelect = this.handleSelect.bind(this)
    this.handleInput = this.handleInput.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.addDishOption = this.addDishOption.bind(this)
  }

  handleInput({ target }) {
    console.log(target.value)
    const dishes = { ...this.state.dishes }
    dishes.numberOfServings = target.value
    this.props.setNumberOfServings(target.value)
    // this.setState({
    //   ...this.state,
    //   dishes: {
    //     numberOfServings: target.value
    //   }
    // })
  }

  handleSelect(value) {
    this.setState({
      dishes: {
        dish: value
      }
    })
  }

  addDishOption() {
    const dish = this.state.dishes
    this.setState({
      dishes: dish.concat({ dish: '', numberOfServings: 1 })
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.setDish(this.state.dishes)
    console.log(this.state)
  }

  render() {
    const {
      dishes,
      data,
      removeDish,
      addDish,
      setDish,
      setNumberOfServings
    } = this.props
    return (
      <form className="step-3" onSubmit={this.handleSubmit}>
        {/* {this.state.dishes.map((dish, index) => (
          <DishOption
            key={index + dish.dish}
            {...dish}
            options={data}
            value={this.state.dishes[0].dish}
            setDish={this.handleSelect(index)}
            setNumberOfServings={this.handleInput(index)}
            remove={() => removeDish(index)}
          />
        ))} */}
        <label htmlFor="">
          Please select a Dish
          {/* <a className="right" onClick={props.remove}>
            remove this dish
          </a> */}
          <Select
            options={data}
            value={dishes.dish || this.state.dishes.dish}
            labelKey="name"
            valueKey="id"
            onChange={this.handleSelect}
          />
        </label>
        <label htmlFor="">
          Please enter no. of servings
          <input
            type="number"
            name="numberOfServings"
            value={dishes.numberOfServings}
            onChange={this.handleInput}
          />
        </label>
        {/* <button type="button" className="add" onClick={() => addDish()}>
          +
        </button> */}
        <div className="navigation">
          <Link to="/2" className="button left">
            Previous
          </Link>
          {/* <Link to="/4" className="button right">
            Next
          </Link> */}
          <button type="submit" className="button right">
            Next
          </button>
        </div>
      </form>
    )
  }
}

const DishOption = ({ ...props }) => {
  return (
    <div>
      <label htmlFor="">
        Please select a Dish
        <a className="right" onClick={props.remove}>
          remove this dish
        </a>
        {
          <Select
            options={props.options}
            value={props.value}
            labelKey="name"
            valueKey="id"
            onChange={props.setDish}
          />
        }
      </label>
      <label htmlFor="">
        Please enter no. of servings
        <input
          type="number"
          name="numberOfServings"
          onChange={props.setNumberOfServings}
        />
      </label>
    </div>
  )
}

StepThree.propTypes = {
  setDish: PropTypes.func,
  dishes: PropTypes.object,
  data: PropTypes.array,
  removeDish: PropTypes.func,
  addDish: PropTypes.func
}

const mapStateToProps = state => ({
  data: dishOptionSelector(state),
  dishes: mealSelector(state).dishes
})

export default connect(
  mapStateToProps,
  { setDish, setNumberOfServings, addDish, removeDish }
)(StepThree)
