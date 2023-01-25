import { Categoria } from './categoria';
import { Fire } from './fire';
import { Material } from './material';
import { Medida } from './medida';

export interface Product extends Fire {
  nombre?: string;
  alias?: string;
  denominacion?: string;
  tipo?: string;
  medidas?: {
    largo?: Medida;
    ancho?: Medida;
    alto?: Medida;
    espesor?: Medida;
    diametro?: Medida;
    variable?: Medida;
  };
  categoria?: string;
  materiales?: Material[];
}
