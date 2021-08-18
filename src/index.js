import style from "./style.css";

const containerTasks = document.getElementById('container-tasks');

var tasks = [
    {
        "description": "Making a descriptive README file",
        "completed": false,
        "index": 0
    },
    {
        "description": "Add linters for the repository",
        "completed": false,
        "index": 1
    },
    {
        "description": "Improve CSS in the project",
        "completed": true,
        "index": 2
    },
    {
        "description": "Try to use Webpack for this app",
        "completed": false,
        "index": 3
    },
]

tasks.forEach((value, index) => {
    let checked = ''
    if (value['completed']){
        checked = 'checked'
    };
    containerTasks.innerHTML += 
    `<div class="d-flex justify-content-between border border-light py-0 px-3 ">
        <div class="d-flex">
            <input type="checkbox" name="complete-checkbox" id="complete-checkbox"
                    class="my-3" `+checked+`>
            <p class="m-2">`+ value['description'] +`</p>
        </div>
        <button type="button" class="border-0 bg-body button-move"><i class='bx bx-dots-vertical-rounded'></i></button>
        <button type="button" class="d-none border-0 bg-body"><i class='bx bx-trash'></i></button>
    </div>`
});