
import '../css/titleBar.css';
import React from 'react';
import PropTypes from 'prop-types';

const TitleBar = ({ textColor,colorCode,titleText }) => {
  return (
    <h1 className={"titleBar"} style={{ backgroundColor: colorCode , color:textColor }}>
      {titleText}
    </h1>
  );
};

TitleBar.propTypes = {
  colorCode: PropTypes.string,
  className: PropTypes.string,
  titleText:PropTypes.string,
  textColor:PropTypes.string,
};

TitleBar.defaultProps = {
  colorCode: '#D9D9D9',
  className: 'titleBar',
  titleText: 'Please add Title Text',
  textColor: '#000000',
};

export default TitleBar;
