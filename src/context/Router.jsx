import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../Home'
import Form from '../pages/Form'


const Router = () => {
    return (
        <>
            <Routes>
                <Route path='/home' element={<Home />} />
                <Route path='/form' element={<Form />} />
                <Route path='/' element={<Home />} />
            </Routes>

        </>
    )
}

export default Router