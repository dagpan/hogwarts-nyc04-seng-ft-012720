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







  render() {
    return (
    <div>
      <h1 className="smallHeader">Hello World, Here Are Your Options</h1>
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
