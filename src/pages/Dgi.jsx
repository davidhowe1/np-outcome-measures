import React from 'react'
import totals from '../data/outcomeMeasureTotals'
import { useState } from 'react'
import dgiTests from '../data/dgi'
import Header from '../components/Header'
import TestList from '../components/TestList'
import Footer from '../components/Footer'

function Dgi() {

  const [grandTotals, setGrandTotals] = useState(totals)

  const outcomeMeasures = dgiTests
  const title = 'D.G.I (Dynamic Gait Index)'
  
  const updateTotals = (test, score) => {
    const updatedScore = grandTotals.find(item => item.testNumber === parseInt(test))
    if (updatedScore) updatedScore.total = parseInt(score)
    else console.log("Test not found")
    setGrandTotals(grandTotals)
    calculateTotals()
  }

  const [total, setTotal] = useState()

  const calculateTotals = () => {
    let sum = 0
    grandTotals.forEach(total => {
      sum += total.total
    })
    setTotal(sum)
  }

  return (
    <>
      <Header title={title} />
      <TestList 
        outcomeMeasures={outcomeMeasures} 
        updateTotals={updateTotals}/>
      <Footer total={total} scoreMaximum={'dgi'}/>
    </>
  )
}

export default Dgi