import React from "react";
import { Link } from "react-router-dom";




const CardDesign = ({ contact, onEdit, onDelete }) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <img id="avatar" className="position-absolute top-0 start-0 p-3 ms-5" src="https://picsum.photos/120/120?random=1"></img>
                </div>
                <div className="col">
                    <h5>{contact.name}</h5>
                    <p>Address: {contact.address}</p>
                    <p> Email: {contact.email}</p>
                    <p>Phone: {contact.phone}</p>
                </div>
                <div className="col icons-container">
                    <Link to={`/editContact/${contact.id}`} >
                        <i
                            id="edit"
                            className="fas fa-pencil-alt">
                        </i>
                    </Link>
                    <i
                        id="trash"
                        className="fas fa-trash"
                        onClick={() => onDelete(contact.id)}
                    ></i>
                </div>

            </div>
        </div>

    );
};

export default CardDesign;