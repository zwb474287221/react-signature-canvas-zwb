import React, {forwardRef, useCallback, useEffect, useImperativeHandle, useRef, useState} from "react";

const Canvas = forwardRef((props, ref) => {
  const [isDown, setIsDown] = useState(false);

  const {width = 100, height = 100, strokeStyle, lineWidth, ...other} = props;

  const canvas = useRef();
  const ctx = useRef();

  useImperativeHandle(ref, () => ({
    getPic,
    clear,
  }));

  useEffect(() => {
    if (!ctx.current) {
      return;
    }
    let canvasData = ctx.current.getImageData(0, 0, canvas.current.width, canvas.current.height);
    canvas.current.width = props.width;
    canvas.current.height = props.height;
    ctx.current.strokeStyle = props.strokeStyle;
    ctx.current.lineWidth = props.lineWidth;
    ctx.current.putImageData(canvasData, 0, 0, 0, 0, canvasData.width, canvasData.height);
  }, [props.width, props.height, props.strokeStyle, props.lineWidth])

  const getPic = (...arg) => {
    return canvas.current.toDataURL(...arg);
  }

  const clear = () => {
    ctx.current.clearRect(0, 0, ctx.current.canvas.width, ctx.current.canvas.height);
  }


  const touchDrawLine = useCallback((e) => {
    if (e.type === "touchstart") {
      //起始一条路径，或者重绘当前路径
      setIsDown(true);
      ctx.current.beginPath();
      //起始点
      ctx.current.moveTo(e.changedTouches[0].pageX, e.changedTouches[0].pageY);
    } else if (e.type === "touchmove") {
      //终点
      ctx.current.lineTo(e.changedTouches[0].pageX, e.changedTouches[0].pageY);
      //开始绘制
      ctx.current.stroke();
    } else if (e.type === "touchend") {
      setIsDown(false);
    }
  }, []);


  const mouseDrawLine = useCallback((e) => {
    if (e.type === "mousedown") {
      //起始一条路径，或者重绘当前路径
      setIsDown(true);
      ctx.current.beginPath();
      //起始点
      ctx.current.moveTo(e.pageX, e.pageY);
    } else if (e.type === "mousemove") {
      //终点
      ctx.current.lineTo(e.pageX, e.pageY);
      //开始绘制
      ctx.current.stroke();
    } else if (e.type === "mouseup") {
      setIsDown(false);
    }
  }, []);

  const touchHandler = useCallback(touchDrawLine, [])
  const mouseHandler = useCallback(mouseDrawLine, []);

  return (
    <canvas
      ref={(item) => {
        if (item) {
          canvas.current = item;
          ctx.current = canvas.current.getContext("2d");
        }
      }}
      onMouseDown={mouseHandler}
      onMouseMove={isDown ? mouseHandler : undefined}
      onMouseUp={isDown ? mouseHandler : undefined}
      onTouchStart={touchHandler}
      onTouchEnd={isDown ? touchHandler : undefined}
      onTouchMove={isDown ? touchHandler : undefined}
      {...other}
    />
  );
})

export default Canvas;
