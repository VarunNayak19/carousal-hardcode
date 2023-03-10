import React from 'react'
import { Link } from 'react-router-dom'
import "./carousal.css"
const Carousal = ({ activeIndex, data }) => {


    return (
        <>
            <section className='scrollinmg'>
                {data.map((slide, index) => (
                    <div
                        key={index}
                        className={index === activeIndex ? "slides active" : "inactive"}
                        style={{ backgroundColor: `${slide.bg}` }}

                    >
                        <h2 className="slide-title">{slide.title}</h2>
                        <Link to={slide.url}>

                            <h3 className="slide-text">{slide.desc}</h3>
                        </Link>
                    </div>
                ))}
            </section>
        </>
    )
}

export default Carousal
