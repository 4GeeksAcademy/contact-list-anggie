import React, { useState } from "react";
import { Context } from "../store/appContext";
import { Link, useParams, useNavigate } from "react-router-dom";


const AddContact = () => {
  const context = React.useContext(Context);
  const params = useParams()
  const navigate = useNavigate()

  let contact
  if (params.contact) {
    [contact] = context.store.contacts.filter((c) => c.id == params.contact)
  }
  else {
    contact = {
      full_name: '',
      address: '',
      email: '',
      phone: ''
    }
  }

  const [newContact, setNewContact] = useState(contact);


  const handleSubmit = (e) => {
    e.preventDefault();
    let dataForm = new FormData(e.target)
    let contact = Object.fromEntries(dataForm)
    context.actions.addContact(contact);
    navigate('/')
  };


  return (
    <div className="mt-5">
      <h1 className="text-center">ADD NEW CONTACT</h1>
      <ul className="list-group" >
        <li className="list-group-item">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="full_name" className="form-label">Full Name</label>
              <input
                id="full_name"
                className="form-control"
                type="text"
                placeholder="Full Name"
                defaultValue={contact.full_name}
                name="full_name"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="address" className="form-label">Address</label>
              <input
                id="address"
                className="form-control"
                type="text"
                placeholder="Enter address"
                defaultValue={contact.address}
                name="address"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                id="email"
                className="form-control"
                type="email"
                placeholder="Enter email"
                defaultValue={contact.email}
                name="email"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="phone" className="form-label">Phone</label>
              <input
                id="phone"
                className="form-control"
                type="phone"
                placeholder="Enter phone"
                defaultValue={contact.phone}
                name="phone"
              />
              <input
                type="hidden"
                name="id"
                defaultValue={contact.id}
              />
              <input
                type="hidden"
                name="agenda_slug"
                defaultValue="anggie_agenda"
              />

            </div>
            <div className="d-grid gap-2">
              <button className="btn btn-primary" type="submit">Save</button>
            </div>
            <Link to="/">or get back to contacts</Link>
          </form>
        </li>
      </ul>
    </div>
  )
}

export default AddContact;


