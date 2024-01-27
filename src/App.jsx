import { useState } from 'react'
import { Header } from './components/header';
import IconoNuevoGasto from './img/nuevo-gasto.svg';

function App() {

    const [presupuesto, setPresupuesto] = useState(null);
    const [isValidPresupuesto, setIsValidPresupuesto] = useState(false);


    return (
        <div>
            <Header
                presupuesto={presupuesto}
                setPresupuesto={setPresupuesto}
                isValidPresupuesto={isValidPresupuesto}
                setIsValidPresupuesto={setIsValidPresupuesto}
            />

            {isValidPresupuesto && (
                <div className='nuevo-gasto'>
                    <img
                        src={IconoNuevoGasto}
                        alt="Icono Nuevo Gasto"
                    />
                </div>
            )}


        </div>
    )
}

export default App
