import { useEffect, useState } from 'react';
import { buildStyles, CircularProgressbarWithChildren } from 'react-circular-progressbar';
import "react-circular-progressbar/dist/styles.css";
import { formatearDinero } from '../helpers';

export const BudgetControl = ({ gastos, setGastos, presupuesto, setPresupuesto, setIsValidPresupuesto }) => {

    const [disponible, setDisponible] = useState(0);
    const [gastado, setGastado] = useState(0);
    const [porcentaje, setPorcentaje] = useState(0);

    useEffect(() => {

        const totalGastado = gastos.reduce((total, gasto) => {
            return gasto.cantidad + total;
        }, 0);

        const totalDisponible = presupuesto - totalGastado;
        const nuevoPorcentaje = (100 - (((presupuesto - totalDisponible) / presupuesto) * 100)).toFixed(2);
        setTimeout(() => {
            setPorcentaje(nuevoPorcentaje);
        }, 1500);

        setDisponible(totalDisponible);
        setGastado(totalGastado);

    }, [gastos]);

    const handleResetApp = () => {
        const resultado = confirm(`Reiniciar Gastos y Presupuesto?`);

        if(resultado) {
            setGastos([]);
            setPresupuesto(0);
            setIsValidPresupuesto(false);
        } else {

        }
    }

    return (
        <div className="contenedor-presupuesto contenedor sombra dos-columnas">
            <div className='circular-progress-contenedor'>
                <CircularProgressbarWithChildren
                    styles={buildStyles({
                        pathColor: '#3B82F6',
                        trailColor: porcentaje < 0 ? 'red' : '',
                    })}
                    value={porcentaje}
                >
                    <div className={`circular-progress-contenedor-text ${porcentaje < 0 ? "text-red" : ""}`}>
                        <p>{`${porcentaje}%`}</p>
                        <p>Disponible</p>
                    </div>
                </CircularProgressbarWithChildren>
            </div>
            <div className="contenido-presupuesto">
                <button
                    className='reset-app'
                    type='button'
                    onClick={handleResetApp}
                >
                    Resetear App
                </button>
                <p>
                    <span>Presupuesto:</span> {formatearDinero(presupuesto)}
                </p>

                <p className={`${disponible < 0 ? 'negativo' : ''}`}>
                    <span>Disponible:</span> {formatearDinero(disponible)}
                </p>

                <p>
                    <span>Gastos:</span> {formatearDinero(gastado)}
                </p>

            </div>
        </div>
    )
}
