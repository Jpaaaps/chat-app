import React from 'react';
import "./Contact.css";

const name = 'Melinda Coleman';
const avatar = 'https://randomuser.me/api/portraits/women/19.jpg';
const status = true; 


function Contact() {
	return (
	  <div className="Contact">

		<img src={avatar} className="avatar" alt="logo" />
		<div>
			<p className="name">{name}</p>

			<div className="status">
				<div className={status ? "status-online" : "status-offline"}></div>
				<div className="status-text">{status ? 'Online' : 'Offline'}</div>
			</div>
		</div>
	  </div>
	);
  };

export default Contact;