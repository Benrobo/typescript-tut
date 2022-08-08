// import React from "react"

// interface Props{
//     name: string;
// }

// const hello = React.FC<Props> = ({name}) =>{
//     const [state] = useState<{name: string}>({name: "ben"})
// }



// JSX

interface FormType<T>{
    values: T;
    children: ()=> JSX.Element
}

const Form = <T extends {}>({children}: FormType<T>)=>{

    return (
        children
    )
}



// function App(){

//     return (
//         <>
//             <Form values={{fname: "ben"}}>
//                 {
//                     (values)=>(
//                         <div>Welcome {values.fname}</div>
//                     )
//                 }
//             </Form>
//         </>
//     )
// }

// export default App