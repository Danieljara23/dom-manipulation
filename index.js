import data from "./data.json" assert { type: "json" };


const tasksHtml = getTasksHtml(data.tasks)
document.getElementById("container").innerHTML = tasksHtml;

const buttons = document.querySelectorAll(".filter-button")

buttons.forEach((buttonElement) => {
  buttonElement.addEventListener("click", (event) => {
    console.log(event.target)
    const selectedButtonText = event.target.innerText;
    
    let filteredTasks = data.tasks;

    if (selectedButtonText !== "Clear") { 
      filteredTasks = data.tasks.filter((taskElement) => taskElement.status === selectedButtonText.toLowerCase())
      console.log(filteredTasks)
    }
     

    const filteredTasksHtml = getTasksHtml(filteredTasks)
    document.getElementById("container").innerHTML = filteredTasksHtml;


  })
})

const inputEl = document.getElementById("seachInput");
inputEl.addEventListener("input", (event) => {
  const searchText = event.target.value;

  const filteredTasks = data.tasks.filter(element => element.label.toLowerCase().includes(searchText))
  console.log(filteredTasks)

  const filteredTasksHtml = getTasksHtml(filteredTasks)
  document.getElementById("container").innerHTML = filteredTasksHtml;
})

function getTasksHtml(tasks) {
  return tasks.map((taskElement) => {
    return `
      <article class="task-item">
        <h3>${taskElement.label}</h3>
        <p>Status: <span class="status-circle ${taskElement.status}">${taskElement.status}</span></p>
      </article>
  `;
  })
    .join("");
}

