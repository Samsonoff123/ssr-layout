import React from 'react'
// import img from '../images/Discover.png'

type Props = {}

export default function Custom404({}: Props) {
  return (
    <>
        <div className='banner' style={{background: 'url("/images/Discover.png")50% 50% no-repeat', marginBottom: '100px'}}>
            <div className="container">
                <h1>page not found</h1>
            </div>
        </div>
    </>

  )
}