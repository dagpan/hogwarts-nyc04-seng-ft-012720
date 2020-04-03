import React from 'react';
import HogCard from './HogCard'

const HogContainer = (props) => {
  console.log(props)

  let hogsArray = props.hogs.map((oneHog) => {
    return <HogCard
      key={oneHog.name}
      hog={oneHog}
    />
  })
  
  return(
      <div className="ui link cards">
        {hogsArray}
      </div>
  );
}

export default HogContainer;
