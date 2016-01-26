import {Entity} from 'aframe-react';
import React from 'react';

export default props => {
  const { position, rotation, visible, name, description, descriptionUrl } = props

  if (visible) {
    return (
      <Entity geometry="primitive: plane; width: 3; height: 3;"
        position={position} rotation={rotation} material={{src: `url(${descriptionUrl})`}}
      />
    )
  } else {
    return (
      <Entity geometry="" material="" />
    )
  }
}
