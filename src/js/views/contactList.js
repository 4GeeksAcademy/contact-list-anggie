import React from "react";
import { Context } from "../store/appContext";


const ContactList = () => {
	const { store, actions } = React.useContext(Context);

	return (
		<div>
			{store.contacts.map((contact) => (
				<div key={contact.id}>
					<p>Name: {contact.name}</p>
					<p>Country: {contact.country}</p>
					<p>Email: {contact.email}</p>
					<p>Phone: {contact.phone}</p>
					<button onClick={() => actions.editContact(contact.id)}> Edit Contact</button>
					<button onClick={() => actions.deleteContact(contact.id)}>Delete Contact</button>
				</div>
			))}
		</div>
	);
};



export default ContactList;