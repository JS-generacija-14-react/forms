import { useState } from "react";

const PersonWrapper = () => {
  const [person, setPerson] = useState({
    name: "",
    email: "",
    age: "",
    subscribe: false,
    gender: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    // const name = e.target.name
    // const value = e.target.value
    // const type = e.target.type
    // const checked = e.target.checked

    setPerson((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(person);
  };

  return (
    <div>
      <h1>Person</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={person.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={person.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Age:</label>
          <input
            type="number"
            name="age"
            value={person.age}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Subscribe to newsletters</label>
          <input
            type="checkbox"
            name="subscribe"
            checked={person.subscribe}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Gender</label>
          <select name="gender" value={person.gender} onChange={handleChange}>
            <option value="">Choose</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div>
          <label>Message:</label>
          <textarea
            name="message"
            value={person.message}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default PersonWrapper;
