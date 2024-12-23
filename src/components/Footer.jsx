import React, { useState, useEffect } from 'react'

function Footer({ total, scoreMaximum }) {

  const [maxScore, setMaxScore]= useState('')

  const handleScoreMaximum = (test) => {
    if (test === 'pass') setMaxScore(36)
    else if (test === 'berg') setMaxScore(56)
    else if (test === 'dgi') setMaxScore(24)
  }

  useEffect(() => {
    handleScoreMaximum(scoreMaximum)
  }, [maxScore])

  return (
    <div>
      
      <h2>Total: {total} / {maxScore}</h2>

      <section className='outcome_measure_footer'>
        <div className='field name'>
        <label>PT/A Name/s:</label>
        <input type="text" />
        </div>

        <div className='field date'>
        <label>Date:</label>
        <input type="text" />
        </div>
      </section>
    </div>
  )
}

export default Footer