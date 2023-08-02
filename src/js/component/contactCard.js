import React from "react";
import { Context } from "../store/appContext";
import CardDesign from "./cardDesign";


const ContactCard = () => {
	const { store, actions } = React.useContext(Context);

	return (
		<div className="container">
			<div className="row">
				{store.contacts.map((contact) => (
					<div className="col mb-4 mb-4" key={contact.id}>
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

