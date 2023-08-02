const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: [
				{
					id: 1,
					name: "Anggie Alava",
					country: "Ecuador",
					email: "anggie@example.com",
					phone: "123-456-7890",
				},
				{
					id: 2,
					name: "Anggie Alava",
					country: "Ecuador",
					email: "anggie@example.com",
					phone: "123-456-7890",
				},
				{
					id: 3,
					name: "Anggie Alava",
					country: "Ecuador",
					email: "anggie@example.com",
					phone: "123-456-7890",
				},
				{
					id: 4,
					name: "Anggie Alava",
					country: "Ecuador",
					email: "anggie@example.com",
					phone: "123-456-7890",
				},
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			addContact: newContact => {
				console.log("Add funciona!")

			},
			editContact: (id, updatedContacts) => {
				console.log("Edit funciona")

				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			deleteContact: (index) => {
				console.log("Delete funciona")
				// //get the store 
				// const store = getStore();
				// //reset the global store

			}
		}
	};
};

export default getState;
