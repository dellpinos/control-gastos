import CerrarBtn from '../img/cerrar.svg';

const Modal = ({setModal}) => {

    const ocultarModal = () => {
        setModal(false);
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
        </div>
    )
}

export default Modal