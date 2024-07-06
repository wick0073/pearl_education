
import '../css/titleBar.css';
import React from 'react';
import PropTypes from 'prop-types';

const TitleBar = ({ colorCode,titleText }) => {
  return (
    <h1 className={"titleBar"} style={{ backgroundColor: colorCode }}>
      {titleText}
    </h1>
  );
};

TitleBar.propTypes = {
  colorCode: PropTypes.string,
  className: PropTypes.string,
  titleText:PropTypes.string,
};

TitleBar.defaultProps = {
  colorCode: '#D9D9D9',
  className: 'titleBar',
  titleText: 'Please add Title Text',
};

export default TitleBar;
