import { Expose, Type, Transform } from "class-transformer";

export class Trainer {
  @Expose({ name: "id_trainer" })
  @Transform(({ value }) => { if (Math.floor(value) && typeof value == "number") return Math.floor(value) }, { toClassOnly: true })
  id_trainer: number;

  @Expose({ name: "nombre_trainer" })
  @Transform(({ value }) => { if (/^[a-z A-Z]+$/.test(value)) return value; else throw { status: 400, message: `Error, el dato nombre no es valido` } }, { toClassOnly: true })
  nombre_trainer: string;

  @Expose({ name: 'email_personal' })
  @Transform(({ value }) => { if (/\S+@\S+.\S+/.test(value)) return value; else throw { status: 400, message: `Error, el dato email personal no es valido` } }, { toClassOnly: true })
  email_personal: string;

  @Expose({ name: 'email_corporativo' })
  @Transform(({ value }) => { if (/\S+@\S+.\S+/.test(value)) return value; else throw { status: 400, message: `Error, el dato email corporativo no es valido` } }, { toClassOnly: true })
  email_corporativo: string;

  @Expose({ name: "telefono_movil" })
  @Transform(({ value }) => { if (/^[\d\s+]+$/.test(value)) return value; else throw { status: 400, message: "Error, el dato telefono movil no es valido" }; }, { toClassOnly: true })
  telefono_movil: string;

  @Expose({ name: "telefono_residencia" })
  @Transform(({ value }) => { if (/^[\d\s+]+$/.test(value)) return value; else throw { status: 400, message: "Error, el dato telefono de residencia no es valido" }; }, { toClassOnly: true })
  telefono_residencia: string;

  @Expose({ name: "telefono_corporativo" })
  @Transform(({ value }) => { if (/^[\d\s+]+$/.test(value)) return value; else throw { status: 400, message: "Error, el dato telefono corporativo no es valido" }; }, { toClassOnly: true })
  telefono_corporativo: string;

  @Expose({ name: "telefono_movilEmpresarial" })
  @Transform(({ value }) => { if (/^[\d\s+]+$/.test(value)) return value; else throw { status: 400, message: "Error, el dato telefono movil empresarial no es valido" }; }, { toClassOnly: true })
  telefono_movilEmpresarial: string;

  constructor(
    id_trainer: number, nombre_trainer: string, email_personal: string, email_corporativo: string, telefono_movil: string, telefono_residencia: string, telefono_corporativo: string, telefono_movilEmpresarial: string
  ) {
    this.id_trainer = id_trainer;
    this.nombre_trainer = nombre_trainer;
    this.email_personal = email_personal;
    this.email_corporativo = email_corporativo;
    this.telefono_movil = telefono_movil;
    this.telefono_residencia = telefono_residencia;
    this.telefono_corporativo = telefono_corporativo;
    this.telefono_movilEmpresarial = telefono_movilEmpresarial;
  }
}
