

const $ = (elm: string) => document.querySelector(elm)

const todoBtn = $(".btn")
const todoInp = document.querySelector(".input")! as HTMLInputElement
const output = $(".output")


const handleTodo = (e) : void =>{
    e.preventDefault()

    let value = todoInp?.value;
    if (value === "") return
    
    let li = document.createElement("li");
    li.innerHTML = value;
    output.appendChild(li)
    todoInp.value = ""
    
}


todoBtn.addEventListener("click", handleTodo)

todoInp.addEventListener("change", handleTodo)