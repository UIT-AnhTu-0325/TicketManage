import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login, signup } from '../action/auth';

const useForm = (validate) => {
  const dispatch = useDispatch();
  const [values, setValues] = useState({
    username: '',
    email: '',
    password: '',
    password2: ''
  });

  const [errors, setErrors] = useState({});

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const handleLogin = e => {
    e.preventDefault();
    if (!values.username.trim()) {
      errors.username = "Username required"
      setErrors({...errors}, errors.username);
    }
    if (!values.password) {
      errors.password = 'Password is required';
      setErrors({...errors}, errors.password);
    } else {
      setErrors({});
      dispatch(login({username: values.username, password: values.password}));
    }
  };
  const handleSignup = e => {
    e.preventDefault();
    setErrors(validate(values));
    if(Object.keys(errors).length===0){
      dispatch(signup({username: values.username, password: values.password, email: values.email}));
    }
  };


  return { handleChange, values, handleLogin, handleSignup, errors };
};

export default useForm;