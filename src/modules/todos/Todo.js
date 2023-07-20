const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema(
  {
    title: {
      type: mongoose.SchemaTypes.String,
      required: true,
    },
    description: {
      type: mongoose.SchemaTypes.String,
      required: true,
    },
    status: {
      type: mongoose.SchemaTypes.Boolean,
      required: true,
      default: false
    },
    list: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "List",
    },
    user: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "User",
    },
  },
  {
    versionKey: false,
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

const Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo;
