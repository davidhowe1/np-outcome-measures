import React from 'react'
import { Link } from 'react-router'

function Home() {
  return (
    <>
      <div>
        <h1>NP outcome measures</h1>
      </div>

      <section className='om_container'>
        <Link to={`/pass`}>
          <span id='pass_link'>{`PASS (Postural Assessment Scale for Stroke)`}</span>
        </Link>

        <Link to={`/berg`}>
          <span id='berg_link'>{`BERG Balance Scale`}</span>
        </Link>

        <Link to={`/dgi`}>
          <span id='dgi_link'>{`DGI (Dynamic Gait Index)`}</span>
        </Link>

        <Link to={`/panda`}>
          <span id='panda_link'>PANDA</span>
        </Link>
      </section>
    </>
  )
}

export default Home