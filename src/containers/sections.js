import React from 'react'
import HeroSection from '../sections/hero'
import ProductsSection from '../sections/products'
import SolutionsSection from '../sections/solutions'
import CareersSection from '../sections/careers'
import FooterSection from '../sections/footer'
import { Divider } from '../components/divider'

const Sections = () => {
    return (
        <>
            {/* Landing */}
            <HeroSection id="home" />

            {/* Main products */}
            <ProductsSection id="products" />

            {/* Technologies backing the main products */}
            <SolutionsSection id="solutions" />

            <Divider bg="white" />

            {/* Jobs! */}
            <CareersSection id="careers" />

            {/* Web footer */}
            <FooterSection id="footer" />
        </>
    )
}

export default Sections
