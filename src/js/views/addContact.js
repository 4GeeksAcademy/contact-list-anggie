import React, { useState } from "react";
import { Context } from "../store/appContext";


const AddContact = () => {
  const { actions } = React.useContext(Context);
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  //const [contact, setContact] = useState({
//   name: "", 
//   country: "", etc
// })esto es lo que deberia hacer paa tener un solo estado en lugar de varios


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
    <div>
      <h1>Add a new Contact</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <button type="submit">Save Contact</button>
      </form>
    </div>
  )
}

export default AddContact;


// el boton add contact solo me envia al formulario no es una accion en si