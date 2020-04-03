import React, { Fragment } from "react";
import HogContainer from './HogContainer'


class HelloWorld extends React.Component {

  handleFilter = (ev) => {
    this.props.filterHogs()
  }

  handleName = (ev) => {
    this.props.sortHogsName()
  }

  handleWeight = (ev) => {
    this.props.sortHogsWeight()
  }

  handleInputs = (ev) => {
    console.log(ev.target.name)
    console.log(ev.target.value)
    this.props.hideHogs(ev.target.value)
  }

  render() {
    return (
    <div>
      <h1 className="smallHeader">Hello World, Here Are Your Options</h1>
      <h4> </h4>
          <select name="names" multiple="" className="ui simple dropdown" onChange={this.handleInputs}>
            <option value="">Select The Hoggies You Want To Hide</option>
            <option value="Mudblood">Mudblood</option>
            <option value="Porkchop">Porkchop</option>
            <option value="Cherub">Cherub</option>
            <option value="Piggy smalls">Piggy smalls</option>
            <option value="Trouble">Trouble</option>
            <option value="Sobriety">Sobriety</option>
            <option value="Rainbowdash">Rainbowdash</option>
            <option value="TruffleShuffle">TruffleShuffle</option>
            <option value="Bay of Pigs">Bay of Pigs</option>
            <option value="The Prosciutto Concern">The Prosciutto Concern</option>
            <option value="Galaxy Note">Galaxy Note</option>
            <option value="Leggo My Eggo">Leggo My Eggo</option>
            <option value="Augustus Gloop">Augustus Gloop</option>
          </select>
      <h4> </h4>
        <div className="ui labeled button" tabIndex="0">
          <div className="ui pink button" onClick={this.handleFilter}>
            <i className="filter icon"></i> Filter
          </div>
          <a className="ui basic pink left pointing label">
           filter the hogs that are greased
          </a>
        </div>
        <div className="ui labeled button" tabIndex="0">
          <div className="ui green button" onClick={this.handleName}>
            <i className="sort alphabet down icon"></i> Sort
          </div>
          <a className="ui basic left pointing green label">
           sort the hogs based on name
          </a>
        </div>
        <div className="ui labeled button" tabIndex="0">
          <div className="ui green button" onClick={this.handleWeight}>
            <i className="sort numeric down icon"></i> Sort
          </div>
          <a className="ui basic left pointing green label">
           sort the hogs based on weight
          </a>
        </div>
      <h4> </h4>
    </div>
    )
  }
}

export default HelloWorld;
