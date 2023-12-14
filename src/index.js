document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector('form');
  const ul = document.querySelector('ul');

  function handleSubmit(e)
  {
    e.preventDefault();
    //console.log(e.target.name);
    const newTask = document.querySelector('#new-task-description').value;
    const li = document.createElement('li');
    li.textContent = newTask;
    ul.appendChild(li);

  }
  form.addEventListener('submit', (e) => handleSubmit(e))
});
