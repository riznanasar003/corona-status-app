import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'

const ViewAll = () => {
  const [data, setData] = useState({ data: { regional: [] } })
  const fetchData = () => {
    axios.get("https://api.rootnet.in/covid19-in/hospitals/beds").then(
      (response) => {
        setData(response.data)
      }
    ).catch().finally()
  }
  useEffect(() => { fetchData() }, [])
  return (
    <div>

      <Navbar/>
      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row">
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                <table class="table">
                  <thead>
                    <tr>
                      <th scope="col">SLNO</th>
                      <th scope="col">STATE</th>
                      <th scope="col">HOSPITAL</th>
                      <th scope="col">BED</th>
                    </tr>
                  </thead>
                  <tbody>
                  {data.data.regional.map(
                    (value, index)=>{
                      return <tr>
                      <th scope="row">{index}</th>
                      <td>{value.state}</td>
                      <td>{value.ruralHospitals}</td>
                      <td>{value.ruralBeds}</td>
                    </tr>
                    }
                  )}
                  </tbody>
                </table>


              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default ViewAll