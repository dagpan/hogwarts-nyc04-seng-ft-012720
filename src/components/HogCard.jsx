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


class HogCard extends Component {
  

  render() {
    const name = this.props.hog.name
    const specialty = this.props.hog.specialty
    const weight = this.props.hog.weight
    const roundedweight = Math.round(weight * 100)
    const greased = this.props.hog.greased
    const medal = this.props.hog['highest medal achieved']
    const imageHog = imageMap[this.props.hog.name]
    const randYear = getRandomInt(10)

    function getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max))
    }
   


    return (
           <div className="card">
             <div className="ui slide up reveal div">
               <div className="visible content">
                 <img src={imageHog} alt={name} className="ui fluid image"/>
               </div>
               <div className="hidden content">
                 <div className="image">
                   <img className="ui small circular image" src={imageHog} alt={name}/>
                 </div>
                 <div className="my bottom"></div>
                 <div className="content">
                   <div className="center aligned header">
                     <h2 className="hogname">{name}</h2>
                   </div>
                   <div className="center aligned meta">
                     <span className="hoggy">Hoggy Star</span>
                   </div>
                   <div className="my bottom"></div>
                   <div className="center aligned description">
                     <span className="hoggyText">
                        {specialty}
                     </span>
                   </div>
                   <div className="my bottom"></div>
                   <div className="center aligned description">
                     <span className="hoggyText">
                        Weighs probably {roundedweight} kg
                     </span>
                   </div>
                 </div>
                 <div className="my bottom"></div>
                 <div className="extra content">
                   <div className="my bottom visible"></div>
                   <div className="my bottom"></div>
                     <span className="right floated">
                        Won in 201{randYear}
                     </span>
                     <span className="left floated" style={{color: 'gold'}}>
                       <i className="star icon"></i>
                        {medal}
                     </span>
                 </div>
               </div>
             </div>
           </div>
    )
  }

}

export default HogCard;
