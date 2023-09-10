const Book = require("../models/books");
const User = require("../models/user");
const { Op } = require("sequelize");

class BookController {
  async list(req, res) {
    //sorting
    let { sort, sorttype } = req.query;
    sort = sort ?? "name";
    sorttype = sorttype ?? "ASC";
    const sortObject = [sort, sorttype];

    // pagination
    let { page, limit } = req.query;
    page = page ? parseInt(page) : 1;
    limit = limit ? parseInt(size) : 10;
    const offset = (page - 1) * limit;

    // filtreleme
    const filter = req.query.name ?? "za";

    const whereClause = {
      name: {
        // name'e göre,
        [Op.like]: `%${filter}%`,
      },
      // eksta bir id ye göre filtreleme yaparsam zaten basit where id : id ile.
    };

    const book = await Book.findAll({
      where: whereClause,
      order: [sortObject], // sorting
      offset: offset, // pagination
      limit: limit, // pagination
      include: [
        // include
        {
          model: User,
          as: "user",
        },
      ],
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
