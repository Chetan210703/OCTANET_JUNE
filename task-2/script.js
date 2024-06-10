//when press enter add task in list
document.addEventListener('DOMContentLoaded', () => {
    const inputs = document.querySelectorAll('.day-list input[type="text"]');
    inputs.forEach(input => {
        input.addEventListener('keydown', function(event) {
            if (event.key === 'Enter') {
                const day = this.parentElement.id;
                addTask(day);
            }
        });
    });
});
function addTask(day) {
    const dayList = document.getElementById(day);
    const input = dayList.querySelector('input[type="text"]');
    const taskText = input.value;
    if (taskText === "") return;
    const list = dayList.querySelector('ul');
    const listItem = document.createElement('li');
    listItem.innerHTML = `
        <div>
            <input type="checkbox" onclick="toggleComplete(this)">
            <span>${taskText}</span>
        </div>
        <div class="delete" onclick="deleteTask(this)">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" color="#000000" fill="none">
                <path d="M19.0005 4.99988L5.00045 18.9999M5.00045 4.99988L19.0005 18.9999" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        </div>
    `;
    list.appendChild(listItem);
    input.value = "";
}
function deleteTask(element) {
    element.parentElement.remove();
}
function toggleComplete(checkbox) {
    const listItem = checkbox.parentElement.parentElement;
    listItem.classList.toggle('completed');
    const list = listItem.parentElement;
    if (listItem.classList.contains('completed')) {
        list.appendChild(listItem);
    } else {
        list.insertBefore(listItem, list.firstChild);
    }
}
function restartTasks() {
    const lists = document.querySelectorAll('.day-list ul');
    lists.forEach(list => list.innerHTML = '');
}
