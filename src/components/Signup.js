import React from 'react'
import './Signup.css'
import {useForm} from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
import { hashSync } from 'bcryptjs';

function Signup(){
    let {register,handleSubmit,formState:{errors}, getValues} = useForm();

    let Navigate=useNavigate();

    function formsubmit(newUser){
      let hashedPassword = hashSync(newUser.password, 5)
      newUser.password = hashedPassword
      fetch('http://localhost:5000/users', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newUser)
      })
        .then(response => {
          if (response.status === 201) {
            Navigate('/login')
          }
        })
        .catch(err => console.log("err in registration", err))
    }

    const validatePassword = (value) => {
      const { password } = getValues();
      return password === value || "Passwords do not match";
    };

    const validateEmail = (value) => {
      // Regular expression for email validation
      const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
      return emailRegex.test(value) || "Invalid email address";
    };

    return (
      <div>
          <div className='container p-0 mt-5' style={{boxShadow:"rgb(38, 57, 77) 0px 20px 30px -10px"}}>
              <div className='d-flex w-100' style={{}}>
                  <div className='left w-50'></div>
                  <div className='right px-5 text-white w-50' style={{}}>
                      <form action="" onSubmit={handleSubmit(formsubmit)}>
                      <div className='pt-5' >
                          <label className='form-label'>First name *</label>
                          <input type="text" id='firstname' className='form-control' {...register('firstname',{required:true})}/>
                          {errors.firstname?.type==="required" && <p>This field is required</p>}
                      </div>
                      <div>
                          <label htmlFor="" className='form-label'>Middle name</label>
                          <input type="text" className='form-control' {...register('middlename')} />
                      </div>
                      <div>
                          <label htmlFor="" className='form-label' >Last name *</label>
                          <input type="text" className='form-control' {...register('lastname',{required:true})} />
                          {errors.lastname?.type==="required" && <p>This field is required</p>}
                      </div>
                      <div>
                          <label htmlFor="" className='form-label'>Username *</label>
                          <input type="text" className='form-control' {...register('username',{required:true})}/>
                          {errors.username?.type==="required" && <p>This field is required</p>}
                      </div>
                      <div>
                        <label htmlFor="" className='form-label' >Email *</label>
                        <input type="email" className='form-control' {...register('email',{required:true, validate: validateEmail})} />
                        {errors.email?.type==="required" && <p>This field is required</p>}
                        {errors.email?.type==="validate" && <p>{errors.email.message}</p>}
                      </div>
                      <div>
                        <label htmlFor="" className='form-label'>Password *</label>
                        <input type="password" className='form-control' {...register('password',{required:true})}/>
                        {errors.password?.type==="required" && <p>This field is required</p>}
                      </div>
                      <div className='pb-3'>
                        <label htmlFor="" className='form-label'>Confirm Password *</label>
                        <input type="password" className='form-control' {...register('confirmPassword',{required:true, validate: validatePassword})}/>
                        {errors.confirmPassword?.type==="required" && <p>This field is required</p>}
                        {errors.confirmPassword?.type==="validate" && <p>{errors.confirmPassword.message}</p>}
                      </div>
                      <button type='submit' className='btn bg-dark text-white mb-4'>Signup</button>
                      </form>
                  </div>
              </div>
          </div>
      </div>
    )
}

export default Signup;
