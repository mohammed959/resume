import React from 'react'
import "./imageComponent.css"
import Image from '../ImageComponent/image.jpeg'
import Image2 from './image2.jpeg'
import Image3 from './image3.jpeg'
import Image4 from './image4.jpeg'
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline, SplitLetters } from 'react-gsap';

const styles = {
    transition: 'all 2s ease-in'
}
export default class ImageComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isHovered1: true,
            displayContent: 'inline',
            displayContent2: 'none',
            opacity: 1,
            scale: 1,
            scale2: 1,
            scale3: 1,

        }
    }
    handleEnter = (value) => {
        if (value === 1) {
            this.setState({
                scale: 1.07
            })
        } else if (value === 2) {
            this.setState({
                scale2: 1.07
            })
        } else if (value === 3) {
            this.setState({
                scale3: 1.07
            })
        }

    }
    handleLeave = (value) => {
        if (value === 1) {
            this.setState({
                scale: 1
            })
        } else if (value === 2) {
            this.setState({
                scale2: 1
            })
        } else if (value === 3) {
            this.setState({
                scale3: 1
            })
        }


    }


    render() {

        return (
            <div className="">


                <div className="container-fluid main" style={{ backgroundColor: '', }}>
                    <div className="row image1">
                        <div className="col-lg-6 col-xl-6 col-md-12 col-sm-12 col-xs-12 " >
                            <img src={Image} className="image" />


                        </div>

                        <div className="col-lg-6 col-xl-6 col-md-12 col-sm-12 col-xs-12" style={{ marginTop: '80px' }}>
                            <strong className="e" style={{ display: 'block', color: 'white' }}>Mohammed Nasser Abdullah Awadh</strong>
                            <span style={{ marginTop: '10px', display: 'block', color: 'white' }} className="">Front End Developer at Hads_</span>
                            <div style={{ border: '1px solid lightgrey', marginTop: '30px' }}></div>

                            <div className="lists" style={{ marginTop: '70px', display: 'grid', gridTemplateColumns: 'auto', justifyContent: 'flex-start' }}>



                                <i class="fa fa-envelope-o" style={{ fontSize: '20px', float: 'left', marginRight: '180px', color: 'white' }}> <p style={{ marginLeft: '7px', display: 'inline', fontSize: 16 }}>maldoedr@gmail.com</p></i>


                                <i class="fa fa-phone" style={{ fontSize: '20px', float: 'left', marginTop: '40px', marginRight: '230px', color: 'white' }}><p style={{ marginLeft: '10px', display: 'inline', fontSize: 16 }}>+966538986092</p></i>

                                <i class="fa fa-linkedin" style={{ fontSize: '20px', marginTop: '40px', marginRight: '40px', color: 'white' }}><p style={{ marginLeft: '10px', display: 'inline', fontSize: 16 }}>www.linkedin.com/in/mohammed-alsoedr24</p></i>

                                <i class="fa fa-github" style={{ fontSize: '20px', marginTop: '40px', marginRight: '155px', color: 'white' }}><p style={{ marginLeft: '10px', display: 'inline', fontSize: 16 }}>github.com/mohammed959</p></i>



                            </div>
                        </div>


                    </div>

                </div>

                <div className="container-fluid main2" style={{ backgroundColor: '', }}>
                    <div className="row image1" style={{}}>
                        <div className="col-lg-6 col-xl-6 col-md-12 col-sm-12 col-xs-12 " style={{}} >
                            <div className="projectDiv" >
                                <strong style={{ fontSize: '27px', color: 'white', fontWeight: 'bolder', fontFamily: 'sans-serif' }}>PROJECTS</strong>
                                <div style={{ ...styles, opacity: this.state.opacity, transform: 'scale(' + this.state.scale + ')' }} onMouseEnter={() => this.handleEnter(1)} onMouseLeave={() => this.handleLeave(1)}>
                                    <p style={{ marginTop: '30px', color: 'white', fontSize: '25px', fontFamily: 'Gill Sans' }}> - Brain Controlled Smart Home (2019):
                                <span style={{ display: 'block', marginTop: '20px', fontSize: '18px', fontFamily: 'serif' }}>system that enables users control devices by only thinking</span>
                                        <span style={{ display: 'block', marginTop: '10px', fontSize: '18px', fontFamily: 'serif' }}>BCI headset transmits the brain signals to an Android Application </span>
                                        <span style={{ display: 'block', marginTop: '10px', fontSize: '18px', fontFamily: 'serif' }}>Users can let others cotrol devices by sharing link </span>
                                    </p>
                                </div>
                                <div style={{ marginTop: '100px', ...styles, transform: 'scale(' + this.state.scale2 + ')' }} onMouseEnter={() => this.handleEnter(2)} onMouseLeave={() => this.handleLeave(2)}>
                                    <p className="paragraph2" style={{ marginTop: '30px', color: 'white', fontSize: '25px', fontFamily: 'Gill Sans' }}> - Halaqat Quran Management System (2017):
                                <span style={{ display: 'block', marginTop: '20px', fontSize: '18px', fontFamily: 'serif' }}>Implemented to help teachers track their studnets grads'</span>
                                        <span style={{ display: 'block', marginTop: '20px', fontSize: '18px', fontFamily: 'serif' }}>Servlet to implements APIs</span>

                                    </p>

                                </div>



                                <div>

                                </div>
                            </div>


                        </div>

                        <div className="col-lg-6 col-xl-6 col-md-12 col-sm-12 col-xs-12 bigdiv" style={{}}>
                            <div className="projectDiv1" style={{}}>
                                <div style={{ ...styles, transform: 'scale(' + this.state.scale3 + ')' }} onMouseEnter={() => this.handleEnter(3)} onMouseLeave={() => this.handleLeave(3)}>
                                    <p style={{ marginTop: '30px', color: 'white', fontSize: '25px', fontFamily: 'Gill Sans' }}> - Auto Parts Management System (2018):
                                <span style={{ display: 'block', marginTop: '20px', fontSize: '18px', fontFamily: 'serif' }}>An application that serves multiple users</span>
                                        <span style={{ display: 'block', marginTop: '10px', fontSize: '18px', fontFamily: 'serif' }}>Developer for users to make buying spare parts throught internet simple</span>
                                        <span style={{ display: 'block', marginTop: '10px', fontSize: '18px', fontFamily: 'serif' }}>Developend by pure HTML, CSS, JavaScript and MySQL</span>
                                    </p>


                                </div>


                                <div>

                                </div>
                            </div>

                        </div>


                    </div>

                </div>



                <div className="fourthContainer">
                    <Controller>
                        <Scene
                            triggerHook="onLeave"
                            duration="300%"
                            pin
                        >
                            <Timeline
                                wrapper={<div id="pinContainer" />}
                            >
                                <section className="panel blue">
                                    <div style={{}}>
                                        <div style={{ marginTop: '120px' }}>
                                            <div className="container-fluid" style={{ backgroundColor: '', }}>
                                                <div className="row" style={{}}>
                                                    <div className="col-lg-6 col-xl-6 col-md-12 col-sm-12 col-xs-12 " style={{}} >
                                                        <div className="projectDiv2" >
                                                            <strong style={{ fontSize: '27px', color: 'white', fontWeight: 'bolder', fontFamily: 'sans-serif' }}>ACHIEVEMENTS</strong>
                                                            <div style={{marginTop:'100px'}}>
                                                                <p style={{ marginTop: '30px', color: 'white', fontSize: '25px', fontFamily: 'Gill Sans' }}> - Best Graduation Project at Imam Mohammed Bin Saud Islamic University</p>
                                                            </div>

                                                        </div>


                                                    </div>

                                                    <div className="col-lg-6 col-xl-6 col-md-12 col-sm-12 col-xs-12 bigdiv" style={{}}>
                                                        <div className="projectDiv2" style={{}}>
                                                            <div>
                                                                <img src={Image2} className="graduationImage" style={{ ...styles, opacity: this.state.opacity, transform: 'scale(' + this.state.scale + ')' }} onMouseEnter={() => this.handleEnter(1)} onMouseLeave={() => this.handleLeave(1)} />
                                                            </div>

                                                        </div>

                                                    </div>


                                                </div>

                                            </div>


                                        </div>

                                    </div>
                                </section>
                                <Tween
                                    from={{ x: '-100%' }}
                                    to={{ x: '0%' }}
                                >
                                    <section className="panel turqoise">
                                        <div style={{}}>
                                            <div style={{ marginTop: '120px' }}>
                                            <div style={{ marginTop: '120px' }}>
                                            <div className="container-fluid" style={{ backgroundColor: '', }}>
                                                <div className="row" style={{}}>
                                                    <div className="col-lg-6 col-xl-6 col-md-12 col-sm-12 col-xs-12 " style={{}} >
                                                        <div className="projectDiv2" >
                                                            <strong style={{ fontSize: '27px', color: 'white', fontWeight: 'bolder', fontFamily: 'sans-serif' }}>ACHIEVEMENTS</strong>
                                                            <div style={{marginTop:'100px'}}>
                                                                <p style={{ marginTop: '30px', color: 'white', fontSize: '25px', fontFamily: 'Gill Sans' }}> - Best Graduation Project at Imam Mohammed Bin Saud Islamic University</p>
                                                            </div>

                                                        </div>


                                                    </div>

                                                    <div className="col-lg-6 col-xl-6 col-md-12 col-sm-12 col-xs-12 bigdiv" style={{}}>
                                                        <div className="projectDiv2" style={{}}>
                                                            <div>
                                                                <img src={Image3} className="graduationImage" />
                                                            </div>

                                                        </div>

                                                    </div>


                                                </div>

                                            </div>


                                        </div>

                                            </div>

                                        </div>

                                    </section>
                                </Tween>
                                <Tween
                                    from={{ x: '100%' }}
                                    to={{ x: '0%' }}
                                >
                                    <section className="panel green">
                                        <div style={{}}>
                                            <div style={{ marginTop: '120px' }}>


                                            </div>

                                        </div>
                                    </section>
                                </Tween>
                                {/* <Tween
                                    from={{ y: '-100%' }}
                                    to={{ y: '0%' }}
                                >
                                    <section className="panel bordeaux"> <div style={{display:'grid',gridTemplateColumns:'auto auto',gridGap:'10px',marginTop:'200px'}}>
                                        <div style={{marginTop:'120px'}}>
                                            <p style={{fontSize:'25px',color:'black'}}>"Best Graduation Project 2019"</p>
                                           
                                        </div>
                                        <div>
                                        <img src={Image2}  className="celimage"/>
                                        </div>
                                    </div>
                                    </section>
                                </Tween> */}
                            </Timeline>
                        </Scene>
                    </Controller>

                </div>



            </div>
        )
    }

}