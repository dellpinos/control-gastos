import { useEffect, useState } from 'react';
import { formatearDinero } from '../helpers';

export const BudgetControl = ({gastos, presupuesto}) => {

    const [disponible, setDisponible] = useState(0);
    const [gastado, setGastado] = useState(0);

    useEffect(() => {

        const totalGastado = gastos.reduce( (total, gasto) => {
            return gasto.cantidad + total;
        }, 0);

        const totalDisponible = presupuesto - totalGastado;

        setDisponible(totalDisponible);

        setGastado(totalGastado);
    }, [gastos]);


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
                <span>Disponible:</span> {formatearDinero(disponible)}
            </p>

            <p>
                <span>Gastos:</span> {formatearDinero(gastado)}
            </p>

        </div>
    </div>
  )
}
