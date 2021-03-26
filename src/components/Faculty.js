import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Profilepicture from '../components/Profilepicture';


const Faculty = () => {
  const {id} = useParams();
    return (
        <div>
            <div className="container">
  <div className="py-4">
    <div className="row">
      <div className="col-md-10 mx-auto">
        <div className="card card-body shadow">
          <div className="row">
            <div className="col-md-4">
            <Profilepicture url = {`https://i.pravatar.cc/150?img=${id}`} /> 
            </div>
            <div className="col-md-8">
              <ul className="list-group">
                <li
                  className="d-flex justify-content-between align-items-center list-group-item list-group-item-action"
                >
                  <h3 className="m-0">FACULTY NAME</h3>
                  <Link className="btn btn-primary" to={`/newForm/${id}`}>
                    Edit Profile
                  </Link>
                </li>
                <li className="list-group-item">
                  <p>email: FACULTY_EMAIL</p>
                  <p>phone: FACULTY_PHONE</p>
                  <p>class: FACULTY_STANDARD</p>
                  <p>skills: FACULTY_SKILLS</p>
                  <p>experiance: YAER_OF_EXPERIANCE</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
    )
}

export default Faculty
