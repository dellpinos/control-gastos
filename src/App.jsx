import { useState, useEffect } from 'react'
import Header from './components/header';
import Modal from './components/Modal';
import ListadoGastos from './components/ListadoGastos';
import { generarId } from './helpers';
import IconoNuevoGasto from './img/nuevo-gasto.svg';


function App() {

    const [gastos, setGastos] = useState([]);
    const [presupuesto, setPresupuesto] = useState('');
    const [isValidPresupuesto, setIsValidPresupuesto] = useState(false);
    const [modal, setModal] = useState(false);
    const [animarModal, setAnimarModal] = useState(false);
    const [gastoEditar, setGastoEditar] = useState({});

    useEffect( () => {
        if(Object.keys(gastoEditar).length > 0) {
            setModal(true);
    
            setTimeout(() => {
                setAnimarModal(true);
            }, 300);

        }
    }, [gastoEditar]);

    const handleNuevoGasto = () => {
        setModal(true);
        setGastoEditar({});

        setTimeout(() => {
            setAnimarModal(true);
        }, 300);
    }

    const guardarGasto = gasto => {
        if(gasto.id) {
            // Update
            const gastosActualizados = gastos.map( gastoState => gastoState.id === gasto.id ? gasto : gastoState);
            setGastos(gastosActualizados);
            setGastoEditar({});
        } else {
            // Create
            gasto.id = generarId();
            gasto.fecha = Date.now();
            setGastos([...gastos, gasto]);
        }
        setAnimarModal(false);
        setTimeout(() => {
            setModal(false);
        }, 300);
    }

    const eliminarGasto = id => {

            const gastosActualizados = gastos.filter( gastoState => gastoState.id !== id);
            setGastos(gastosActualizados);

    }


    return (
        <div className={modal ? 'fijar' : ''}>
            <Header
                gastos={gastos}
                presupuesto={presupuesto}
                setPresupuesto={setPresupuesto}
                isValidPresupuesto={isValidPresupuesto}
                setIsValidPresupuesto={setIsValidPresupuesto}
            />

            {isValidPresupuesto && (

                <>
                    <main>
                        <ListadoGastos
                            setGastoEditar={setGastoEditar}
                            gastos={gastos}
                            eliminarGasto={eliminarGasto}
                        />
                    </main>

                    <div className='nuevo-gasto'>
                        <img
                            src={IconoNuevoGasto}
                            alt="Icono Nuevo Gasto"
                            onClick={handleNuevoGasto}
                        />
                    </div>
                </>
            )}

            {modal && <Modal
                setModal={setModal}
                animarModal={animarModal}
                setAnimarModal={setAnimarModal}
                guardarGasto={guardarGasto}
                gastoEditar={gastoEditar}
                setGastoEditar={setGastoEditar}
            />}

        </div>
    )
}

export default App
