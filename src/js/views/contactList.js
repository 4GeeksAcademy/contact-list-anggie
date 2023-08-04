import React from "react";
import { Context } from "../store/appContext";
import ContactCard from "../component/contactCard"


const ContactList = () => {
	const { store, actions } = React.useContext(Context);

	return (
		<div>
			<ContactCard />
		</div>
	);
};



export default ContactList;