const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: []
		},
		actions: {

			loadSomeData: async () => {
				let response = await fetch("https://playground.4geeks.com/apis/fake/contact/agenda/anggie_agenda")
				let data = await response.json()
				setStore({ contacts: data })
			},

			addContact: async newContact => {
				const store = getStore()
				let contacts = [...store.contacts]
				if (newContact.id !== "") {
					let index = contacts.findIndex((c) => c.id == newContact.id)
					contacts[index] = newContact
					let body = { ...newContact }
					delete body.id
					let response = await fetch(`https://playground.4geeks.com/apis/fake/contact/${newContact.id}`,
						{

							headers: {
								'Accept': 'application/json',
								'Content-Type': 'application/json'
							},
							method: "PUT",
							body: JSON.stringify(body)
						})
					if (!response.ok) console.log('Error updating')
					else setStore({ contacts })
				} else {
					let body = { ...newContact }
					delete body.id
					let response = await fetch(`https://playground.4geeks.com/apis/fake/contact/`,
						{

							headers: {
								'Accept': 'application/json',
								'Content-Type': 'application/json'
							},
							method: "POST",
							body: JSON.stringify(body)
						})
					if (!response.ok) console.log('Error creating')
					else getActions().loadSomeData()

				}

			},

			deleteContact: async (index) => {
				console.log(index)
				const store = getStore()
				let response = await fetch(`https://playground.4geeks.com/apis/fake/contact/${index}`,
					{

						headers: {
							'Accept': 'application/json',
							'Content-Type': 'application/json'
						},
						method: "DELETE"
					})
				if (!response.ok) console.log("Error deleting")
				else {
					let contacts = [...store.contacts]
					contacts = contacts.filter((c) => c.id != index)
					setStore({ contacts })

				}

			}
		}
	};
};

export default getState;
