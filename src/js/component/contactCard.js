import React from "react";
import { Context } from "../store/appContext";
import CardDesign from "./cardDesign";


let ContactCard = () => {
	const { store, actions } = React.useContext(Context);

	return (
		<div className="mt-5">
			<div className="list-group">
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

