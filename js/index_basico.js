document.addEventListener('DOMContentLoaded', function() {
	const title = document.getElementById('title');
	const description = document.getElementById('description');
	const addBtn = document.getElementById('add');
	const alert = document.getElementById('alert');
	const table = document.getElementById('table');
	const removBtn = document.getElementsByClassName('remove');
	var taskcounter = 0;


	function removeTask(id)
	{
		document.getElementById(id).remove();
	}

	function addTask()
	{
		if (title.value === '' || description.value === '')
		{
			alert.classList.remove('d-none');
			alert.innerText = 'Title and description are required';
		}
		else
		{
			console.log("Adding Actvity");
			alert.classList.add('d-none');
			const row = table.insertRow();
			row.setAttribute('id',`task${taskcounter}`);
			row.innerHTML = `
				<td>
					${title.value}
	        	</td>
	        	<td>
			  		${description.value}
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
			removeBtn.setAttribute('id',`btn${taskcounter}`);
			removeBtn.innerHTML = '<i class="fa fa-trash"></i>';
			row.children[3].appendChild(removeBtn);
			removeBtn.addEventListener('click', function(e){
				removeTask(row.getAttribute('id'));
			});
			taskcounter++;
		}
	}


	addBtn.addEventListener('click', addTask);
});

