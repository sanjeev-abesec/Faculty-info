import React from 'react';
import {Link} from 'react-router-dom';
import Profilepicture from './Profilepicture';

const Faculties = () => {
    return (
        <div>
            <div className="container">
                <div className="py-4">
                    <div className="row">
                        {
                            new Array(12).fill("").map((item, index) => (

                                <div className="col-lg-3 col-md-6 mb-4" key={index}>
                                    <div className="card shadow text-center py-4">
                                        <Profilepicture url = {`https://i.pravatar.cc/150?img=${index}`} />
                                      <div className="card-body">
                                            <h5 className="card-title mb-0">Faculty Name</h5>
                                            <p className="text-muted small">Faculty E-mail</p>
                                            <Link to={`/faculty/${index}`} className="btn btn-primary btn-profile">
                                                View Profile
                                            </Link>
                                            <button className="btn btn-edit">
                                                <span className="material-icons">delete_outline</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>

                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Faculties;