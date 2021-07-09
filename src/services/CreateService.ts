// import { request } from "express";
import db from "../database/database";

// interface IRequestDTO {
//   nome: string;
//   cpf: string;
//   rg: string;
//   IdTelefone: number;
//   IdEmail: number;
// }

const insertCliente = async (
  nome: string,
  rg: number,
  cpf: number,
  ddd: number,
  numero: number,
  email: string
) => {
  await db.query(`INSERT INTO email VALUES (DEFAULT,'${email}') `);

  const idEmail = await db.query(
    `select * from email where email ='${email}' `
  );

  await db.query(`INSERT INTO telefone VALUES (DEFAULT,${ddd}, ${numero}) `);

  const idtelefone = await db.query(
    `select * from telefone where numero ='${numero}' `
  );
  const cliente = await db.query(
    `INSERT INTO cliente VALUES (DEFAULT,'${nome}', ${cpf},${rg},${idEmail.rows[0].idemail}, ${idtelefone.rows[0].idtelefone}) `
  );

  return cliente;
};

export default insertCliente;
