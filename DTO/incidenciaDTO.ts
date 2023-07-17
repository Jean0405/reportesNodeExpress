import { Expose, Type, Transform } from "class-transformer"

export class Incidencia {
  @Expose({ name: "descripcion" })
  @Type(() => String)
  descripcion: string;

  @Expose({ name: "fecha_reporte" })
  @Transform(({ value }) => { if (/^[^]*$/.test(value)) { return value; } else { throw { status: 400, message: `Error, el dato fecha reporte no es válido` }; } }, { toClassOnly: true })
  fecha_reporte: string;

  @Expose({ name: "categoria_id" })
  @Transform(({ value }) => { if (Math.floor(value) && typeof value == "number") return Math.floor(value) }, { toClassOnly: true })
  categoria_id: number;

  @Expose({ name: "tipoIncidencia_id" })
  @Transform(({ value }) => { if (Math.floor(value) && typeof value == "number") return Math.floor(value) }, { toClassOnly: true })
  tipoIncidencia_id: number;

  @Expose({ name: "lugar_id" })
  @Transform(({ value }) => { if (Math.floor(value) && typeof value == "number") return Math.floor(value) }, { toClassOnly: true })
  lugar_id: number;

  @Expose({ name: "trainer_id" })
  @Transform(({ value }) => { if (Math.floor(value) && typeof value == "number") return Math.floor(value) }, { toClassOnly: true })
  trainer_id: number;

  constructor(
    descripcion: string,
    fecha_reporte: string,
    categoria_id: number,
    tipoIncidencia_id: number,
    lugar_id: number,
    trainer_id: number
  ) {
    this.descripcion = descripcion;
    this.fecha_reporte = fecha_reporte;
    this.categoria_id = categoria_id;
    this.tipoIncidencia_id = tipoIncidencia_id;
    this.lugar_id = lugar_id;
    this.trainer_id = trainer_id;
  }
}