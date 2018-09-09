import React, { Component } from 'react';


class TypePhoneInput extends Component {
    render() {
        console.log('inputPHONE', this.props);
        const {
          labelContent,
          id,
          name,
          required
        } = this.props.phoneNumber;  
        return (
            <div className='position-label'>
              <label className='placeholder-label' htmlFor={id}>
                {labelContent}
              </label>
              <input 
                className='control-label'
                id={id}
                type="tel" 
                name={name} 
                pattern="[+][0-9]{2}[ ][0-9]{3}[ ][0-9]{3}[ ][0-9]{3}"
                maxLength="15"
                required={required}
              />
            </div>
        );
    }
}

export default TypePhoneInput;