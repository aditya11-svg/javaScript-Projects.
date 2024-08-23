document.querySelector("#push").onclick = function () {
  if (document.querySelector("#newTask input").value.length == 0) {
    alert("Please Enter a Tssk");
  } else {
    document.querySelector("#tasks").innerHTML += `
    <div class="task">
    <span id=taskName> ${document.querySelector("#newTask input").value}</span>
        <button class="delete"><i class="fa-regular fa-trash-can"></i></button>
     
    </div>
    
    `;

    var current_task = document.querySelectorAll(".delete");
    for (var i = 0; i < current_task.length; i++) {
      current_task[i].onclick = function () {
        this.parentNode.remove();
      };
    }

    var tasks = document.querySelectorAll(".task");
    for (var i = 0; i < tasks.length; i++) {
      tasks[i].onclick = function () {
        this.classList.toggle("Completed");
      };
    }

    document.querySelector("#newTask input").value = "";
  }
};
