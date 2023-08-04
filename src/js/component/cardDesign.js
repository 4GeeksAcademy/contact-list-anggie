import React, { useState } from "react";
import { Link } from "react-router-dom";

const CardDesign = ({ contact, onEdit, onDelete }) => {
    const [modal, setModal] = useState(false);

    const openModal = () => { setModal(true) };
    const confirmDelete = () => { onDelete(contact.id); setModal(false) };
    const cancelDelete = () => { setModal(false) };

    return (<>
        <div className="container">
            <div className="row">
                <div className="col">
                    <img id="avatar" className="position-absolute top-0 start-0 p-3 ms-5" src={`https://picsum.photos/120/120?random=${contact.id}`} alt="Avatar" />
                </div>
                <div id="col-wrap" className="col">
                    <h5>{contact.name}</h5>
                    <p id="icon" className="fas fa-map-pin"> {contact.address}</p>
                    <p id="icon" className="fas fa-envelope">  {contact.email}</p>
                    <p id="icon" className="fas fa-phone"> {contact.phone}</p>
                </div>
                <div className="col icons-container">
                    <Link to={`/editContact/${contact.id}`} >
                        <i id="edit" className="fas fa-pencil-alt"></i>
                    </Link>
                    <i id="trash" className="fas fa-trash" onClick={openModal}></i>
                </div>
            </div>

        </div>
        {modal && (
            <div className="modal show" tabIndex="-2">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Confirm Delete</h5>
                            <button type="button" className="btn-close" onClick={cancelDelete} aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <p>Are you sure you want to put {contact.name} in the Death Note? </p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" onClick={cancelDelete}>Oh no!</button>
                            <button type="button" className="btn btn-danger" onClick={confirmDelete}>Yes baby!</button>
                        </div>
                    </div>
                </div>
            </div>
        )}
    </>
    );
};

export default CardDesign;
