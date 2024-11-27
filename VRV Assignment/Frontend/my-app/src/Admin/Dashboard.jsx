import React from 'react'
import { Sidebar } from './Sidebar'
import { Outlet } from 'react-router-dom'

export const Dashboard = () => {
  return (
    <div className='container'>
        <div className="row">
            <div className="col-md-3">
                <Sidebar/>
            </div>
            <div className="col-md-9">
                <Outlet/>
            </div>
        </div>


    </div>
  )
}