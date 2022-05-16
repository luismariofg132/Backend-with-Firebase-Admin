import { Request, Response } from "express";
import { pool } from "../database/database.config";
import { DateFormat, DateFormatIndividual } from "../helpers/DateFormat";

export const getUsers = async (req: Request, res: Response): Promise<Response> => {
    let cliente = await pool.connect();
    try {
        const response = await cliente.query("SELECT * FROM adm.usuarios ORDER BY id ASC");
        const result = DateFormat(response.rows);
        return res.status(200).json(result);
    } catch (error) {
        console.log(error);
        return res.status(500).json("Internal server error");
    } finally {
        cliente.release(true);
    }
}


export const updateUsers = async (req: Request, res: Response): Promise<Response> => {
    let cliente = await pool.connect();
    try {
        const { id } = req.params;
        const { documento, tipo_documento, nombres, apellidos, correo, telefono_celular, genero, fecha_nacimiento } = req.body;
        const fecha_actual = new Date();
        const fecha_actualizacion = DateFormatIndividual(fecha_actual);
        const query = await cliente.query("UPDATE adm.usuarios SET documento = $1, tipo_documento = $2, nombres = $3, apellidos = $4, correo = $5, telefono_celular = $6, genero = $7, fecha_nacimiento = $8, fecha_actualizacion = $9 WHERE id = $10", [documento, tipo_documento, nombres, apellidos, correo, telefono_celular, genero, fecha_nacimiento, fecha_actualizacion, id]);

        let response: Response = res.status(200)
        if (query.rowCount > 0) {
            response = res.status(200).json("Usuario actualizado");
        } else {
            response = res.status(404).json("No se actualizó ningún usuario");
        }
        return response;
    } catch (error) {
        console.log(error);
        return res.status(500).json("Internal server error");
    } finally {
        cliente.release(true);
    }
}

export const createUsers = async (req: Request, res: Response): Promise<Response> => {
    let cliente = await pool.connect();
    try {
        const { documento, tipo_documento, nombres, apellidos, contrasena, correo, telefono_celular, genero, fecha_nacimiento } = req.body;
        const fecha_actual = new Date();
        const fecha_creacion = DateFormatIndividual(fecha_actual);

        const query = await cliente.query("INSERT INTO adm.usuarios (documento, tipo_documento, nombres, apellidos, contrasena, correo, telefono_celular, genero, fecha_nacimiento, fecha_creacion) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)", [documento, tipo_documento, nombres, apellidos, contrasena, correo, telefono_celular, genero, fecha_nacimiento, fecha_creacion]);

        let response = res.status(200);

        if (query.rowCount > 0) {
            response = res.status(200).json("Usuario creado");
        } else {
            response = res.status(400).json("No se creó ningún usuario");
        }

        return response;
    } catch (error) {
        console.log(error);
        return res.status(500).json("Internal server error");
    } finally {
        cliente.release(true);
    }
}

export const deleteUsers = async (req: Request, res: Response): Promise<Response> => {
    let cliente = await pool.connect();
    try {
        const { id } = req.params;
        const query = await cliente.query("DELETE FROM adm.usuarios WHERE id = $1", [id]);

        let response = res.status(200);

        if (query.rowCount > 0) {
            response = res.status(200).json("Usuario eliminado");
        } else {
            response = res.status(404).json("No se eliminó ningún usuario");
        }

        return response;
    } catch (error) {
        console.log(error);
        return res.status(500).json("Internal server error");
    } finally {
        cliente.release(true);
    }
}