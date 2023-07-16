import { Expose, Type, Transform } from "class-transformer";

export class Dispositivo {
  @Expose({ name: "nombre_dispositivo" })
  @Transform(({ value }) => { if (/^[a-z A-Z 0-9]+$/.test(value)) return value; else throw { status: 400, message: `Error, el dato nombre dispositivo no es valido` } }, { toClassOnly: true })
  nombre_dispositivo: string;

  @Expose({ name: "descripcion_dispositivo" })
  @Transform(({ value }) => { if (/^[a-z A-Z 0-9]+$/.test(value)) return value; else throw { status: 400, message: `Error, el dato descripcion del dispositivo no es valido` } }, { toClassOnly: true })
  descripcion_dispositivo: string;

  @Expose({ name: "lugar_id" })
  @Transform(({ value }) => { if (Math.floor(value) && typeof value == "number") return Math.floor(value) }, { toClassOnly: true })
  lugar_id: number;

  constructor(nombre_dispositivo: string, descripcion_dispositivo: string, lugar_id: number) {
    this.nombre_dispositivo = nombre_dispositivo;
    this.descripcion_dispositivo = descripcion_dispositivo;
    this.lugar_id = lugar_id;
  }
}