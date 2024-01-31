import { formatearDinero } from '../helpers';

export const BudgetControl = ({presupuesto}) => {

  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
        <div>
            Gráfica Aquí
        </div>
        <div className="contenido-presupuesto">
            <p>
                <span>Presupuesto:</span> {formatearDinero(presupuesto)}
            </p>

            <p>
                <span>Disponible:</span> $0
            </p>

            <p>
                <span>Gastos:</span> $0
            </p>

        </div>
    </div>
  )
}
