import React from 'react'
import {useForm} from 'react-hook-form'
import './Login.css'
import { useNavigate } from 'react-router-dom';

function Login() {
    let { register, handleSubmit, formState: { errors } } = useForm();
    let Navigate=useNavigate()
    function formsubmit(userObj) {
        console.log(userObj)
        Navigate('/books')
    }

    return (
        <div>
            <div className='container p-0 mt-5'>
                <div className='mid text-white rounded-4' style={{ boxShadow: "rgb(38, 57, 77) 0px 20px 30px -10px", marginTop: "100px",backgroundImage:"linear-gradient(to right, #f12711, #f5af19)",width:"500px"}}>
                    <form className='w-75 form-container ps-4 mt-5' onSubmit={handleSubmit(formsubmit)}>
                        <div className='pt-5 ps-5'>
                            <label htmlFor="" className='form-label'>Username *</label>
                            <input type="text" className='form-control' />
                        </div>
                        <div className='ps-5 pt-5'>
                            <label htmlFor="" className='form-label'>Password *</label>
                            <input type="password" className='form-control' />
                        </div>
                        <button className='btn ms-5 mt-5 text-white btn-dark'>Signin</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;