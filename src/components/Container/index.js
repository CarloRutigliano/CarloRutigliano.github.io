import React, { PropTypes } from "react"

import styles from "./index.css"
import starsImg from "../Cube/img/stars.jpg"

const inlineStyle = {
  backgroundImage: "url("+starsImg+")",
}

const Container = (props) => (
  <div style={ inlineStyle } className={ styles.container }>
    { props.children }
  </div>
)

Container.propTypes = {
  children: PropTypes.node,
}

export default Container
