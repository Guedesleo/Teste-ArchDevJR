import express from "express";
import { router } from "./route";
import { errors } from "celebrate";

import "./database/database";

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(router);
app.use(errors());

app.listen(3000, () => console.log("Server is running"));
