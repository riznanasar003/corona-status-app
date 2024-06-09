import React from 'react'
import Navbar from './Navbar'

const AddPatients = () => {
  return (
    <div>
        <Navbar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                        <label htmlFor="" className="form-label">PATIENT ID</label>
                        <input type="text" className="form-control" />

                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                        <label htmlFor="" className="form-label">PATIENT NAME</label>
                        <input type="text" className="form-control" />

                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                        <label htmlFor="" className="form-label">AGE</label>
                        <input type="text" className="form-control" />

                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                        <label htmlFor="" className="form-label">ADMISSION DATE</label>
                        <input type="date" name="" id="" className="form-control" />

                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                        <label htmlFor="" className="form-label">DOCTOR NAME</label>
                        <input type="text" className="form-control" />

                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                        <label htmlFor="" className="form-label">DISCHARGE DATE</label>
                        <input type="date" name="" id="" className="form-control" />

                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                        <button className="btn btn-dark">ADD</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default AddPatients