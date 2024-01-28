import React, { useEffect, useState } from "react";
import axios from "axios";

const Table2 = () => {
  const [data, setData] = useState([]);
  const [name, setName] = useState([]);
  const [email, setEmail] = useState();
  const [uname, setUname] = useState([]);
  const [uemail, setUemail] = useState();
  const [editId, setEditId] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/user")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err)); // Use err instead of er
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const id = data.length + 1;

    axios
      .post("http://localhost:3000/user", {
        id: id,
        name: name,
        email: email,
      })
      .then((res) => {
        // Handle the success response here
        window.location.reload();
        // Optionally, update the UI or navigate to a different page
      })
      .catch((err) => {
        // Handle errors
        console.log("Error posting data:", err);
      });
  };

  const handleEdit = (id) => {
    axios
      .get(`http://localhost:3000/user/${id}`)
      .then((res) => {
        setUname(res.data[0].uname);
        setUemail(res.data[0].uemail);
      })
      .catch((err) => console.log(err));

    setEditId(id);
  };

  const handleUpdate = () => {
    axios
      .put(`http://localhost:3000/user/${editId}`, {
        id: editId,
        name: uname,
        email: uemail,
      })
      .then((res) => {
        console.log(res);
        // Update the UI or perform other actions instead of a full page reload
        setEditId(-1);
      })
      .catch((err) => console.log(err));
  };

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:3000/user/${id}`)
      .then((res) => {
        console.log(res);
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div>
        <div className="border ">
          <form onSubmit={handleSubmit} action="">
            <input
              type="text"
              name=""
              id=""
              placeholder="Name"
              className="mx-5 border border-black"
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              placeholder="email"
              className="mx-5 border border-black"
              onChange={(e) => setEmail(e.target.value)}
            />
            <button className=" bg-blue-500 mx-5 px-5 rounded">Add</button>
          </form>
        </div>
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>name</th>
              <th>email</th>
              <th>action</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((user, index) =>
              user.id === editId ? (
                <tr>
                  <td>{user.id}</td>
                  <td>
                    <input
                      type="text"
                      value={uname}
                      onChange={(e) => setUname(e.target.value)}
                    />
                  </td>
                  <td>
                    <input
                      type="email"
                      value={uemail}
                      onChange={(e) => setUemail(e.target.value)}
                    />
                  </td>
                  <td>
                    <button onClick={handleUpdate}>Update</button>
                  </td>
                </tr>
              ) : (
                <tr key={index}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  {/* You can add additional action column if needed */}
                  <td>
                    <button onClick={() => handleEdit(user.id)}>Edit</button>
                    <button onClick={() => handleDelete(user.id)}>
                      Remove
                    </button>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table2;
