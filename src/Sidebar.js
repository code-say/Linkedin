import React from 'react';
import { Avatar } from '@material-ui/core';
import './Sidebar.css';
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";

function Sidebar() {

    const user = useSelector(selectUser);


    const recentItem = (topic) => (
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    )
        

    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src="https://media-exp1.licdn.com/dms/image/C4E16AQF9pTUjOMCrnQ/profile-displaybackgroundimage-shrink_200_800/0/1626590868167?e=1634774400&v=beta&t=vMisgWOXKhshxL0Fvrs6jL1p6l3zAZsz0SbjhSDyLko" 
                alt="" 
                />
                <Avatar src={user.photoURL} className='sidebar__avatar'>
                    {user.email[0]}
                </Avatar>
                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>
            </div>
            <div className="sidebar__stats">
                <div className="sidebar__stat">
                <p>Who viewed you</p>
                <p className="sidebar__statNumber">1,543</p>
                </div>
                <div className="sidebar__stat">
                <p>Views on post</p>
                <p className="sidebar__statNumber">1,430</p>
                </div>
            </div>
            <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItem('reactjs')}
                {recentItem('softwareengineering')}
                {recentItem('developer')}
                {recentItem('design')}
                {recentItem('django')}
            </div>
        </div>
    );
}

export default Sidebar;
