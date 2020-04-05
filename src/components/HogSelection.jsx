import defaultimage from '../hog-imgs/cherub.png'
import agp from '../hog-imgs/augustus_gloop.jpg'
import bop from '../hog-imgs/bay_of_pigs.jpg'
import cub from '../hog-imgs/cherub.jpg'
import gnt from '../hog-imgs/galaxy_note.jpg'
import lme from '../hog-imgs/leggo_my_eggo.jpg'
import mbd from '../hog-imgs/mudblood.jpg'
import pls from '../hog-imgs/piggy_smalls.jpg'
import pcp from '../hog-imgs/porkchop.jpg'
import rsh from '../hog-imgs/rainbowdash.jpg'
import sty from '../hog-imgs/sobriety.jpg'
import tpc from '../hog-imgs/the_prosciutto_concern.jpg'
import tbl from '../hog-imgs/trouble.jpg'
import tfl from '../hog-imgs/truffleshuffle.jpg'

import React, { Component } from 'react';

const imageMap = {
  'Mudblood': mbd,
  'Porkchop': pcp,
  'Cherub': cub,
  'Piggy smalls': pls,
  'Trouble': tbl,
  'Sobriety': sty,
  'Rainbowdash': rsh,
  'TruffleShuffle': tfl,
  'Bay of Pigs': bop,
  'The Prosciutto Concern': tpc,
  'Galaxy Note': gnt,
  'Leggo My Eggo': lme,
  'Augustus Gloop': agp,
  'default': defaultimage
}

class HogSelection extends Component {


  render() {
    const name = this.props.hog.name
    const imageHog = imageMap[this.props.hog.name]
    
    return (
      <div className="item" data-id={name} onClick={this.props.handleInputs}>
        <div className="left floated content">
          <img className="ui avatar image" src={imageHog} alt={name}/>
          - {name}
        </div>
      </div>
    )
  }

}

export default HogSelection;
