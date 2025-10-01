import React from 'react';
import MenuItem from './MenuItem';

const Menu = ({ list }) => {
  return (
    <div className="section-center">
      {list.map((item) => {
        return <MenuItem key={item.id} {...item} />;
      })}
    </div>
  );
};

export default Menu;
