fetch("http://localhost:5000/projects")
.then(res => res.json())
.then(data => {

const container =
document.getElementById("projects-container");

data.forEach(project => {

container.innerHTML += `
<div class="card">

<h3>${project.title}</h3>

<p>${project.description}</p>

<br>

<a href="${project.github}" target="_blank">
View Project
</a>

</div>
`;

});

})
.catch(error => console.log(error));