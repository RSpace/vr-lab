import {Entity} from 'aframe-react';
import React from 'react';

export default props => {
  const material = {
    color: 'black',
  }

  const { position, visible, name, description } = props

  if (visible) {
    return (
      <Entity material={material} position={position}>
        <Entity text={{text: name, size: 0.3}} material="color: black" position="0 0 0" />
        <Entity text={{text: description, size: 0.2}} material="color: black" position="0 -1 0" />
      </Entity>
    )
  } else {
    return (
      <Entity />
    )
  }
}
