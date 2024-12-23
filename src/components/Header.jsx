import React from 'react'

function Header({ title, instructions }) {
  return (
    <>
      <header>
        <h1>{title}</h1>
        <h2>{instructions ? instructions : ''}</h2>
      </header>

      <section className='outcome_measure_details'>
        <div className='field name'>
          <label>Name:</label>
          <input type="text" />
        </div>

        <div className='field date'>
          <label>Date:</label>
          <input type="text" />
        </div>
      </section>
    </>
  )
}

export default Header