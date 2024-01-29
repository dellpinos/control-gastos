import { useState } from 'react'
import Header from './components/header';
import Modal from './components/Modal';
import IconoNuevoGasto from './img/nuevo-gasto.svg';

function App() {

    const [presupuesto, setPresupuesto] = useState('');
    const [isValidPresupuesto, setIsValidPresupuesto] = useState(false);
    const [modal, setModal] = useState(false);

    const handleNuevoGasto = () => {
        setModal(true);
    }


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
                        onClick={handleNuevoGasto}
                    />
                </div>
            )}

            {modal && <Modal
                setModal={setModal}
            />}


        </div>
    )
}

export default App
