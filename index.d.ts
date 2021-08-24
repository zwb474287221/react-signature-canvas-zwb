declare module "react-signature-canvas-zwb" {

  export type CanvasRefAction = {
    getPicData: (mimetype: string) => string;
    clear(): void
  }

  type CanvasProps = {
    width: number;
    height: number;
    style?: any;
  }

  const Canvas: React.ForwardRefRenderFunction<CanvasRefAction, CanvasProps>;

  export default Canvas;
}
