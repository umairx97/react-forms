import React, { Component } from 'react';


import FormFields from '../widgets/Forms/formFields';


class User extends Component {

	state = {

		formData: { 
			name: {
				element: 'input', 
				value:'', 
				label: true, 
				labelText: 'Name', 
				config: { 
					name: 'name_input', 
					text: 'text', 
					placeholder: 'Enter your name'
				}
			},
			lastname: {
				element: 'input', 
				value:'', 
				label: true, 
				labelText: 'lastname', 
				config: { 
					name: 'lastname_input', 
					text: 'text', 
					placeholder: 'Enter your lastname'
				}
			}
		}
		
	}

	render(){
		return(
			<div className = "container">
				<form onSubmit = {this.submitForm}>


					<FormFields
					formData = {this.state.formData}
					
					
					/>

					<button type="submit">Submit</button>
				</form>
			</div>
		)
	}
}

export default User;