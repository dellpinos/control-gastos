import { Message } from './Message';
import { useState } from 'react';
import CerrarBtn from '../img/cerrar.svg';

const Modal = ({ setModal, animarModal, setAnimarModal, guardarGasto }) => {

    const [mensaje, setMensaje] = useState('');
    const [nombre, setNombre] = useState('');
    const [cantidad, setCantidad] = useState('');
    const [categoria, setCategoria] = useState('');


    const handleSubmit = e => {
        e.preventDefault();

        if ([nombre, cantidad, categoria].includes('')) {
            setMensaje('Todos los campos son obligatorios');

            setTimeout(() => {
                setMensaje('');
            }, 1500);
            return;
        }

        guardarGasto({nombre, cantidad, categoria});

    }

    const ocultarModal = () => {
        setAnimarModal(false);

        setTimeout(() => {
            setModal(false);

        }, 300);
    }
    return (
        <div className="modal">
            <div className="cerrar-modal">
                <img
                    src={CerrarBtn}
                    alt="Botón Cerrar"
                    onClick={ocultarModal}
                />
            </div>

            <form className={`formulario ${animarModal ? "animar" : "cerrar"}`} onSubmit={handleSubmit}>
                <legend>Nuevo Gasto</legend>

                <div className='campo'>
                    <label htmlFor="nombre">Nombre Gasto</label>
                    <input
                        type="text"
                        placeholder='Agrega el nombre del gasto'
                        id='nombre'
                        value={nombre}
                        onChange={e => setNombre(e.target.value)}
                    />
                </div>
                <div className='campo'>
                    <label htmlFor="cantidad">Cantidad</label>
                    <input
                        type="number"
                        placeholder='Ej: 300'
                        id='cantidad'
                        value={cantidad}
                        onChange={e => setCantidad(Number(e.target.value))}
                    />
                </div>
                <div className='campo'>
                    <label htmlFor="categoria">Categoria</label>
                    <select
                        id="categoria"
                        value={categoria}
                        onChange={e => setCategoria(e.target.value)}
                    >
                        <option value="">-- Seleccione --</option>
                        <option value="ahorro">Ahorro</option>
                        <option value="comida">Comida</option>
                        <option value="casa">Casa</option>
                        <option value="varios">Gastos Varios</option>
                        <option value="ocio">Ocio</option>
                        <option value="salud">Salud</option>
                        <option value="suscripciones">Suscripciones</option>

                    </select>
                </div>
                <input
                    type="submit"
                    value="Agregar Gasto"

                />

                {mensaje && <Message
                    type='error'
                >{mensaje}</Message>}
            </form>
        </div>
    )
}

export default Modal