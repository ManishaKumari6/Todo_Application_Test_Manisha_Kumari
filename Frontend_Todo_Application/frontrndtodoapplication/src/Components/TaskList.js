import ApiServices from "../ApiServices";
import { useState } from "react"
import { ToastContainer, toast } from "react-toastify";
import { useEffect } from "react";

export default function TaskList() {
  const [tasks, settasks] = useState([]);
  useEffect(() => {
    let data1 = {
      status: true
    }
    ApiServices.AllTask(data1)
      .then((res) => {
        console.log(res.data.data);
        settasks(res.data.data);
      })
      .catch(err => {
        console.log(err);
        toast.error("something went wrong", { position: "top-center" });
      })
  }, []);
  const handleDelete = (_id) => {
    let data = {
      _id: _id,
      status: false
    }
    ApiServices.Delete(data)
      .then((res) => {
        console.log(res);
        toast.success(res.data.message, { position: "top-center" });
        window.location.reload();
      })
      .catch(err => {
        console.log(err);
        toast.error("something went wrong", { position: "top-center" });
      })
  }
  return (
    <>
      <div className="container">
        <ToastContainer />
        <ul className="list-group">
          <li className="list-group-item active" aria-current="true">
            All Tasks
          </li>
          {
            tasks.map((el, index) => (
              <>
                <li className="list-group-item"><b>Task {index + 1}</b>
                  <li className="list-group-item">{el.title}
                    <li>{new Date(el.createdAt).toLocaleDateString()}   {new Date(el.createdAt).toLocaleTimeString()}</li></li><br></br>
                  <li><center><button className="btn btn-danger ms-2" onClick={() => { handleDelete(el._id) }}>Delete</button></center>
                  </li>
                </li>

              </>
            ))
          }

        </ul>
      </div>
    </>
  );
}