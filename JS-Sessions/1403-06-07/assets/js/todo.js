const todoForm = $(".auth-login");
const todoInput = $(".todo-input");
let todoItems = [];

/**
 * javascript comment
 * @Author: flydreame
 * @Date: 2024-09-11 18:12:46
 * @Desc: Return month name based on month number
 */
function getMonthName(dateNo) {
    switch (dateNo) {
        case 0:
            return "Jan";
        case 1:
            return "Feb";
        case 2:
            return "Mar";
        case 3:
            return "Apr";
        case 4:
            return "May";
        case 5:
            return "Jun";
        case 6:
            return "Jul";
        case 7:
            return "Aug";
        case 8:
            return "Sep";
        case 9:
            return "Oct";
        case 10:
            return "Nov";
        case 11:
            return "Dec";
    }
}
const now = new Date();
const year = now.getFullYear();
const monthNo = now.getMonth();
const monthName = getMonthName(monthNo);
const dayNo = now.getDay();

//Use toLocaleString();
dateHtml = `<span>Day: ${dayNo}</span>
            <div>
                <div>Year: ${year}</div>
                <div>Month: ${monthName}</div>
            </div>
`;
$("#date").append(dateHtml);

/**
 * javascript comment
 * @Author: flydreame
 * @Date: 2024-09-11 18:11:03
 * @Desc: Generate a unique id
 */
function generateUuid() {
    return crypto.randomUUID();
}

const storedTodos = JSON.parse(localStorage.getItem("todos"));
if (storedTodos){
    todoItems = storedTodos;
    generateListForUI(todoItems);
}

/**
 * javascript comment
 * @Author: flydreame
 * @Date: 2024-09-11 18:48:41
 * @Desc: Update todo list properties by item id
 */
function UpdateItemsCompleteStatus(id) {
    // biome-ignore lint/complexity/noForEach: <explanation>
    todoItems.forEach((item) => {
        if (item.id === id) {
            item.isComplete = !item.isComplete;
        }
    });
    // saveToLocalStorage();
}

/**
 * javascript comment
 * @Author: flydreame
 * @Date: 2024-09-11 18:11:18
 * @Desc: Generate the final list and show in the UI
 */
function todoGenerator(itemValue) {
    const valueObj = {
        id: generateUuid(),
        title: itemValue,
        createdAt: new Date(),
        isComplete: false,
    };
    todoItems.push(valueObj);
    saveToLocalStorage();
    console.log("Newly added item: ", valueObj);
    console.log("Updated list: ", todoItems);
    generateListForUI(valueObj);
}

function saveToLocalStorage(){
    localStorage.setItem("todos", JSON.stringify(todoItems));
}

/**
 * javascript comment
 * @Author: flydreame
 * @Date: 2024-09-11 18:13:41
 * @Desc: Submit user input
 */
$(".auth-login").submit((e) => {
    e.preventDefault();
    if (todoInput.val() !== "") {
        todoGenerator(todoInput.val());
        todoInput.val("");
    }
});

/**
 * javascript comment
 * @Author: flydreame
 * @Date: 2024-09-11 18:12:01
 * @Desc: Create dynamic data and append the HTML content
 */
function generateListForUI(item) {
    // console.log("Final list is: ", items);
    // var newHtml = items.map((item, index) => {
    //     result =
    //     `<li id='${item.id}' class="d-flex gap-2 justify-content-between">
    //         <span>${item.title}</span>
    //         <div class="todos-actions d-flex gap-2">
    //             <button class="btn btn-primary">Edit</button>
    //             <button class="btn btn-danger">Delete</button>
    //         </div>
    //     </li>`
    //     return result;
    // })

    newHtml = `<li id='${item.id}' class="d-flex gap-2 justify-content-between">
    <input type="checkbox" id="${item.id}" onclick="UpdateItemsCompleteStatus(${
        item.id
    })"
    ${item.isComplete ? "checked" : ""}/>   
    <span>${item.title}</span>
    <div class="todos-actions d-flex gap-2">
                <button class="btn btn-primary">Edit</button>
                <button class="btn btn-danger">Delete</button>
            </div>
        </li>`;

    $("#content").append(newHtml);
}
