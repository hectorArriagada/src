export interface UserI {
    usuario: string;
    clave: string;
    tipoUsuario: string;
    idUsuario: string;
}

export interface CursoI {
    nombre: string;
    descripcion: string;
    fechaInicio: string;
    fechaFin: string;
    idCurso: string;
}

export interface AsistenciaI {
    id: string;
    idCurso: string;
    idUsuario: string;
    fecha: string;
    asistio: boolean;
}