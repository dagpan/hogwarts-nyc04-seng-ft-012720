import React from "react";
import HogSelectionContainer from './HogSelectionContainer'


class HelloWorld extends React.Component {

  state = {
     hiddenHogs: []
  }

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
         this.props.hogs.forEach(hog => {
              if (ev.currentTarget.dataset.id === hog.name) {
                  if (hog.hidden) {
                      hog.hidden = false
                  } else {
                      hog.hidden = true
                  }
              }
         })
         this.setState({
              hiddenHogs: this.props.hogs
         })
  }

  handleHide = (ev) => {
    this.props.hideHogs(this.state)
  }
 
  render() {
    
    return (
    <div>
      <h1 className="smallHeader">Hello World, Here Are Your Options</h1>
      <h4>Select The Hoggies You Want To Hide</h4>
                <HogSelectionContainer hogs={this.props.hogs}
                                       handleInputs={this.handleInputs} 
                                        />
      <div className="ui labeled button" tabIndex="0">
          <div className="ui orange button" onClick={this.handleHide}>
              <i className="filter icon"></i> Hide/UnHide
          </div>
          <a className="ui basic orange left pointing label">
           hide the hogs you selected
          </a>
      </div>
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
