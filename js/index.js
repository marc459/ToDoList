import Model from './model.js';
import View from './view.js';
import AddTodo from './components/add-todo.js';

document.addEventListener('DOMContentLoaded', function() {
	const model = new Model();
	const view = new View();
	const addTodoForm = new AddTodo();

	
	model.setView(view);
	view.setModel(model);
	addTodoForm.onClick((title, description) => view.addTodo(title, description));

});