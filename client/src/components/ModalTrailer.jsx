import React, { useRef } from 'react'
import '../styles/modalTrailer.css'
const ModalTrailer = ({videoUrl}) => {


        return (
            <>
            <button className="button_open_modal p-2  text-black" onClick={()=>document.getElementById('my_modal_4').showModal()}> Ver trailer</button>
            <dialog id="my_modal_4" className="modal">
            <div className="modal-box w-auto max-w-fit bg-stone-900">
                <iframe
                    width="800"
                    height="500"
                    src={videoUrl}
                    title="Trailer"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    crossorigin="anonymous"
                    ></iframe>              
                <div className="modal-action">
                <form method="dialog">
                    {/* if there is a button, it will close the modal */}
                    <button className="btn">Cerrar</button>
                </form>
                </div>
            </div>
            </dialog>
          </>
        );
}

export default ModalTrailer