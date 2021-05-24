import React, { useState } from 'react'
import './AuthPage.scss'

import axios from 'axios'

import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'

function AuthPage() {

    const [form, setForm] = useState({
        email: '',
        password: ''
    })

    const changeHandler = (e) => {
        setForm({
            ...form, [e.target.name]: e.target.value
        })
        console.log(form)
    }

    const registerHandler = async () => {
        try {
            await axios.post('/api/auth/registration',
                {...form}, {
                    headers: {'Content-Type': 'application/json'}
                }
            )
                .then(res => console.log(res))
        }
        catch (err) {
            console.log(err)
        }
    }

    return (
        <BrowserRouter>
            <Switch>
                <>
                    <div className='container'>
                        <div className='auth-page'>
                            <Route path='/login'>
                                <h3>Авторизация</h3>
                                <form className='form form-login' onSubmit={e => e.preventDefault()}>
                                    <div className='row'>
                                        <div className='input-field col s12'>
                                            <input
                                                type='email'
                                                name='email'
                                                className='validate'
                                                onChange={changeHandler}
                                            />
                                            <label htmlFor='email'>Email</label>
                                        </div>
                                        <div className='input-field col s12'>
                                            <input
                                                type='password'
                                                name='password'
                                                className='validate'
                                                onChange={changeHandler}
                                            />
                                            <label htmlFor='email'>Пароль</label>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <button
                                            className='wawes-effect wawes-light btn btn blue'
                                        > Войти
                                        </button>
                                        <Link to='/registration' className='btn-outline btn-reg'>Нет аккаунта ?</Link>
                                    </div>
                                </form>
                            </Route>


                            <Route path='/registration'>
                                <h3>Регистрация</h3>
                                <form className='form form-login' onSubmit={e => e.preventDefault()}>
                                    <div className='row'>
                                        <div className='input-field col s12'>
                                            <input
                                                type='email'
                                                name='email'
                                                className='validate'
                                                onChange={changeHandler}
                                            />
                                            <label htmlFor='email'>Email</label>
                                        </div>
                                        <div className='input-field col s12'>
                                            <input
                                                type='password'
                                                name='password'
                                                className='validate'
                                                onChange={changeHandler}
                                            />
                                            <label htmlFor='email'>Пароль</label>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <button
                                            className='wawes-effect wawes-light btn btn blue'
                                            onClick={registerHandler}
                                        > Регистрация
                                        </button>
                                        <Link to='/login' className='btn-outline btn-reg'>Уже есть аккаунт ?</Link>
                                    </div>
                                </form>
                            </Route>


                        </div>
                    </div>
                </>
            </Switch>
        </BrowserRouter>
    )
}

export default AuthPage