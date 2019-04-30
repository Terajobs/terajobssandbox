export class Accion {
    id:          string;
    descripcion: string;
    constructor(data?: {}) {
        this.setData(data);
    }
    setData(data: {}) {
        (<any>Object).assign(this, data);
    }
}

export class Actividad {
    id:     string;
    accion: string;
    constructor(data?: {}) {
        this.setData(data);
    }
    setData(data: {}) {
        (<any>Object).assign(this, data);
    }
}

export class Aplicante {
    id_vacante: string;
    id_usuario: string;
    estatus:    number;
    activo:     boolean;
    constructor(data?: {}) {
        this.setData(data);
    }
    setData(data: {}) {
        (<any>Object).assign(this, data);
    }
}

export class Categoria {
    id:     string;
    nombre: string;
    constructor(data?: {}) {
        this.setData(data);
    }
    setData(data: {}) {
        (<any>Object).assign(this, data);
    }
}

export class Chat {
    id_remitente:    string;
    id_destinatario: string;
    fecha:           string;
    mensaje:         string;
    constructor(data?: {}) {
        this.setData(data);
    }
    setData(data: {}) {
        (<any>Object).assign(this, data);
    }
}

export class Ciudad {
    id:     string;
    nombre: string;
    constructor(data?: {}) {
        this.setData(data);
    }
    setData(data: {}) {
        (<any>Object).assign(this, data);
    }
}

export class CodigoPromocion {
    id:          string;
    codigo:      string;
    descripcion: string;
    usos:        number;
    vigencia:    string;
    constructor(data?: {}) {
        this.setData(data);
    }
    setData(data: {}) {
        (<any>Object).assign(this, data);
    }
}

export class Log {
    id_usuario: string;
    accion:     number;
    fecha:      string;
    constructor(data?: {}) {
        this.setData(data);
    }
    setData(data: {}) {
        (<any>Object).assign(this, data);
    }
}

export class Oferta {
    id:       string;
    imagen:   string;
    producto: string;
    cantidad: number;
    precio:   number;
    constructor(data?: {}) {
        this.setData(data);
    }
    setData(data: {}) {
        (<any>Object).assign(this, data);
    }
}

export class Reclutador {
    id_usuario:           string;
    forma_pago:           string;
    creditos:             number;
    vacantes_disponibles: number;
    constructor(data?: {}) {
        this.setData(data);
    }
    setData(data: {}) {
        (<any>Object).assign(this, data);
    }
}

export class Usuario {
    id:                    string;
    username:              string;
    nombre:                string;
    apellidoP:             string;
    apellidoM:             string;
    password:              string;
    curp:                  string;
    rfc:                   RFC;
    telefono:              string;
    estado_pais:           number;
    edad:                  number;
    genero:                string;
    foto:                  string;
    estrellas:             number;
    calif_terajobs:        number;
    pasaporte:             boolean;
    visa:                  boolean; 
    nivel_maximo_estudios: number;
    acepta_terms_conds:    boolean;
    habilidades:           Habilidad[];
    cv:                    string;
    constructor(data?: {}) {
        this.setData(data);
    }
    setData(data: {}) {
        (<any>Object).assign(this, data);
    }
}

export class Habilidad {
    id: string;
    nombre:  string;
    porcentaje: number;
    categoria:  number;
    constructor(data?: {}) {
        this.setData(data);
    }
    setData(data: {}) {
        (<any>Object).assign(this, data);
    }
}

export class RFC {
    rfc:      string;
    validado: boolean;
    constructor(data?: {}) {
        this.setData(data);
    }
    setData(data: {}) {
        (<any>Object).assign(this, data);
    }
}

export class Vacante {
    id:                  string;
    id_reclutador:       number;
    descripcion:         string;
    rango_inicial:       number;
    rango_final:         number;
    estatus_vacante:     number;
    estado_pais:         string;
    ciudad:              string;
    titulo:              string;
    categoria:           string;
    campo_justificacion: string;
    constructor(data?: {}) {
        this.setData(data);
    }
    setData(data: {}) {
        (<any>Object).assign(this, data);
    }
}

/* let vac = new Vacante({id: 4, id_reclutador: 4});
let b = {ciudad: 'Jalisco'};

vac.setData(b);
vac.descripcion = 'blabla';
console.log(vac); */
