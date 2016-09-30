import React from "react"

import styles from "./index.css"

import html5Img from "./img/html5.png"
import jsImg from "./img/js.png"
import phpImg from "./img/php.png"
import sassImg from "./img/sass.png"
import wpImg from "./img/wp.png"
import reactImg from "./img/react.png"


class Cube extends React.Component {
  constructor(props) {
    super(props)
    this.handleRotateCube = this.handleRotateCube.bind(this);
  }
  handleRotateCube(event) {
    const x = event.clientX - (document.documentElement.clientWidth / 2)
    const y = event.clientY - (document.documentElement.clientWidth / 2)
    const yawn = x / document.documentElement.clientWidth * 270
    const pitch = y / document.documentElement.clientWidth * 270

    this.refs.front.style.transform = "rotateX( "+ (0+pitch) +"deg ) rotateY( "+ (0+yawn) +"deg ) translateZ( 100px )"
    this.refs.back.style.transform = "rotateX( "+ (180+pitch) +"deg ) rotateY( "+ (0-yawn) +"deg ) translateZ( 100px )"
    this.refs.left.style.transform = "rotateX( "+ (0+pitch) +"deg ) rotateY( "+ (90+yawn) +"deg ) translateZ( 100px )"
    this.refs.right.style.transform = "rotateX( "+ (0+pitch) +"deg ) rotateY( "+ (-90+yawn) +"deg ) translateZ( 100px )"
    this.refs.top.style.transform = "rotateX( "+ (90+pitch) +"deg ) rotateZ( "+ (0-yawn) +"deg ) translateZ( 100px )"
    this.refs.bottom.style.transform = "rotateX( "+ (-90+pitch) +"deg ) rotateZ( "+ (0+yawn) +"deg ) translateZ( 100px )"
  }
  render(){
    return (
      <div onMouseMove={ this.handleRotateCube } className={ styles.section }>
        <div className={ styles.container }>
          <div className={ styles.cube }>
              <figure ref="front" className={ styles.front }>
                <img src={ html5Img } alt="" />
              </figure>
              <figure ref="back" className={ styles.back }>
                <img src={ reactImg } />
              </figure>
              <figure ref="right" className={ styles.right }>
                <img src={ phpImg } alt="" />
              </figure>
              <figure ref="left" className={ styles.left }>
                <img src={ jsImg } alt="" />
              </figure>
              <figure ref="top" className={ styles.top }>
                <img src={ wpImg } alt="" />
              </figure>
              <figure ref="bottom" className={ styles.bottom }>
                <img src={ sassImg } alt="" />
              </figure>
          </div>
        </div>
      </div>
    )
  }
}

export default Cube
