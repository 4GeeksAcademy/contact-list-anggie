import React from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import ContactCard from "../component/contactCard"


const ContactList = () => {
	const { store, actions } = React.useContext(Context);

	return (
		<div>
			<Link to="/addcontact" className="btn btn-success">Add new Contact</Link>
			<ContactCard />
		</div>
	);
};



export default ContactList;