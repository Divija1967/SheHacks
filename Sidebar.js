import { Avatar } from '@material-ui/core';
import React from 'react'
import "./Sidebar.css";

function Sidebar() {
    return (
        <div className="sidebar">
          <div className="sidebar__top">
              <img src="https://images.unsplash.com/photo-1607499699372-7bb722dff7e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt=""/>
              <Avatar className="sidebar__avatar" />
              <h2>Name</h2>
              <h4>Email</h4>
              </div>  

              <div className="sidebar_stats">
                  <div className="sidebar__stat">
                      <p>Who viewed you</p>
                      <p className="sidebar__statNumber">2,543</p>
                  </div>
              </div>

        </div>
    )
}

export default Sidebar
