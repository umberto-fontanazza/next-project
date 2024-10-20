import db from "../config/database";
import { TemplateNotFound } from "../error/TemplateError";
import Template from "../model/Template";

class TemplateDAO {
  async getTemplateById(id: number): Promise<Template> {
    const result = await db.query("SELECT * FROM template WHERE id = $1", [id]);
    if (result.rows.length === 0) {
      throw new TemplateNotFound();
    }
    const row = result.rows[0];
    return new Template(row.attr1, row.attr2);
  }
}

export default TemplateDAO;
