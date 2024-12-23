import React from 'react'
import Test from './Test'

function TestList({ outcomeMeasures, updateTotals, total }) {
  return (
    outcomeMeasures.map(om => (
        <Test 
          om={om} 
          key={om.testNumber} 
          updateTotals={updateTotals}
        />
    ))
  )
}

export default TestList