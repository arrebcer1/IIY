window.onload = _ => {
	let colleges_data = fetch('../views/colleges.json').then(res => res.json());
	let search_input = document.querySelector('#college-name');
	search_input.onkeyup = event => {
		let value = event.target.value.toLowerCase();
		filterByName(colleges_data, value);
	};
	filterByName(colleges_data, true);
};

function filterByName(data, name) {
	if(name && typeof name == 'boolean') data
		.then(colleges => addColleges(colleges));
	else data
		.then(colleges => colleges.filter(college => college.name.toLowerCase().includes(name)))
		.then(colleges => addColleges(colleges));
}

function addColleges(colleges) {
	let container = document.querySelector('#colleges .row');
	container.innerHTML = '';
	console.log(colleges.length);
	if(!colleges.length) {
		let img = document.createElement('img');
		img.src = '../public/img/college-not-found.png';
		img.alt = 'College Not Found';
		img.className += 'responsive-img centre';
		container.appendChild(img);
	}
	else colleges.forEach(college => {
		let div = document.createElement('div');
		div.className += `col s12 m6 l4`;
		div.innerHTML = `<div class="card small hoverable ${college.name}">
											<div class="card-image">
												<img src="../public/img/demo.jpg">
											</div>
											<div class="card-content">
												<span class="card-title">${college.name}</span>
												<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
											</div>
										</div>`;
		container.appendChild(div);
	});
}
