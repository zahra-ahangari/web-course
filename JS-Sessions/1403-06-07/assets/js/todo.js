const todoForm = $(".auth-login");
const todoInput = $(".todo-input");

function generateUuid(){
    return crypto.randomUUID();
}

const todoItems = [];
function todoGenerator(itemValue) {
    const valueObj = {
        id: generateUuid(),
        title: itemValue,
        createdAt: new Date(),
        isComplete: false,
    };

    todoItems.push(valueObj);
    console.log("Newly added item: ", valueObj);
    console.log("Updated list: ", todoItems);
}

$(".auth-login").submit((e) => {
    e.preventDefault();
    todoGenerator(todoInput.val());
    todoInput.val("");  
});

function generateListForUI(items){
    console.log("Final list is: ", items);
    items.map((item, index) => {
        result = `<li id='${item.id}' class="d-flex gap-2 justify-content-between">
                <span>Task 1</span>
                <div class="todos-actions d-flex gap-2">
                    <button class="btn btn-primary">Edit</button>
                    <button class="btn btn-danger">Delete</button>
                </div>
            </li>`
    })
}
