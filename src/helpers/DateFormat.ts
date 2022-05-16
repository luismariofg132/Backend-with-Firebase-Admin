interface userInterface {
    id: number;
    documento: string;
    tipo_documento: string;
    nombres: string;
    apellidos: string;
    contrasena: string;
    correo: string;
    telefono_celular: string;
    genero: string;
    fecha_nacimiento: string;
    fecha_creacion: string;
    fecha_actualizacion: string;
}

export const DateFormat = (rows: Array<userInterface>) => {
    const user = rows.map((row) => {
        return {
            id: row.id,
            documento: row.documento,
            tipo_documento: row.tipo_documento,
            nombres: row.nombres,
            apellidos: row.apellidos,
            contrasena: row.contrasena,
            correo: row.correo,
            telefono_celular: row.telefono_celular,
            genero: row.genero,
            fecha_nacimiento: JSON.stringify(row.fecha_nacimiento).replace(/\"/g, "").slice(0, 10),
            fecha_actualizacion: JSON.stringify(row.fecha_actualizacion).replace(/\"/g, "").slice(0, 10),
            fecha_creacion: JSON.stringify(row.fecha_creacion).replace(/\"/g, "").slice(0, 10)
        }
    })
    return user;
}

export const DateFormatIndividual = (data: Object): string => {
    return JSON.stringify(data).replace(/\"/g, "").slice(0, 10);
}
