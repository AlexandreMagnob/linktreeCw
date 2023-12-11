import React, { useState } from 'react'
import styles from '../styles/apply.module.css'
import { handleClientScriptLoad } from 'next/script'

const Apply = () => {
  const [category, setCategory] = useState('')
  const handleCategoryChange = (e) => {
    e.preventDefault();
    setCategory(e.target.value)
  }
  return (
    <section className={styles.background + " min-h-screen flex justify-center items-center" }>
      <div className='main'>
          <div className='content border-2 px-4 py-8 rounded-2x1 shadow-lg'>
              <h1 className='text-4xl font-bold text-center'>Junte-se aos 1% principais criadores</h1>
              <p className='text-center'>Crie Linktree para sua marca</p>
              <p className='text-center py-5 font-bold text-gray-500'>Comece a construir seu hub</p>
              <form className='flex flex-col gap-4 text-lg mt-5'>
                  <span className='flex flex-row shadow-md border-2 px-3 py-2 rounded-md focus:outline-none'>
                    <img className='w-6 mr-2' src='/svg/ig.svg'/>
                      <input className='focus:outline-none' type='name' placeholder='Identificador da Conta'/>
                  </span>
                  <input className='shadow-md border-2 px-3 py-2 rounded-md focus:outline-none' type='email' placeholder='Coloque seu email'/>
                  <input className='shadow-md border-2 px-3 py-2 rounded-md focus:outline-none' type='password' placeholder='Defina sua senha'/>
              
              <h5 className='text-sm text-center'>Tipo de Conta:</h5>
              <span className='flex'>
                <label>
                  <input type='checkbox' checked ={category=== 'Criador'} onChange={handleCategoryChange}/>
                  <p>Criador</p>
                </label>
                <label>
                  <input type='checkbox' checked ={category=== 'Agência'} onChange={handleCategoryChange}/>
                  <p>Agência</p>
                </label>
                <label>
                  <input type='checkbox' checked ={category=== 'Marca'} onChange={handleCategoryChange}/>
                  <p>Marca</p>
                </label>
              </span>
              </form>
          </div>
      </div>
    </section>
  )
}

export default Apply