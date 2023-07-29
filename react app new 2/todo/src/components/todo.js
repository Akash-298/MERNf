import React, { useState } from "react";
import "./style.css";
const Todo = () => {
      const[inputdata,setInputData] =useState("");
      const[items,setItems] = useState([]);


      const addItem = () =>{
        if(!inputdata){
          alert("please fill data")
        }else{
          setItems([...items,inputdata])
        }
      }
  return (
    <div className="main-div">
      <div className="child-div">
        <figure>
          <img src="./" alt="no image found"></img>
          <figcaption>Add Your List Here</figcaption>
        </figure>

        <div className="addItems">
          <input
            type="text"
            placeholder="👉 Add Items"
            className="form-control"
            value={inputdata }
            onChange={(event)=>setInputData(event.target.value)}
          ></input>
          <i class="fa fa-plus" aria-hidden="true" onClick={addItem}></i>
        </div>
        <div className="showItems">
          {
            items.map((currElem,index) => {
                return(
                  <div className="eachItem">
                  <h3>{currElem}</h3>
                  <div className="todo-btn">
                    <i class="far fa-edit add-btn"> </i>
                    {/* <i class="fa fa-minus" aria-hidden="true"></i> */}
                    {/* <i class="fa fa-trash" aria-hidden="true"></i> */}
                    <i class="fa fa-ban" aria-hidden="true"></i>
                  </div>
                </div>
                )
            })
          }
         
        </div>
        <div className="showItems">
          <button className="btn effect04">Remove all</button>
        </div>
      </div>
    </div>
  );
};
export default Todo;
