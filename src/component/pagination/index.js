import React from "react";
import "./style.css"
import { ArrowLeftIcon, ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/16/solid";

const Pagination = (props) => {

  let box = [];

  for(let i = 0; i*5 < props.length; i++ ){

    box.push(i+1);
  }

  function increment(){
      if(props.pagination < props.length/5){
        props.setPagination((pre)=> pre + 1)
      }
    }
    function decrement(){
      
      if(props.pagination > 1){
        props.setPagination((pre)=> pre - 1)
      }
    }
  return (
    <>

    <div className="pagination">
      <ChevronLeftIcon onClick={decrement} className="icon"/>
      {
        box.map((e)=> <div style={{borderColor : props.pagination == e ? "purple": ""}} onClick={()=>props.setPagination(e)} className="box" key={e}>{e}</div>)
      }
      <ChevronRightIcon onClick={increment} className="icon"/>
    </div>
      </>
  )
};

export default Pagination;
