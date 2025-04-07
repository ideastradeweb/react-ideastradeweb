
/*===================================================
  check if key exists in an object
===================================================*/
export const keyExists = (obj, key) => {
  return key in obj;
}


/*===================================================
  validate email with regex
===================================================*/
export const validateEmail = (email) => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return !emailRegex.test(email);
};


/*===================================================
  validate form
===================================================*/
export const validateForm = (formData) => {
  let isValid = true;
  const errors = {};


  // Name validation
  if (keyExists(formData, 'name')) {
    if (!formData.name) {
      errors.name = 'Please enter your name.';

    } else if (formData.name.length < 3 || formData.name.length > 20) {
      errors.name = 'Name must be between 3 and 20 characters';
    }
  } 

  // Email validation
  if (keyExists(formData, 'email')) {
    if (!formData.email) {
      errors.email = 'Please enter your email.';
  
    } else if (validateEmail(formData.email)) {
      errors.email = 'Email is invalid';
    }    
  }

  // message validation
  if (keyExists(formData,'message')) {
    if (!formData.message) {
      errors.message = 'Please enter your message.';
      
    } else if (formData.message.length < 10 || formData.message.length > 500) {
      errors.message = 'Message must be between 10 and 500 characters';
    }
  }

  if (Object.keys(errors).length) {
    isValid = false;
  }

  return {isValid, errors};

};
