import React,{useState,useRef} from 'react';


const Card = () => {

  const [number,setNumber] = useState(0);
  const [show, setShow] = useState(false);

  const cardRef = useRef();
  const textRef = useRef();

  const incr = ()=>{
    setNumber(number+1);
  }
  const decr = ()=>{
    setNumber(number-1);
  }
  // const Hide=()=>{
  //   cardRef.current.style.display="none";
  // }
  // const Show=()=>{
  //   cardRef.current.style.display="block";
  // }

  setTimeout(()=>{
    setShow(true);
  },3000)

  return (
    <>
      <div className={`${show ? "" : "hide"} card w-50 p-4 mx-auto mt-5 bg-light `}
       /*style={{display: "none"}} */
        ref={cardRef} >

        <div className="card-body">
        <h4 className="card-title" ref={textRef} onClick={()=>{textRef.current.style.display="none"}}>{number}</h4>
        <div className="col">
          <button className="btn btn-danger m-2" onClick={decr}>
            DEC
          </button>
          <button className="btn btn-success m-2" onClick={incr}>
            INC
          </button>
          <button className="btn btn-info m-2" onClick={()=>{textRef.current.style.display="block"}}>
            show number
          </button>
        </div>
        <p className="card-text p-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis voluptate impedit quo, a aspernatur facere provident. Unde, quia? Voluptatibus ullam omnis voluptas, nemo nisi optio voluptates consequuntur fuga veniam consectetur.</p>
        </div>
        <button className="btn btn-primary" onClick={()=>{
          setShow(false)
        }} >Hide</button>
      </div>
    </>
  );
};

export default Card;