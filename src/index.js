document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");
  const list = document.getElementById("tasks");
  
  const dropdown = document.createElement('select');
  const low = document.createElement('option');
  low.value = "low";
  low.textContent = "low";
  const medium = document.createElement('option');
  medium.value = "medium";
  medium.textContent = "medium";
  const high = document.createElement('option');
  high.value = "high";
  high.textContent = "high";
  dropdown.appendChild(low);
  dropdown.appendChild(medium);
  dropdown.appendChild(high);
  form.appendChild(dropdown);

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const newTask = document.getElementById('new-task-description').value;
    const newItem = document.createElement('li');
    newItem.textContent = newTask;
    const button = document.createElement('button');
    button.textContent = "Delete";

    const priority = dropdown.value;
    if (priority == "low"){
      newItem.style.color = "green"
    }
    else if (priority == "medium"){
      newItem.style.color = "yellow"
    }
    else if (priority == "high"){
      newItem.style.color = "red"
    }
    
    list.appendChild(newItem)
    list.appendChild(button)

    button.addEventListener('click', () => {
      newItem.remove();
      button.remove();
    })
  })

});

/*
Deliverables:
1) should be able to type a task into the input field
2) should be able to click submit button
3) task should appear in the DOM
*/