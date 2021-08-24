declare module "react-signature-canvas-zwb" {

  export type CanvasRefAction = {
    getPicData: (mimetype: string) => string;
    clear(): void
  }

  type CanvasProps = {
    width: number;
    height: number;
    style?: any;
    strokeStyle?:string;
    lineWidth?:number;
  }

  const Canvas: React.ForwardRefRenderFunction<CanvasRefAction, CanvasProps>;

  export default Canvas;
}
