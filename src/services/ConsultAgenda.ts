import db from "../database/database";

export type Cliente = {
  nome: string;
  cpf: number;
  rg: number;
  ddd: number;
  numero: number;
  email: string;
};

const ConsultarAgenda = async () => {
  const consultar = await db.query(` select * from cliente 
 	inner join telefone on cliente.idtelefone = telefone.idtelefone 
 	inner join email ON  cliente.idemail = email.idemail  `);

  return consultar.rows as Cliente[];
};
export default ConsultarAgenda;
