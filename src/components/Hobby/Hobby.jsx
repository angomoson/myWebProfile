import React from 'react'
import "./Hobby.css"
import Hobbies from './Hobbies'
import youtube from "../image/youtube.png"
import badminton from "../image/shuttlecock.png"
import game  from "../image/gamepad.png"
import movie from "../image/television.png"

const Hobby = () => {
  return (
    <div id='hobby'>
      <div className='hobby-page'>
          <section className='hob-wrapper'>
          <div className="hob-left">
            <div className="hob-left-title">
              <h3>Hobby</h3>
            </div>
            <div className="hob-left-desc">
            We should make some time in between and organize our life, relax ourselves and spend more time with our family, friends, and pursue our own hobbies.
            </div>
          </div>
          <div className="hob-right">
            <div className="hob-right-title">
              <p>During my leisure times i spent most of my time in :</p>
            </div>
            <div className="hob-right-hobbies">

              <Hobbies name="Youtube" img={youtube}/>
              <Hobbies name="Watching Movies" img={movie}/>
              <Hobbies name="Badminton" img={badminton}/>
              <Hobbies name="Video Games" img={game}/>

            </div>
          </div>
          </section>
          <hr className='white-hr'/>
        </div>
    </div>
  )
}

export default Hobby