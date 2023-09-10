const Book = require("../models/books");
const User = require("../models/user");

class BookController {
  async list(req, res) {
    const book = await Book.findAll({
        include:[
         {
            model:User,
            as:"user"
         }
        ]
    });
    res.json(book);
  }

  async create(req, res) {
    const { name, userId } = req.body;

    const book = await Book.create({
      name,
      userId,
    });

    res.json(book);
  }
}

module.exports = new BookController();
