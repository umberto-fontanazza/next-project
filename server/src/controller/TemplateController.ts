import TemplateDAO from "../dao/TemplateDAO";
import Template from "../model/Template";

class TemplateController {
    private templateDAO: TemplateDAO;

    constructor() {
        this.templateDAO = new TemplateDAO();
    }

    async getTemplateById(id: number): Promise<Template> {
        return await this.templateDAO.getTemplateById(id);
    }
}

export default TemplateController;
