import React, { Component } from 'react';
import PropTypes from 'prop-types';
import loadingSVG from './loading.svg';

const defaultLoadingStyle = {
  position: 'absolute',
  left: '50%',
  top: '50%',
  textAlign: 'center',
  backgroundImage: `url(${loadingSVG})`,
  width: '40px',
height: '40px',
  marginLeft: '-20px', /*half width*/
marginTop: '-20px', /*half height*/
};

class LazyImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };

    const listener = () => {
      this.setState({loading: false});
      myImage.removeEventListener('load', listener);
    };

    const myImage = new Image();
    myImage.src = props.src;
    myImage.addEventListener('load', listener);
  }

  render() {
    return (this.state.loading) ?
      this.props.waiting : <img src={this.props.src} width={this.props.width || '100%' } height={this.props.height || '100%'} />;
  }
}

LazyImage.propTypes = {
  src: PropTypes.string.isRequired,
  waiting: PropTypes.node,
  width: PropTypes.number,
  height: PropTypes.number,
};

LazyImage.defaultProps = {
  waiting: <img src={loadingSVG} />,
};


export default LazyImage;
