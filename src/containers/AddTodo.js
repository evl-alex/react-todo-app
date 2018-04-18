import { connect } from 'react-redux';
import { addTodo } from '../actions';
import TodoInput from '../components/TodoInput';

// todo [ ] можно просто передать { handelSubmit: addTodo }

const mapDispatchToProps = dispatch => {
   return {
      handleSubmit: text => dispatch(addTodo(text))
   }
};

const AddTodo = connect(
   undefined,
   mapDispatchToProps
)(TodoInput);

export default AddTodo;
