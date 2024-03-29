import { useState } from 'react';
import { Message } from './Message';

export const NewBudget = ({ presupuesto, setPresupuesto }) => {

    const [mensaje, setMensaje] = useState('');

    const handlePresupuesto = (e) => {
        e.preventDefault();

        if(!Number(presupuesto) || Number(presupuesto) < 0 ) {
            setMensaje('No es un presupuesto válido');
        } else {    

        }


        console.log(Number(presupuesto));

    }
    return (
        <div className="contenedor-presupuesto contenedor sombra">
            <form className="formulario" onSubmit={handlePresupuesto}>
                <div className="campo">
                    <label htmlFor="input-presupuesto">Definir Presupuesto</label>
                    <input
                        type="text"
                        className="nuevo-presupuesto"
                        placeholder="Añade tu Presupuesto"
                        id="input-presupuesto"
                        value={presupuesto}
                        onChange={(e) => setPresupuesto(e.target.value)}
                    />
                </div>
                <input
                    type="submit"
                    value="Añadir"  
                />

                {mensaje && <Message type="error" >{mensaje}</Message>}
            </form>
        </div>
    )
}
