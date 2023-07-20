const { NotFoundError } = require("../../shared/errors");
const Todo = require("./Todo");

const editTodoStatus = async ({ id, user }) => {
  const existing = await Todo.findOne({ _id: id, user });

  if (!existing) {
    throw new NotFoundError("Todo topilmadi.");
  };

  return Todo.findByIdAndUpdate(id, {status: !existing.status}, { new: true })
    .populate([
      {
        path: "user",
        select: "username",
      },
      {
        path: "list",
        select: "name",
      },
    ]);
};

module.exports = editTodoStatus;