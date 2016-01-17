import {Entity} from 'aframe-react';
import React from 'react';

export default props => {
  const { position, visible, name, description, descriptionUrl } = props

  if (visible) {
    return (
      <Entity geometry="primitive: plane; width: 3; height: 3;"
        position={position} material={{src: `url(${descriptionUrl})`}}
      />
    )
  } else {
    return (
      <Entity geometry="" material="" />
    )
  }
}
