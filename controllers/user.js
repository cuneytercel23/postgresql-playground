const Company = require("../models/company");
const User = require("../models/user");

class UserController {
  async list(req, res) {
    const user = await User.findAll({
        include:[
            {
               model:Company,
               as:"companies"
            }
           ]
        }
        
    );
    res.json(user);
  }

  async create(req, res) {
    const { name } = req.body;

    const user = await User.create({
      name,
    });

    res.json(user);
  }
}

module.exports = new UserController();
