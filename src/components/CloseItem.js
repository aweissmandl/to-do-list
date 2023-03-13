import React, { useState } from 'react';

// Create a "close" button and append it to each list item
// Click on a close button to hide the current list item


const CloseItem = ({ items }) => {
  const [listItems, setListItems] = useState(items);

  const handleItemClick = (index) => {
    const updatedListItems = [...listItems];
    updatedListItems.splice(index, 1);
    setListItems(updatedListItems);
  };

  const renderListItems = () => {
    return listItems.map((item, index) => {
      return (
        <li key={index}>
          {item}
          <span className="close" onClick={() => handleItemClick(index)}>
            &times;
          </span>
        </li>
      );
    });
  };

  return (
    <ul>
      {renderListItems()}
    </ul>
  );
};

export default CloseItem;
