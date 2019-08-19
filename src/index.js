import React from 'react';
import ReactDOM from 'react-dom';

import Table from './App';

const Element = () => {
  return (
    <div className="root-container">
      <Table initialHeight={5} initialWidth={5} cellSize={50} />
    </div>
  );
};

ReactDOM.render(<Element />, document.getElementById('root') || document.createElement('div'));
export default Element;
