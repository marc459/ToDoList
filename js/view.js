import AddTodo from './components/add-todo.js';
export default class View{
	
	constructor() {
	  this.model = null;
	  this.table = document.getElementById('table');
	 

	}

	setModel(model) {
		this.model = model;
	}

	addTodo(title,description)
	{
		const todo = this.model.addTodo(title,description);
		this.createRow(todo);
	}
	removeTodo(id) {
		this.model.removeTodo(id);
		document.getElementById(id).remove();
	}

	createRow(todo)
	{
		//alert.classList.add('d-none');
		const row = table.insertRow();
		row.setAttribute('id',todo.id);
		row.innerHTML = `
			<td>
				${todo.title}
        	</td>
        	<td>
		  		${todo.description}
          	</td>
        	<td class="text-center">
         		<input type="checkbox">
        	</td>
        	<td class="text-right">
	          	<button class="btn btn-primary mb-1">
	            	<i class="fa fa-pencil"></i>
	         	</button>
        	</td>
		`;
		let removeBtn = document.createElement('button');
		removeBtn.classList.add('btn','btn-danger','remove','mb-1','ml-1');
		removeBtn.setAttribute('id',todo.id);
		removeBtn.innerHTML = '<i class="fa fa-trash"></i>';
		row.children[3].appendChild(removeBtn);
		removeBtn.addEventListener('click', () =>{this.removeTodo(todo.id);});
	}

}