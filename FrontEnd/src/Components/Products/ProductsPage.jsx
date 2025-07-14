import React, { useEffect, useState } from 'react'
import MensFashion from './MensFashion';
import WomensFashio from './WomensFashio';
import KidsFashion from './KidsFashion';
import Shose from './Shose';
import Electronics from './Electronics';

function ProductsPage() {


    return (

        <>

            <MensFashion />
            <WomensFashio />
            <KidsFashion />
            <Shose />
            <Electronics />


        </>
    );

}

export default ProductsPage
