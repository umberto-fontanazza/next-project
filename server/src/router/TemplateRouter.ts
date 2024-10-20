import { Request, Response, Router } from "express";
import { StatusCodes } from "http-status-codes";
import TemplateController from "../controller/TemplateController";
import { TemplateNotFound } from "../error/TemplateError";

class TemplateRouter {

    public router: Router;
    private templateController: TemplateController;

    constructor() {
        this.router = Router();
        this.templateController = new TemplateController();
        this.initializeRoutes();
    }

    initializeRoutes() {
        this.router.get('/:id', async (req: Request, res: Response) => {
            const { id } = req.params;

            try {
                const template = await this.templateController.getTemplateById(Number(id));
                res.status(StatusCodes.OK).json(template);
            } catch (error) {
                if (error instanceof TemplateNotFound) {
                    res.status(error.code).json({ message: error.message });
                } else {
                    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: 'Internal server error' });
                }
            }
        });
    }
}

export default TemplateRouter;
