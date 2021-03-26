import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Inputdata from './Inputdata';


const Newform = () => {
    const { id } = useParams();
    const [faculty, setFaculty] = useState({
        name: "",
        email: "",
        phone: "",
        standard: "",
        skills: "",
        experiance: "",

    });
    const onInputChange = (e) => {
        setFaculty({ ...faculty, [e.target.name]: e.target.value })

    }

    const submitForm = (e) => {
        e.preventDefault();
        if (id) {
            alert("Updated successfully");
        }
        else {
            alert("Add Successfull");
        }
    };


    return (
        <div className="container">
            <div className="py-4">
                <div className="row">
                    <div className="col-md-10 mx-auto">
                        <div className="card card-body shadow">
                            <form onSubmit={submitForm}>
                                <div className="form-row form-group mb-4">
                                    <div className="col-md-6">
                                        <Inputdata
                                            placeholder="Enter Faculty Name"
                                            name="name"
                                            value={faculty.name}
                                            onChange={onInputChange}
                                        />

                                    </div>
                                    <div className="col-md-6">
                                        <Inputdata
                                            placeholder="Enter Faculty E-mail"
                                            name="email"
                                            value={faculty.email}
                                            onChange={onInputChange}

                                        />

                                    </div>
                                </div>
                                <div className="form-row form-group mb-4">
                                    <div className="col-md-6">
                                        <Inputdata
                                            placeholder="Enter Faculty Phone"
                                            name="phone"
                                            value={faculty.phone}
                                            onChange={onInputChange}

                                        />

                                    </div>
                                    <div className="col-md-6">
                                        <Inputdata
                                            placeholder="Teaching Standard"
                                            name="standard"
                                            value={faculty.standard}
                                            onChange={onInputChange}
                                        />


                                    </div>
                                </div>
                                <div className="form-row form-group">
                                    <div className="col-md-6">
                                        <Inputdata
                                            placeholder="Enter Your Skills"
                                            name="skills"
                                            value={faculty.skills}
                                            onChange={onInputChange}
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <Inputdata
                                            placeholder="Enter Year of experiance"
                                            name="experiance"
                                            value={faculty.experiance}
                                            onChange={onInputChange}
                                            />     
                                    </div>
                                </div>

                                    <button type="submit" className="btn btn-primary">
                                        {
                                            id ? "Update Faculty" : "Add Faculty"
                                        }
                                    </button>
                            </form>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Newform