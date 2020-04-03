import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HogContainer from './HogContainer'
import HelloWorld from './HelloWorld'

let filterOnOff = false
let sortNameOnOff = false
let sortWeightOnOff = false
let hideHogsOnOff = false

class App extends Component {
 
  state = {
    hogs: hogs
  }

  filterHogs = () => {
      filterOnOff = !filterOnOff
      if (filterOnOff) {
          let filteredArray = this.state.hogs.filter((hog) => {
                              return hog.greased !== true
          })
          this.setState({
               hogs: filteredArray
          })
      } else {
          this.setState({
               hogs: hogs
          })
      }
  }

  hideHogs = (hogName) => {
      hideHogsOnOff = !hideHogsOnOff
      if (hideHogsOnOff) {
          if (hogName !== 'Select The Hoggies You Want To Hide') {
              let filteredArray = this.state.hogs.filter((hog) => {
                              return hog.name !== hogName
              })
              this.setState({
                  hogs: filteredArray
              })
            } else {
              this.setState({
                hogs: hogs
              })
            }
      } else {
          this.setState({
               hogs: hogs
          })
      }
  }
  

  sortHogsName = () => {
       sortNameOnOff = !sortNameOnOff
       function compare(a, b) {
        const nameA = a.name.toUpperCase()
        const nameB = b.name.toUpperCase()
        let comparison = 0
        if (nameA > nameB) {
          comparison = 1
        } else if (nameA < nameB) {
          comparison = -1
        }
        return comparison
       }
       if (sortNameOnOff) {
        let sortedArray = [...this.state.hogs]
        sortedArray.sort(compare)
        this.setState({
             hogs: sortedArray
        })
    } else {
        this.setState({
             hogs: hogs
        })
    }
  }

  sortHogsWeight = () => {
       sortWeightOnOff = !sortWeightOnOff
       function compare(a, b) {
        const weightA = a.weight
        const weightB = b.weight
        let comparison = 0
        if (weightA > weightB) {
          comparison = 1
        } else if (weightA < weightB) {
          comparison = -1
        }
        return comparison
       }
       if (sortWeightOnOff) {
        let sortedArray = [...this.state.hogs]
        sortedArray.sort(compare)
        this.setState({
             hogs: sortedArray
        })
    } else {
        this.setState({
             hogs: hogs
        })
    }
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <HelloWorld filterHogs={this.filterHogs}
                    sortHogsName={this.sortHogsName}
                    sortHogsWeight={this.sortHogsWeight}
                    hideHogs={this.hideHogs} />
        <HogContainer hogs={this.state.hogs}
                    />
      </div>
    )
  }
}

export default App;
