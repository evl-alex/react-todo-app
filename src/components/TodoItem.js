import React from 'react';
import PropTypes from 'prop-types';

function TodoItem({ completed, text, onClick, onRemoveClick }) {
   return (
      <li className={completed ? "completed" : undefined}>
         <div className="view">
            <input className="toggle" type="checkbox" checked={completed} onChange={onClick}/>
            <label>{text}</label>
            <button className="destroy" onClick={onRemoveClick}/>
         </div>
      </li>
   )
}

TodoItem.propTypes = {
   text: PropTypes.string.isRequired,
   completed: PropTypes.bool.isRequired,
   onClick: PropTypes.func.isRequired,
   onRemoveClick: PropTypes.func.isRequired
};

export default TodoItem;