const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: [
				{
					id: 1,
					name: "Anggie Alava",
					address: "Ecuador",
					email: "anggie@example.com",
					phone: "123-456-7890",
				},
				{
					id: 2,
					name: "Guena",
					address: "Ecuador",
					email: "anggie@example.com",
					phone: "123-456-7890",
				},
				{
					id: 3,
					name: "Anggie Alava",
					address: "Ecuador",
					email: "anggie@example.com",
					phone: "123-456-7890",
				},
				{
					id: 4,
					name: "Anggie Alava",
					address: "Ecuador",
					email: "anggie@example.com",
					phone: "123-456-7890",
				},
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			addContact: newContact => {
				const store = getStore()
				let contacts = [...store.contacts]
				if (newContact.id !== "") {

					let index = contacts.findIndex((c) => c.id == newContact.id)
					contacts[index] = newContact
					setStore({ contacts })
				} else {
					newContact['id'] = contacts.length + 1
					contacts.push(newContact)
					setStore({ contacts })
				}
			},

			deleteContact: (index) => {
				console.log(index)
				const store = getStore()
				let contacts = [...store.contacts]
				contacts = contacts.filter((c) => c.id != index)
				setStore({ contacts })

			}
		}
	};
};

export default getState;
