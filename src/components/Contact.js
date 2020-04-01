import React from 'react';
import "./Contact.css";
import PropTypes from 'prop-types';


function Contact({name, avatar, status}) {
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


Contact.propTypes = {
name: PropTypes.string.isRequired,
avatar: PropTypes.string.isRequired,
status: PropTypes.bool.isRequired
}


export default Contact;