import React, { useState } from 'react'
import styles from '../styles/apply.module.css'
import { handleClientScriptLoad } from 'next/script'
import { toast } from 'react-toastify'

const Apply = () => {
  const [category, setCategory] = useState('')
  const handleCategoryChange = (e) => {
    setCategory(e.target.value)
  }
  const handleRegister = (e) => {
    e.preventDefault();
    if(!category) return toast.error();("Por favor escolha uma categoria ")
    //call backend
    toast("Você foi cadastrado com sucesso")
  }
  
  return (
    <section className={styles.background + " min-h-screen flex justify-center items-center" }>
      <div className='main'>
          <div className='content border-2 px-3 py-8 rounded-3xl shadow-lg bg-white'>
              <h1 className='text-xl font-bold text-center'>Junte-se aos principais criadores</h1>
              <p className='text-center'>Crie Linktree para sua marca</p>
              <p className='text-center py-5 font-bold text-gray-500'>Comece a construir seu hub</p>
              <form onSubmit={handleRegister} className='flex flex-col gap-4 text-lg mt-5'>
                  <span className='flex flex-row shadow-md border-2 px-3 py-2 rounded-md focus:outline-none'>
                    <img className='w-6 mr-2' src='/svg/ig.svg'/>
                      <input className='focus:outline-none' type='name' placeholder='Identificador da Conta' required/>
                  </span>
                  <input className='shadow-md border-2 px-3 py-2 rounded-md focus:outline-none' type='email' placeholder='Coloque seu email' required/>
                  <input className='shadow-md border-2 px-3 py-2 rounded-md focus:outline-none' type='password' placeholder='Defina sua senha' required/>
              
              <h5 className='text-sm text-center text-indigo-400'>Tipo de Conta:</h5>
              <span className='flex'>
                <label  className='flex flex-row mr-2 ml-3'>
                  <input type='checkbox' value='Criador' checked ={category=== 'Criador'} onChange={handleCategoryChange}/>
                  <p  className='pl-3'>Criador</p>
                </label>
                <label  className='flex flex-row mr-2 ml-3'>
                  <input type='checkbox' value='Agência' checked ={category=== 'Agência'} onChange={handleCategoryChange}/>
                  <p  className='pl-3'>Agência</p>
                </label>
                <label  className='flex flex-row mr-2 ml-3'>
                  <input type='checkbox' value='Marca' checked ={category=== 'Marca'} onChange={handleCategoryChange}/>
                  <p  className='pl-3'>Marca</p>
                </label>
              </span>

              <input className='bg-indigo-600 text-white py-2 rounded-lg cursor-pointer' type='submit' value='Aplicar'/>

              </form>
          </div>
      </div>
    </section>
  )
}

export default Apply