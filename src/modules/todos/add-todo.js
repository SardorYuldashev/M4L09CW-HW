const Todo = require("./Todo");
const List = require("../lists/List");
const User = require("../users/User");
const { BadRequestError } = require("../../shared/errors");

const addTodo = async (data) => {
  const result = await Todo.create(data);

  const { user } = await List.findById(data.list);

  if (String(user) !== data.user) {
    throw new BadRequestError(`Boshqalarni listiga todo qo'sha olmaysiz`);
  };

  await User.findByIdAndUpdate(data.user, { $push: { todos: result._id } });
  await List.findByIdAndUpdate(data.list, { $push: { todos: result._id } });

  return result;
};

module.exports = addTodo;