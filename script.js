const taskList = document.getElementById("taskList");

for(let i = 0; i < 10; i++) {
    const lineDiv = document.createElement("div");
    lineDiv.className = "line";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    const input = document.createElement("input");
input.type = "text";
input.placeholder = `Add a new task.. ${i + 1}`;

    lineDiv.appendChild(checkbox);
    lineDiv.appendChild(input);

    taskList.appendChild(lineDiv);
}

 