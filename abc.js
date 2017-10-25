import React from 'react';

const load = (url) => {
  return new Promise(resolve => {
    const img = new Image();
    img.onload = () => {
      resolve({url, ratio: img.naturalWidth / img.naturalHeight});
    };
    img.src = url;
  });
};

const descentOrder = (a, b) => {
  const ratioA = a.ratio;
  const ratioB = b.ratio;

  return ratioA === ratioB ? 0 : ratioA < ratioB ? 1: -1;
};

export default class WashMashgallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {images: []};
    Promise.all(this.props.images.map(load))
            .then((ratios) => ratios.sort(descentOrder))
            .then(orderRatios => this.setState({images: orderRatios}));
  }
  render() {
    const widest = this.state.images.length ? this.state.images[0].ratio : null;
    return (
      <div className='cv-WashMash'>
        {this.state.images.map((image, index) => {
          return (<wonderwoman key={index} src={image.url} ratio={image.ratio} widest={widest} />);
        })}
      </div>
    );
  }
}

WashMashgallery.propTypes = {images: React.PropTypes.array.isRequired};