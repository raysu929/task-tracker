const checkbox = document.createElement("input");
checkbox.setAttribute("type", "checkbox");
checkbox.setAttribute("id", "myCheckbox");

const container = document.getElementById("taskList");
container.appendChild(checkbox);

const label = document.createElement("label");
label.setAttribute("for", "myCheckbox");
label.textContent = "Select All";
container.appendChild(label);

container.appendChild(document.createElement('br'));

for(let i = 1; i <= 5; i++) {
    const label = document.createElement("label");
    label.setAttribute("for", "checkbox" + i)
    label.id = "checkboxContainer"  + i;
    label.textContent = "" + i + ".";
    container.appendChild(label);

    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("id", "checkbox" + i);
    container.appendChild(checkbox);

    container.appendChild(document.createElement('br'));
}