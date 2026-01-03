// import React, { useState, useEffect } from "react";

// const FourInputForm = () => {

//   const [form, setForm] = useState({
//     field1: "",
//     field2: "",
//     field3: "",
//     field4: "",
//   });

//   const [data, setData] = useState([]);
//   const [editIndex, setEditIndex] = useState(null);

//   // 🔹 LOAD DATA FROM localStorage (ON PAGE LOAD)
//   useEffect(() => {
//     const storedData = JSON.parse(localStorage.getItem("fourFormData"));
//     if (storedData) {
//       setData(storedData);
//     }
//   }, []);

//   // 🔹 SAVE DATA TO localStorage (WHENEVER DATA CHANGES)
//   useEffect(() => {
//     localStorage.setItem("fourFormData", JSON.stringify(data));
//   }, [data]);

//   // Handle input change
//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   // Add data
//   const handleAdd = () => {
//     if (
//       !form.field1 ||
//       !form.field2 ||
//       !form.field3 ||
//       !form.field4
//     ) return;

//     setData([...data, form]);
//     setForm({ field1: "", field2: "", field3: "", field4: "" });
//   };

//   // Edit data
//   const handleEdit = (index) => {
//     setEditIndex(index);
//     setForm(data[index]);
//   };

//   // Update data
//   const handleUpdate = () => {
//     const updatedData = [...data];
//     updatedData[editIndex] = form;
//     setData(updatedData);
//     setEditIndex(null);
//     setForm({ field1: "", field2: "", field3: "", field4: "" });
//   };

//   // Delete data
//   const handleDelete = (index) => {
//     setData(data.filter((_, i) => i !== index));
//   };

//   return (
//     <div>
//       <h3>Four Input Form</h3>

//       <input name="field1" placeholder="Field 1" value={form.field1} onChange={handleChange} />
//       <input name="field2" placeholder="Field 2" value={form.field2} onChange={handleChange} />
//       <input name="field3" placeholder="Field 3" value={form.field3} onChange={handleChange} />
//       <input name="field4" placeholder="Field 4" value={form.field4} onChange={handleChange} />

//       {editIndex === null ? (
//         <button onClick={handleAdd}>Add</button>
//       ) : (
//         <button onClick={handleUpdate}>Update</button>
//       )}

//       <hr />

//       <ul>
//         {data.map((item, index) => (
//           <li key={index}>
//             {item.field1}, {item.field2}, {item.field3}, {item.field4}
//             <button onClick={() => handleEdit(index)}>Edit</button>
//             <button onClick={() => handleDelete(index)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default FourInputForm;



import React, { useState, useEffect } from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper
} from "@mui/material";

const FourInputForm = () => {

  const [form, setForm] = useState({
    field1: "",
    field2: "",
    field3: "",
    field4: "",
  });

  const [data, setData] = useState(() => {
    const stored = localStorage.getItem("fourFormData");
    return stored ? JSON.parse(stored) : [];
  });

  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    localStorage.setItem("fourFormData", JSON.stringify(data));
  }, [data]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAdd = () => {
    if (Object.values(form).some(v => v === "")) return;
    setData([...data, form]);
    setForm({ field1: "", field2: "", field3: "", field4: "" });
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setForm(data[index]);
  };

  const handleUpdate = () => {
    const updated = [...data];
    updated[editIndex] = form;
    setData(updated);
    setEditIndex(null);
    setForm({ field1: "", field2: "", field3: "", field4: "" });
  };

  const handleDelete = (index) => {
    setData(data.filter((_, i) => i !== index));
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>

      <Typography variant="h5" gutterBottom>
        Four Input Form (Material UI)
      </Typography>

      <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
        <TextField label="Field 1" name="field1" value={form.field1} onChange={handleChange} />
        <TextField label="Field 2" name="field2" value={form.field2} onChange={handleChange} />
        <TextField label="Field 3" name="field3" value={form.field3} onChange={handleChange} />
        <TextField label="Field 4" name="field4" value={form.field4} onChange={handleChange} />
      </Box>

      {editIndex === null ? (
        <Button variant="contained" onClick={handleAdd}>
          Add
        </Button>
      ) : (
        <Button variant="contained" color="success" onClick={handleUpdate}>
          Update
        </Button>
      )}

      <TableContainer component={Paper} sx={{ mt: 4 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Field 1</TableCell>
              <TableCell>Field 2</TableCell>
              <TableCell>Field 3</TableCell>
              <TableCell>Field 4</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {data.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.field1}</TableCell>
                <TableCell>{row.field2}</TableCell>
                <TableCell>{row.field3}</TableCell>
                <TableCell>{row.field4}</TableCell>
                <TableCell>
                  <Button size="small" onClick={() => handleEdit(index)}>Edit</Button>
                  <Button size="small" color="error" onClick={() => handleDelete(index)}>Delete</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>

        </Table>
      </TableContainer>

    </Container>
  );
};

export default FourInputForm;
