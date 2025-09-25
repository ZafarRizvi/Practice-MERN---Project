import Todo from "../models/todo.model.js";

// Create a new todo
export const createTodo = async (req, res) => {
  try {
    const todo = new Todo(req.body);
    console.log("Creating Todo:", todo);
    await todo.save();
    res.status(201).json(todo);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
