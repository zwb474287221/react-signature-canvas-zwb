import React, {useRef, useState} from "react";
import Canvas from "react-signature-canvas-zwb";

const App = () => {
  const [height,setHeight]=useState(500);
  const [width,setWidth]=useState(500);
  const [url,setUrl] = useState('');
  const canvas=useRef();

  const clear=()=>{
    canvas.current.clear();
  }

  const onSize=()=>{
    setHeight(value=>value+500);
  }

  const getPic=()=>{
    const url=canvas.current.getPic();
    setUrl(url);
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
        strokeStyle={'red'}
        lineWidth={3}
      />
      <button onClick={clear}>
        清除
      </button>
      <button onClick={onSize}>
        改变画布大小
      </button>
      <button onClick={getPic}>
        获取图片
      </button>
      <button onClick={onFull}>
        全屏
      </button>
      <img src={url} alt={''}/>
    </div>
  );
}

export default App;
