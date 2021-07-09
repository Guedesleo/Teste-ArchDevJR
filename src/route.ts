import { Router } from "express";
import { ClienteController } from "./controllers/ClienteController";

const router = Router();

const clienteController = new ClienteController();

router.get("/consultarCliente", clienteController.index);
router.post("/cadastrarAgenda", clienteController.create);
router.put("/editarCadastro/:id", clienteController.update);

export { router };
