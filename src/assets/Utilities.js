export function validate(input) {
    let errors = {};
    if(!input.name){
      errors.name ="Name is required"
    } else if (!/^[a-zA-ZÀ-ÿ\u00f1\u00d1\s]+$/.test(input.name)) {
      errors.name = 'Please enter a valid name';
    } else if(!input.email){
      errors.email ="Email is required"
    } else if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(input.email)){
      errors.email ="Please enter a valid email"
    } else if(!input.message){
      errors.message ="Please enter your message"
    } 
    
    return errors;
  }
