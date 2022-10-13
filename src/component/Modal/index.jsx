import React, {useEffect} from "react";
import "./style.css";

const Modal = ({ handleClose }) => {

   
    useEffect(() => {
        const handleEsc = (event) => {
            console.log(event); 

          
            if (event.keyCode === 27) {
                console.log("will close");
                handleClose(false);
            }

           
            if (event.keyCode === 13) {
                console.log("will send");
                handleSubmit();
            }

        };

        window.addEventListener("keydown", handleEsc);

        return () => {
            console.log("Se desmontara el componente");
            window.removeEventListener("keydown", handleEsc);
        };

    }, [handleClose]);

    const handleSubmit = (evento) => {
        evento?.preventDefault();
        console.log(evento);
    };

    const onClose = () => {
        
        handleClose(false);
    };

    return (
        <div className="background">
            <form className="modal-container" onSubmit={handleSubmit}>
                <h2 className="tituloModal">Hello Word</h2>
                <p className="textoModal">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Fuga obcaecati incidunt, blanditiis quia ea in delectus
                    repudiandae? Nostrum at officiis voluptatem, sit pariatur
                    iure expedita hic impedit quasi velit magnam?
                </p>
                <div className="boton-container">
                    <button
                        className="rounded-button-cancel"
                        type="button"
                        onClick={onClose}
                    >
                        Close
                    </button>
                    <button className="rounded-button-send" type="submit">
                        Send
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Modal;