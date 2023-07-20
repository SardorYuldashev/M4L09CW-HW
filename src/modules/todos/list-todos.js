const Todo = require("./Todo");

const listTodos = async ({ user, q, page = { limit: 10, offset: 0 } }) => {
  const filter = {};

  if (q) {
    filter.title = { $regex: new RegExp(q, "i") };
  }

  const result = await Todo.find({ user, ...filter })
    .populate([
      {
        path: "user",
        select: "username",
      },
      {
        path: "list",
        select: "name",
      },
    ])
    .skip(page.offset)
    .limit(page.limit);

  return { todos: result, total: result.length, pageInfo: { ...page } };
};

module.exports = listTodos;