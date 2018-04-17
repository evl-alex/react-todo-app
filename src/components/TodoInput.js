import React from 'react';
import PropTypes from 'prop-types';

function TodoInput({ handleSubmit }) {
   let textInput;

   return (
      <form onSubmit={ (event) => {
         event.preventDefault();

         if (!textInput.value.length) return;

         handleSubmit(textInput.value);
         textInput.value = '';
      }}>
         <input ref={node => textInput = node} className="new-todo" placeholder="What needs to be done?"/>
      </form>
   );
}

TodoInput.propTypes = {
   handleSubmit: PropTypes.func.isRequired
};

export default TodoInput;
