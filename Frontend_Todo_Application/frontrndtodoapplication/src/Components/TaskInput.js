import ApiServices from "../ApiServices";
import { useState } from "react"
import { ToastContainer, toast } from "react-toastify";
export default function TaskInput() {
    const [title, settitle] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        let data = {
            title: title
        }
        ApiServices.TaskAdd(data)
            .then(res => {
                console.log(res);
                if (res.data.success == true) {
                    toast.success(res.data.message, { position: "top-center" });
                    // localStorage.setItem("title", res.data.title);
                    localStorage.setItem("_id", res.data.data._id);
                    setTimeout(() => {
                        settitle('')
                        window.location.reload();
                    }, 2000)
                }
                else {
                    toast.warning(res.data.message, { position: "top-center" });
                }
            })
            .catch(err => {
                console.log(err);
                toast.error("something went wrong", { position: "top-center" });
            })
    }

    return (
        <>
            {/* navbar start */}
            <nav className="navbar navbar-expand-lg fixed-top navbar-light">
                <div
                    className="container-fluid"
                    style={{ backgroundColor: " rgb(0, 110, 255)" }}
                >
                    <a className="navbar-brand text-white" href="">
                        <p style={{ fontSize: "xx-large" }}>
                            <b>
                                My To-Do <span>Buddy</span>
                            </b>
                        </p>
                    </a>
                </div>
            </nav>
            {/* navbar end */}
            <br></br><br></br>

            <div className="container-xxl py-5">
                <div className="container">
                    <ToastContainer />
                    <div
                        className="text-center mx-auto mb-5 wow fadeInUp"
                        data-wow-delay="0.1s"
                    >
                        <h1 className="mb-3" style={{ color: "crimson" }}>My To Do List</h1>
                    </div>

                    <div className="bg-light rounded">
                        <div className="row g-0">
                            <div className="col-lg-1"></div>
                            <div className="col-lg-10 wow fadeIn" data-wow-delay="0.1s">
                                <div className="h-100 d-flex flex-column justify-content-center p-5">
                                    <form>
                                        <div className="row g-3">
                                            <div className="col-sm-12">
                                                <div className="form-floating">
                                                    <input
                                                        type="text"
                                                        className="form-control border-0"
                                                        id="title"
                                                        placeholder="Task Title"
                                                        value={title} onChange={(e) => { settitle(e.target.value) }}
                                                    />
                                                    <label htmlFor="title">Task Title</label>
                                                </div>
                                            </div>

                                            <div className="col-12">
                                                <button
                                                    className="btn btn-primary w-100 py-3"
                                                    type="submit"
                                                    onClick={handleSubmit}

                                                >
                                                    Add Task
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div
                                className="col-lg-6 wow fadeIn"
                                data-wow-delay="0.5s"
                            >
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}