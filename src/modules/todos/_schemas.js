const Joi = require("joi");

exports.postTodoSchema = {
  body: Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
    list: Joi.string().required(),
  }),
};

exports.getTodosSchema = {
  query: Joi.object({
    q: Joi.string(),
    page: Joi.object({
      offset: Joi.number().integer(),
      limit: Joi.number().integer().when("offset", { is: Joi.exist(), then: Joi.required(), otherwise: Joi.forbidden() }),
    }),
  }),
};

exports.getTodoSchema = {
  params: Joi.object({
    id: Joi.string(),
  }),
};

exports.patchTodoSchema = {
  params: Joi.object({
    id: Joi.string(),
  }),
  body: Joi.object({
    title: Joi.string(),
    description: Joi.string(),
    list: Joi.string()
  }),
};

exports.editStatusTodoSchema = {
  params: Joi.object({
    id: Joi.string(),
  })
};

exports.deleteTodoSchema = {
  params: Joi.object({
    id: Joi.string(),
  }),
};