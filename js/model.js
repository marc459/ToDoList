export default class Model{
	constructor()
	{
		this.view = null;
		this.todos = [];
		this.currentId = 1;
	}

	setView(view)
	{
		this.view = view;
	}

	getTodos()
	{
		return this.todos;
	}

	addTodo(title,description)
	{
		const todo = {
			id: this.currentId++,
			title, // equivalente ha title:title;
			description,
			completed: false,
		}
		this.todos.push(todo);
		console.log(this.todos);
		return {...todo}; // es igual a return Object.assign({},todo);
	}
	findTodo(id) {
		return this.todos.findIndex((todo) => todo.id === id);
	}

	removeTodo(id) {
		const index = this.todos.findIndex((todo) => todo.id === id);
		this.todos.splice(index, 1);
	}
}