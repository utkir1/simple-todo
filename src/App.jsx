import React,{useState,useRef} from "react";
import Card from "./Components/Card/Card.jsx";

const App = () => {
  const [todos,setTodos] = useState([]);
  const [text, setText] = useState("")
  const addItems = (e) => {
    if(e.key === "Enter") {
      const item= {
        id : new Date().getTime(),
        title: text
      };
      setTodos([item,...todos])
      setText("")
    }
  };
  return (
    <>
       <div className="container">
      <div className="row">
      <div className="card w-50 p-3 mx-auto mt-5">
        <h4 className="text-center tex-primary">TO DO APP</h4>
        <input type="text" className="form-control w-75 p-3 mx-auto "
         placeholder="Shu yerga yozing"
         value={text}
         onChange={(e)=> setText(e.target.value)}
         onKeyPress={addItems}/>
        <ul className="mt-5 mx-auto list-unstyled w-100 p-3 card">
           {todos.length !== 0 ? todos.map((item) => {
              return (
                <li className="d-flex justify-content-between m-3 p-3 bg-light" key={item.id}>
                <span>{item.title}</span>
                <button className="btn btn-danger "
                onClick={()=> setTodos(todos.filter((data) => data.id !== item.id))}>X</button>
                </li>
              )
            })
            : <h2>Empty list</h2>
          }


        </ul>
      </div>
      </div>
    </div>
    </>
  );
};

export default App;