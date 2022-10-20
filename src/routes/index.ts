import { Router } from "express";
import bodyParser from "body-parser";
import { getTodos,getTodo,addTodo,updateTodo,removeTodo} from "../controllers/todos";
const router = Router()
const jsonParser = bodyParser.json()

router.get('/todos',getTodos)
router.get('/todo/:id',getTodo)
router.post('/add-todo',jsonParser,addTodo)
router.put('/update-todo/:id',jsonParser,updateTodo)
router.delete('/remove-todo/:id',jsonParser,removeTodo)

export default router;