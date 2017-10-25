import React from 'react';

const SMALLEST_WIDTH = 300; 

export default class WashMash extends React.Component {

  render() {
    let flex = 1 / (this.props.widest / this.props.ratio);
    flex = flex !== 0 ? flex : 1;
    const width = SMALLEST_WIDTH * flex;

    return (
      <figure className='cv-WashMashgallery-figure' style={{flex, minWidth: width}}>
        <img className='cv-WashMashgallery-image' src={this.props.src}/>
      </figure>
    );
  }
}

WashMash.propTypes = {
  src: React.PropTypes.string.isRequired,
  ratio: React.PropTypes.number.isRequired,
  widest: React.PropTypes.number.isRequired
};