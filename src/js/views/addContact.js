import React, { useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";


const AddContact = () => {
  const { actions } = React.useContext(Context);
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");




  const handleSubmit = (e) => {
    e.preventDefault();
    const newContact = { name, country, email, phone };
    actions.addContact(newContact);
    setName("");
    setCountry("");
    setEmail("");
    setPhone("");
  };

  return (
    <div className="mt-5">
      <h1 className="text-center">ADD NEW CONTACT</h1>
      <ul className="list-group">
        <li className="list-group-item">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label for="name" className="form-label">Full Name</label>
              <input
                id="name"
                className="form-control"
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label for="address" className="form-label">Address</label>
              <input
                id="address"
                className="form-control"
                type="text"
                placeholder="Enter address"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label for="email" className="form-label">Email</label>
              <input
                id="email"
                className="form-control"
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label for="phone" className="form-label">Phone</label>
              <input
                id="phone"
                className="form-control"
                type="number"
                placeholder="Enter phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="d-grid gap-2">
              <button className="btn btn-primary" type="submit">Save</button>
            </div>
            <Link to="/contactList">or get back to contacts</Link>
          </form>
        </li>
      </ul>
    </div>
  )
}

export default AddContact;



 //const [contact, setContact] = useState({
//   name: "", 
//   country: "", etc
// })esto es lo que deberia hacer paa tener un solo estado en lugar de varios