import React from 'react';
import HogSelection from './HogSelection'

const HogSelectionContainer = (props) => {
 
  let hogsList = props.hogs.map((hog) => {
                 return <HogSelection
                              key={hog.name}
                              hog={hog}
                              handleInputs={props.handleInputs}
                        />
  })

  return(
      <div className="ui mini horizontal selection list">
           {hogsList}
      </div>
  );
}

export default HogSelectionContainer;
