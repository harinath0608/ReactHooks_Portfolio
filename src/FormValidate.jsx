import React, { useEffect, useState } from "react";

const FormValidate = () => {

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    mobile: ""
  });

  const [error, setError] = useState({});
  const [success, setSuccess] = useState("");

  useEffect(()=> {

    const savedData = JSON.parse(localStorage.getItem("form"))

    if(savedData) {
      setForm(savedData)
    }

  },[]);


  /* 🔹 Regex Validation */

  const valid = () => {
    let newErrors = {};

    // NAME
    if (!/^[A-Za-z]{3,}$/.test(form.name)) {
      newErrors.name = "Name must be at least 3 letters";
    }

    // EMAIL
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Email must be valid";
    }

    // PASSWORD
    if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(form.password)) {
      newErrors.password =
        "Password must contain 8 chars, 1 letter & 1 number";
    }

    // MOBILE
    if (!/^[6-9]\d{9}$/.test(form.mobile)) {
      newErrors.mobile = "Enter valid 10-digit mobile number";
    }

    setError(newErrors);

    return Object.keys(newErrors).length === 0;
  };

    const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

const handleSubmit = (e) => {
  e.preventDefault();

  if (valid()) {

    // Get existing users
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

    // Add new form user
    existingUsers.push(form);

    // Save back to localStorage
    localStorage.setItem("users", JSON.stringify(existingUsers));

    setSuccess("Form submitted successfully ✅");

    // Clear form
    setForm({
      name: "",
      email: "",
      password: "",
      mobile: ""
    });

    setError({});
  } else {
    setSuccess("");
  }
};



  return (
    <div>
      <form onSubmit={handleSubmit}>

        <input
          name="name"
          value={form.name}
          placeholder="Enter Name"
          onChange={handleChange}
        />
        <p style={{ color: "red" }}>{error.name}</p>

        <input
          name="email"
          value={form.email}
          placeholder="Enter Mail"
          onChange={handleChange}
        />
        <p style={{ color: "red" }}>{error.email}</p>

        <input
          name="password"
          value={form.password}
          placeholder="Enter Password"
          onChange={handleChange}
        />
        <p style={{ color: "red" }}>{error.password}</p>

        <input
          name="mobile"
          value={form.mobile}
          placeholder="Enter Number"
          onChange={handleChange}
        />
        <p style={{ color: "red" }}>{error.mobile}</p>

        <button type="submit">Submit</button>
      </form>

      <p style={{ color: "green" }}>{success}</p>
    </div>
  );
};

export default FormValidate;
