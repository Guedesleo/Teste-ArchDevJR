import db from "../database/database";

const UpdateCliente = async (
  id: number,
  nome: string,
  cpf: number,
  rg: number,
  email: string,
  ddd: number,
  numero: number
) => {
  const consultar = await db.query(` select * from cliente 
 	inner join telefone on cliente.idtelefone = telefone.idtelefone 
 	inner join email ON  cliente.idemail = email.idemail where idcliente=${id} `);

  if (email != consultar.rows[0].email) {
    await db.query(
      `UPDATE email set email =
    '${email}' where idemail = ${consultar.rows[0].idemail} `
    );
  }
  if (ddd != consultar.rows[0].ddd || numero != consultar.rows[0].numero) {
    await db.query(
      `UPDATE telefone set ddd =${ddd}, numero = ${numero} where idtelefone = ${consultar.rows[0].idtelefone} `
    );
  }
  await db.query(
    `UPDATE cliente set nome ='${nome}', cpf = ${cpf} , rg = ${rg} where idcliente = ${id} `
  );
  return;
};

export default UpdateCliente;
