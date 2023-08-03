import React from "react";


const CardDesign = ({ contact, onEdit, onDelete }) => {
    return (
        <div className="card">
            <div className="row">
                <div className="col-md-4">
                    <img id="avatar" className="img-fluid" src="https://picsum.photos/100/100?random=1"></img>
                </div>
                <div className="col-md-8">
                    <h5 className="card-tittle">Name: {contact.name}</h5>
                    <p className="card-text">Country: {contact.country}</p>
                    <p className="card-text"> Email: {contact.name}</p>
                    <p className="card-text">Phone: {contact.phone}</p>
                </div>
                <i
                    id="icon-edit"
                    className="fas fa-pencil-alt"
                    onClick={() => onEdit(contact.id)}>
                </i>
                <i
                    id="icon-trash"
                    className="fas fa-trash"
                    onClick={() => onDelete(contact.id)}
                ></i>

            </div>
        </div>

    );
};

export default CardDesign;