import React from 'react'
import '../Component/Assets/Style/Contentbox.css'
import sunstone from '../Component/Assets/sunstone.svg'

const ContentBox = () => {
    return (
        <div>
            <div className='wellecome-div'>
                <h2 className='welcome-text'>Welcome back, Alex</h2>
            </div>
            <div className='main-content' style={{
                height: 'auto'
            }}>
                <div className='whole-content'>
                    <div className='question-answer-box'>
                    <h3 className='get-started'>Get Started</h3>
                        {/* <div className='question-answer'> */}
                            <p className='question-one'>What’s Sunstone?</p>
                            <p className='answer-one'>Our Services We offer a diverse range of services to meet the unique needs of our clients.
                                We provide comprehensive solutions that drive success.
                                Explore our services to find out how we can help you achieve your goals.</p>
                        {/* </div> */}
                        {/* <div className='question-answer'> */}
                            <p className='question-two'>How can I build production-ready apps on Sunstone?</p>
                            <p className='answer-two'>OOur Services We offer a diverse range of services to meet the unique needs of our clients. We provide comprehensive solutions that drive success.
                                Explore our services to find out how we can help you achieve your goals.</p>
                        {/* </div> */}
                        {/* <div className='question-answer'> */}
                            <p className='question-three'>Why should I use Sunstone?</p>
                            <p className='answer-three'>Our Services We offer a diverse range of services to meet the unique needs of our clients. We provide comprehensive solutions that drive success.
                                Explore our services to find out how we can help you achieve your goals.</p>
                        {/* </div> */}

                    </div>
                    <div className='sunstone-img'>
                        <img src={sunstone} alt='stone-img' className='STONE-IMG' />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ContentBox