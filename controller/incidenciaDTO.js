var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Expose, Type, Transform } from "class-transformer";
export class Incidencia {
    constructor(descripcion, fecha_reporte, categoria_id, tipoIncidencia_id, lugar_id, trainer_id) {
        this.descripcion = descripcion;
        this.fecha_reporte = fecha_reporte;
        this.categoria_id = categoria_id;
        this.tipoIncidencia_id = tipoIncidencia_id;
        this.lugar_id = lugar_id;
        this.trainer_id = trainer_id;
    }
}
__decorate([
    Expose({ name: "descripcion" }),
    Type(() => String),
    __metadata("design:type", String)
], Incidencia.prototype, "descripcion", void 0);
__decorate([
    Expose({ name: "fecha_reporte" }),
    Transform(({ value }) => { if (/^[^]*$/.test(value)) {
        return value;
    }
    else {
        throw { status: 400, message: `Error, el dato fecha reporte no es válido` };
    } }, { toClassOnly: true }),
    __metadata("design:type", String)
], Incidencia.prototype, "fecha_reporte", void 0);
__decorate([
    Expose({ name: "categoria_id" }),
    Transform(({ value }) => { if (Math.floor(value) && typeof value == "number")
        return Math.floor(value); }, { toClassOnly: true }),
    __metadata("design:type", Number)
], Incidencia.prototype, "categoria_id", void 0);
__decorate([
    Expose({ name: "tipoIncidencia_id" }),
    Transform(({ value }) => { if (Math.floor(value) && typeof value == "number")
        return Math.floor(value); }, { toClassOnly: true }),
    __metadata("design:type", Number)
], Incidencia.prototype, "tipoIncidencia_id", void 0);
__decorate([
    Expose({ name: "lugar_id" }),
    Transform(({ value }) => { if (Math.floor(value) && typeof value == "number")
        return Math.floor(value); }, { toClassOnly: true }),
    __metadata("design:type", Number)
], Incidencia.prototype, "lugar_id", void 0);
__decorate([
    Expose({ name: "trainer_id" }),
    Transform(({ value }) => { if (Math.floor(value) && typeof value == "number")
        return Math.floor(value); }, { toClassOnly: true }),
    __metadata("design:type", Number)
], Incidencia.prototype, "trainer_id", void 0);
