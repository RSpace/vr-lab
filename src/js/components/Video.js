import {Entity} from 'aframe-react'
import React, { Component } from 'react'

export default class Video extends Component {
  componentDidMount() {
    this.playOrPause()
  }

  componentDidUpdate() {
    this.playOrPause()
  }

  render () {
    const domId = `video${new Date().getTime()}`
    const { position, src, width, height, autoplay, loop, image, isPlaying } = this.props
    const entitySrc = isPlaying ? `#${domId}` : `url(${image})`
    //const entitySrc = `#${domId}`

    return (
      <Entity>
        <video id={domId}
               src={src}
               width={width}
               height={height}
               autoPlay={autoplay}
               loop={loop}
               crossOrigin="anonymous"
               style={{display: 'none'}}
               ref="video"
               >
        </video>
        <Entity geometry={{primitive: 'plane',
                            height: height,
                            width: width,
                            translate: "0 0 0"}}
                  material={{shader: 'flat', src: entitySrc}}
                  position={position} />
      </Entity>
    )
  }

  playOrPause () {
    const video = this.refs['video']
    if (this.props.isPlaying) {
      video.play()
    } else {
      video.pause()
    }
  }
}


/*
import Canvid from 'canvid'

export default class Root extends Component {
  componentDidMount() {
    let canvidControl = Canvid({
      selector: '.canvid-container',
      videos: {
        clip1: {
          src: 'http://gka.github.io/canvid/images/canvid-example.jpg',
          frames: 102,
          cols: 6
        }
      },
      width: 500,
      height: 400,
      loaded: () => canvidControl.play('clip1')
    });
  }

  render() {
    return (
      <Entity>
        <div className="canvid-container" style={{display: 'none'}}></div>
        <Entity geometry={{primitive: 'plane',
                            height: 2.25,
                            width: 4,
                            translate:  '0 0 0'}}
                  material={{shader: 'flat', src: '.canvid-container'}} />
      </Entity>
    )
  }
}
*/