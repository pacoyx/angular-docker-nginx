export interface IresponseFacturas {
    estado: string;
    info: Documento[];
}

interface Documento {
    tipo: string;
    serie: string;
    numero: string;
    total: number;
    fecha: string;
}