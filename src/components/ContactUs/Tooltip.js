import React from 'react';
import '../../css/ContactUs/ToolTip.css'; 

const Tooltip = ({ children, text }) => (
  <div className="tooltip-container">
    {children}
    <span className="tooltip-text">{text}</span>
  </div>
);

export default Tooltip;