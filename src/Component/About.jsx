import React from 'react'
import AboutData from './AboutData'


const About = () => {
    return (
        <>
            <div className="container">
                <div className="accordion" id="accordionExample">

                {AboutData.map(item => {
                    <>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingOne">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                {item.title}
                            </button>
                            </h2>
                            <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                            <p>{item.disc}</p>
                            </div>
                            </div>
                        </div>            
                    </>
                })};
                </div>
            </div>    


            
        </>
    )
}

export default About
