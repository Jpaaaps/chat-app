import React from 'react';
import "./Contact.css";
import PropTypes from 'prop-types';


class Contact extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			online: false,
		};
	}
	render(){
		return (
		<div className="Contact">

			<img src={this.props.avatar} className="avatar" alt="{props.name}" />
			<div>
				<p className="name">{this.props.name}</p>

				<div className="status">
					<div className={this.state.online ? "status-online" : "status-offline"}></div>

					<div className="status-text" 
						onClick={event => {
						const offline = !this.state.online;
						this.setState({ online : offline });
						}}>
					{this.state.online ? 'Online' : 'Offline'}</div>
				</div>
			</div>
		</div>
		);
	}
  };


Contact.propTypes = {
name: PropTypes.string.isRequired,
avatar: PropTypes.string.isRequired,
status: PropTypes.bool.isRequired
}


export default Contact;

