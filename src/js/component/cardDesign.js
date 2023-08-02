import React from "react";

const CardDesign = ({ contact, onEdit, onDelete }) => {
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-tittle">Name: {contact.name}</h5>
                <p className="card-text">Country: {contact.country}</p>
                <p className="card-text"> Email: {contact.name}</p>
                <p className="card-text">Phone: {contact.phone}</p>
                <button className="btn btn-primary" onClick={() => onEdit(contact.id)}>
                    Edit contact
                </button>
                <button
                    className="btn btn-danger ml-2"
                    onClick={() => onDelete(contact.id)}
                >
                    Delete Contact
                </button>
            </div>
        </div>
    );
};

export default CardDesign;