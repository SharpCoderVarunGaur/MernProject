import React from 'react';

function Tab({ label, isActive, onClick }) {
  return (
    <button className={isActive ? 'active' : ''} onClick={onClick}>
      {label}
    </button>
  );
}

export default Tab;