import React, { useRef } from "react";
import "../components/style.css";
import { FaLock } from "react-icons/fa6";
import { IoPersonCircle } from "react-icons/io5";
import { FaUser } from "react-icons/fa6";
const Formvalidation = () => {
    const nameref = useRef();
    const passref = useRef();
    const cpassref = useRef();
    const btnref = useRef();
   
    const namecheck = () => {
        if (nameref.current.value.length <= 5) {
            let n = document.getElementById('name')
            n.innerHTML = "Name must be 6 characters"
            n.style.color = 'red'
            nameref.current.classList.add('is-invalid')
            btninactive()
        }
        else {
            nameref.current.classList.remove('is-invalid')
            nameref.current.classList.add('is-valid')
            let n = document.getElementById('name')
            n.innerHTML = ''
            btnactive()
        }
    }

    const btnactive = () => {
        btnref.current.disabled = false
    }
    const btninactive = () => {
        btnref.current.disabled = true
    }
    const passwordcheck = () => {
        if (passref.current.value.length <= 5) {
            passref.current.classList.add('is-invalid')
            let pass = document.getElementById('password')
            pass.innerHTML = 'Password must be 6 digit'
            pass.style.color = 'red'
        }
        else {
            passref.current.classList.remove('is-invalid')
            passref.current.classList.add('is-valid')
            let pass = document.getElementById('password')
            pass.innerHTML = ''
        }
    }
    const passmatch = () => {
        if (passref.current.value === cpassref.current.value) {
            cpassref.current.classList.add('is-valid')
            cpassref.current.classList.remove('is-invalid')
            let pass = document.getElementById('password')
            pass.innerHTML = "Password matched"
            pass.style.color = 'blue'
            btnactive()
        }
        else {
            cpassref.current.classList.remove('is-valid')
            cpassref.current.classList.add('is-invalid')
            let pass = document.getElementById('password')
            pass.innerHTML = "Password mismatched"
            pass.style.color = 'red'
            btninactive()
        }
    }
    const submit = (e) => {
        e.preventDefault()
        if (nameref.current.value === '' && passref.current.value === '') {
            nameref.current.classList.add('is-invalid')
            passref.current.classList.add('is-invalid')
            let required1 = document.getElementById('name')
            let required2 = document.getElementById('password')
            required1.innerHTML = 'Required'
            required1.style.color = 'red'
            required2.innerHTML = 'Required'
            required2.style.color = 'red'
        }
        if(nameref.current.value !== '' && passref.current.value !== '' && cpassref.current.value !== ''){
            alert("Login Successfully")
            window.location.reload();
        }
    }
    return (
        <div>
            <div className="container">
                <h1 className='text-center'>Login Form</h1>
                <div className="card card-position">
              
                <div className="icon-container">
                <IoPersonCircle className="user-icon"/>
                </div>
                    <form onSubmit={submit}>
                        <div className="form-group">


                            <label htmlFor="">Name</label>
                            <div className="form-group input-icon-container">
                            <FaUser className="icon input-icon" id="we"/>
                            <input type="text" onKeyUp={namecheck} ref={nameref} className="form-control icon-input"></input>
                            </div>
                            <p id="name"></p>

                            <div className="row">
                                <div className="col">
                                    <label htmlFor="">Password</label>
                                    <div className="form-group input-icon-container">
                                    <FaLock className="icon input-icon"/>
                                    <input type="password" onKeyUp={passwordcheck} ref={passref} className="form-control icon-input"></input>
                                    </div>
                                    <p id="password"></p>
                                </div>
                                <div className="col">
                               
                                    <label htmlFor="">Confirm Password</label>
                                    <div className="form-group input-icon-container">
                                    <FaLock className="icon input-icon"/>
                                    <input type="password" ref={cpassref} className="form-control icon-input"  onKeyUp={passmatch}></input>
                                </div>
                            </div>
                            
</div>
                            <div className="container">
                                <button className="btn button btn-outline-dark" ref={btnref}>Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Formvalidation;