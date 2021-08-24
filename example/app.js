import React, {useRef, useState} from "react";
import Canvas from "./Canvas";

const App = () => {
  const [height,setHeight]=useState(500);
  const [width,setWidth]=useState(500);

  const canvas=useRef();

  const strokeRect=()=>{
    canvas.current.strokeRect(5,5,25,15);
  }

  const onChange=()=>{
    canvas.current.scale(2,2);
  }

  const onSize=()=>{
    setHeight(value=>value+500);
  }

  const onFull=()=>{
    const width = document.documentElement.clientWidth;
    const height = document.documentElement.clientHeight;
    setHeight(height);
    setWidth(width);
  }
  return (
    <div>
      <Canvas
        style={{backgroundColor:'#eee'}}
        ref={canvas}
        width={width}
        height={height}
      />
      <button onClick={onChange}>
        大小
      </button>
      <button onClick={strokeRect}>
        大小
      </button>
      <button onClick={onSize}>
        大小
      </button>
      <button onClick={onFull}>
        全屏
      </button>
    </div>
  );
}

export default App;
