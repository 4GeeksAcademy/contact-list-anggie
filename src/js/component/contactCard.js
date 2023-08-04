import React from "react";
import { Context } from "../store/appContext";
import CardDesign from "./cardDesign";
import { Link } from "react-router-dom";


let ContactCard = () => {
	const { store, actions } = React.useContext(Context);

	return (
		<div id="wrap" className="mt-5">
			<Link to="/addcontact" className="btn btn-success">Add new Contact</Link>
	
			<div id="contact" className="list-group">
				{store.contacts.map((contact) => (
					<div className="list-group-item" key={contact.id}>
						<CardDesign
							contact={contact}
							onEdit={actions.editContact}
							onDelete={actions.deleteContact}
						/>
					</div>
				))}
			</div>
		</div>
	)
}

export default ContactCard;

