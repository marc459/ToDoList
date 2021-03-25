document.addEventListener('DOMContentLoaded', function() {
	const title = document.getElementById('title');
	const description = document.getElementById('description');
	const btn = document.getElementById('add');
	const alert = document.getElementById('alert');
	const table = document.getElementById('table');

	btn.addEventListener('click', function(){
		if (title.value === '' || description.value === '')
		{
			alert.classList.remove('d-none');
			alert.innerText = 'Title and description are required';
		}
		else
		{
			console.log("Adding to-do");
			alert.classList.add('d-none');
			const row = table.insertRow();
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
	          	<button class="btn btn-danger mb-1 ml-1">
	            	<i class="fa fa-trash"></i>
	          	</button>
	        	</td>
			`;
		}
		
	})
	
	


	
});