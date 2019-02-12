import React, { Component } from 'react';
import PropTypes from 'prop-types';

const LoaderHOCFunc = (WrappedComponent) => {
  class LoaderHOC extends Component {
    render() {
      const { users } = this.props;
      return users.length === 0
        ? <div>Loading...</div> : <WrappedComponent {...this.props} />;
    }
  }

  LoaderHOC.propTypes = {
    users: PropTypes.array.isRequired,
  };

  return LoaderHOC;
};

export default LoaderHOCFunc;
