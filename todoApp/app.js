var $ = function (elm) { return document.querySelector(elm); };
var todoBtn = $(".btn");
var todoInp = document.querySelector(".input");
var output = $(".output");
var handleTodo = function (e) {
    e.preventDefault();
    console.log(typeof e);
    var value = todoInp === null || todoInp === void 0 ? void 0 : todoInp.value;
    if (value === "")
        return;
    var li = document.createElement("li");
    li.innerHTML = value;
    output.appendChild(li);
    todoInp.value = "";
};
todoBtn.addEventListener("click", handleTodo);
todoInp.addEventListener("change", handleTodo);
