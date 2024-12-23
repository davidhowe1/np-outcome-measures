import React from 'react'
import { useState } from 'react'

function Test({ om, updateTotals }) {

    const [score, setScore] = useState(null)
  
    const changeScore = (event) => {
      setScore(event.target.value)
      updateTotals(event.target.id, event.target.value)
    }

  return (
    <section className="outcome_measure">
      <div className="test">
        <section className="om_header">
        	<div>
            <span className='title_and_score'>
              <h2>{om.testNumber} . {om.title}</h2>
              <span className='current_om_score'>{score}</span>
            </span>
						<h3>{om.instructions ? `Instructions: ${om.instructions}` : ''}</h3>
          </div>
        </section>

        {Object.entries(om).map(([key, value]) => {
          if (key.startsWith('score')) {
            return (
              <span 
                className='om_option'
                key={key}
                onClick={() => {
                  const radioButton = document.getElementById(`${om.testNumber}-${key}`);
                  if (radioButton) radioButton.click()
                }}>  
                
                <input className='om_options'
                  type="radio"
                  id={`${om.testNumber}-${key}`}
                  name={`test-${om.testNumber}`}
                  value={value.score}
                  onChange={changeScore}
                />
                <label htmlFor={`test-${value.testNumber}-score`}>{value.description}</label>
              </span>
            )
          }
          return null
        })}
        </div>

      <div className="comments_box">
        <input className="comments" type="text" placeholder='Comments if applicable.'/>
      </div>
    </section>
  )
}

export default Test