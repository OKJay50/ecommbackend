declare namespace ProductController {
    interface ControllerMethods {
      getAllProducts: (req: Request, res: Response) => Promise<void>;
      createProduct: (req: Request, res: Response) => Promise<void>;
      updateProduct: (req: Request, res: Response) => Promise<void>;
      deleteProduct: (req: Request, res: Response) => Promise<void>;
    }
  }

  export = ProductController;
