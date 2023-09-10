const Company = require("../models/company");
const User = require("../models/user");

class CompanyController {
  async list(req, res) {
    const company = await Company.findAll({
        include:[
         {
            model:User,
            as:"user"
         }
        ]
    });
    res.json(company);
  }

  async create(req, res) {
    const { name, userId } = req.body;

    const company = await Company.create({
      name,
      userId,
    });

    res.json(company);
  }
}

module.exports = new CompanyController();
