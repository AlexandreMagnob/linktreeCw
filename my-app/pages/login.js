import React, { useState } from 'react'
import styles from '../styles/apply.module.css'
import { handleClientScriptLoad } from 'next/script'
import { toast } from 'react-toastify'

const Login = () => {
  
  const handleLogin = (e) => {
    e.preventDefault();
    if(!category) return toast.error("Por favor escolha uma categoria ")
    toast("Você foi cadastrado com sucesso")
  }
  
  return (
    <section className={styles.background + " min-h-screen flex justify-center items-center" }>
      <div className='main'>
          <div className='content border-2 px-3 py-8 rounded-3xl shadow-lg bg-white'>
              <h1 className='text-xl font-bold text-center'>Você agora está entre os principais criadores</h1>
              <p className='text-center'>Acesse seu Painel</p>
              <p className='text-center py-5 font-bold text-gray-500'>Comece a construir seu hub</p>
              <form onSubmit={handleLogin} className='flex flex-col gap-4 text-lg mt-5'>
                  <span className='flex flex-row shadow-md border-2 px-3 py-2 rounded-md focus:outline-none'>
                    <img className='w-6 mr-2' src='/svg/ig.svg'/>
                      <input className='focus:outline-none' type='email' placeholder='Coloque seu email' required/>
                  </span>
                  <input className='shadow-md border-2 px-3 py-2 rounded-md focus:outline-none' type='password' placeholder='Defina sua senha' required/>
              <input className='bg-indigo-600 text-white py-2 rounded-lg cursor-pointer' type='submit' value='Aplicar'/>
              </form>
              <h4>Novo por aqui</h4>
          </div>
      </div>
    </section>
  )
}

export default Login