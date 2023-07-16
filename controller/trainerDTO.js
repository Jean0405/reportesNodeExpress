var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Expose, Transform } from "class-transformer";
export class Trainer {
    constructor(id_trainer, nombre_trainer, email_personal, email_corporativo, telefono_movil, telefono_residencia, telefono_corporativo, telefono_movilEmpresarial) {
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
__decorate([
    Expose({ name: "id_trainer" }),
    Transform(({ value }) => { if (Math.floor(value) && typeof value == "number")
        return Math.floor(value); }, { toClassOnly: true }),
    __metadata("design:type", Number)
], Trainer.prototype, "id_trainer", void 0);
__decorate([
    Expose({ name: "nombre_trainer" }),
    Transform(({ value }) => { if (/^[a-z A-Z]+$/.test(value))
        return value;
    else
        throw { status: 400, message: `Error, el dato nombre no es valido` }; }, { toClassOnly: true }),
    __metadata("design:type", String)
], Trainer.prototype, "nombre_trainer", void 0);
__decorate([
    Expose({ name: 'email_personal' }),
    Transform(({ value }) => { if (/\S+@\S+.\S+/.test(value))
        return value;
    else
        throw { status: 400, message: `Error, el dato email personal no es valido` }; }, { toClassOnly: true }),
    __metadata("design:type", String)
], Trainer.prototype, "email_personal", void 0);
__decorate([
    Expose({ name: 'email_corporativo' }),
    Transform(({ value }) => { if (/\S+@\S+.\S+/.test(value))
        return value;
    else
        throw { status: 400, message: `Error, el dato email corporativo no es valido` }; }, { toClassOnly: true }),
    __metadata("design:type", String)
], Trainer.prototype, "email_corporativo", void 0);
__decorate([
    Expose({ name: "telefono_movil" }),
    Transform(({ value }) => { if (/^[\d\s+]+$/.test(value))
        return value;
    else
        throw { status: 400, message: "Error, el dato telefono movil no es valido" }; }, { toClassOnly: true }),
    __metadata("design:type", String)
], Trainer.prototype, "telefono_movil", void 0);
__decorate([
    Expose({ name: "telefono_residencia" }),
    Transform(({ value }) => { if (/^[\d\s+]+$/.test(value))
        return value;
    else
        throw { status: 400, message: "Error, el dato telefono de residencia no es valido" }; }, { toClassOnly: true }),
    __metadata("design:type", String)
], Trainer.prototype, "telefono_residencia", void 0);
__decorate([
    Expose({ name: "telefono_corporativo" }),
    Transform(({ value }) => { if (/^[\d\s+]+$/.test(value))
        return value;
    else
        throw { status: 400, message: "Error, el dato telefono corporativo no es valido" }; }, { toClassOnly: true }),
    __metadata("design:type", String)
], Trainer.prototype, "telefono_corporativo", void 0);
__decorate([
    Expose({ name: "telefono_movilEmpresarial" }),
    Transform(({ value }) => { if (/^[\d\s+]+$/.test(value))
        return value;
    else
        throw { status: 400, message: "Error, el dato telefono movil empresarial no es valido" }; }, { toClassOnly: true }),
    __metadata("design:type", String)
], Trainer.prototype, "telefono_movilEmpresarial", void 0);
