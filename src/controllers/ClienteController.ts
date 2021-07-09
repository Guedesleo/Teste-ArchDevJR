import { Request, Response } from "express";
import ConsultarAgenda from "../services/ConsultAgenda";
import insertCliente from "../services/CreateService";
import UpdateCliente from "../services/UpdateCliente";

class ClienteController {
  public async index(request: Request, response: Response) {
    ConsultarAgenda().then((Cliente) => {
      response.json(Cliente);
    });
  }

  public async create(request: Request, response: Response) {
    const { email, ddd, numero, nome, rg, cpf } = request.body;
    insertCliente(nome, rg, cpf, ddd, numero, email);
    response.status(200).json("Cadastrado com Sucesso");
  }

  public async update(request: Request, response: Response) {
    const id = parseInt(request.params.id);
    const { nome, cpf, rg, email, ddd, numero } = request.body;
    UpdateCliente(id, nome, cpf, rg, email, ddd, numero);

    return response.status(200).json("Atualizacação realizado com sucesso!!");
  }
}

export { ClienteController };
