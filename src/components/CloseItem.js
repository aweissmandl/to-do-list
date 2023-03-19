import React from 'react';

function CloseItem() {
  // Create a "close" button and append it to each list item
  React.useEffect(() => {
    const myNodelist = document.getElementsByTagName("LI");
    for (let i = 0; i < myNodelist.length; i++) {
      const span = document.createElement("SPAN");
      const txt = document.createTextNode("\u00D7");
      span.className = "close";
      span.appendChild(txt);
      myNodelist[i].appendChild(span);
    }
    
    // Click on a close button to hide the current list item
    const close = document.getElementsByClassName("close");
    for (let i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        const div = this.parentElement;
        div.style.display = "none";
      }
    }
  }, []);

  return (
    <ul>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
      <li>Item 4</li>
    </ul>
  );
}

export default CloseItem;
