import { connect } from 'react-redux';
import { addTodo } from '../actions';
import TodoInput from '../components/TodoInput';

const mapDispatchToProps = {
   handleSubmit: addTodo
};

const AddTodo = connect(
   undefined,
   mapDispatchToProps
)(TodoInput);

export default AddTodo;
