import React from 'react';
import { Link } from 'react-router-dom';
import '../css/bazar.css'

export default function Bazar() {
    return (
        <>
        <div className="">
            <section id="b-section-1" >
                <img src={require("../images/clouds.png")} alt="cloud" className="clouds-animation clouds-animation-1" />
                <img src={require("../images/clouds.png")} alt="cloud" className="clouds-animation clouds-animation-2" />
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6" >
                            <h1 id='caption-bazar' >Fresh! Straight from the farms to your door</h1>
                            <img id='tea-plant' src={require("../images/Tea_plant.png")} alt="cloud" />
                        </div>
                        <div className="col-lg-6">
                            <img id='farmer-img' src={require("../images/title-img/farmer.png")} alt="farmer " />
                        </div>
                    </div>
                </div>
            </section>
            <section id="b-section-2" >
                <div id='bazar-box-container'>
                    <h1 id="featured">Featured</h1>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-sm-12 card-center" >
                                <div className="card" >
                                    <img className="card-img-top" src={require("../images/crops images/Screenshot_37.png")} alt="card cap" width="100%; height:6rem;" />
                                    <div className="card-body">
                                        <h5 className="card-title">FOOD CROPS</h5>
                                        <Link to="/" className="btn btn-outline-success">Buy Now</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-sm-12 discription-center" >
                                <h1 className='heading-caption'>Food Crops</h1>
                                <p className='discription-caption'>The term "food crops" refers to the world's major food supply derived from plants; a crop assumes human intervention through agriculture. In the main, food crops consist of grains, legumes (including dried beans), seeds and nuts, vegetables, fruit, herbs and spices, beverage plants such as tea and coffee, and so forth.</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 col-sm-12 discription-center" >
                                <h1 className='heading-caption' >Feed Crops</h1>
                                <p className='discription-caption'>Feed crops, such as oats and alfalfa, are harvested for livestock consumption. These crops contain nutrients that animals need to develop. They are grown in agricultural fields but can also be found in natural meadows and pastures.</p>
                            </div>
                            <div className="col-lg-6 col-sm-12 card-center">
                                <div className="card">
                                    <img className="card-img-top" src={require("../images/crops images/image1-2-2-1200x853.jpg")} alt="card cap" />
                                    <div className="card-body">
                                        <h5 className="card-title">FEED CROPS</h5>
                                        <Link to="/" className="btn btn-outline-success">Buy Now</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 col-sm-12 card-center" >
                                <div className="card" >
                                    <img className="card-img-top" src={require("../images/crops images/fibercrops.jpg")} alt="card cap" width="100%; height:6rem;" />
                                    <div className="card-body">
                                        <h5 className="card-title">FIBER CROPS</h5>
                                        <Link to="/" className="btn btn-outline-success">Buy Now</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-sm-12 discription-center" >
                                <h1 className='heading-caption'>Fiber Crops</h1>
                                <p className='discription-caption'>Fiber crops are plants that are deliberately grown for the production of fiber for textile (clothes), cordage (e.g., ropes), and filling (e.g., stuffing upholstery and mattresses). Cotton, jute, kenaf, industrial hemp, sun hemp, and flax are among the well-known fiber crops.</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 col-sm-12 discription-center" >
                                <h1 className='heading-caption'>Oil Crops</h1>
                                <p className='discription-caption'>Oilseed crops are grown for the purpose of extraction of oil, which is contained in their seeds. Oil content of different oilseed crops varies from 20% for soybean to 40% of sunflowers etc. Seed oils are used for industrial as well as edible purposes.</p>
                            </div>
                            <div className="col-lg-6 col-sm-12 card-center" >
                                <div className="card" >
                                    <img className="card-img-top" src={require('../images/crops images/oil crops.jpg')} alt="card cap" width="100%; height:6rem;" />
                                    <div className="card-body">
                                        <h5 className="card-title">OIL CROPS</h5>
                                        <Link to="/" className="btn btn-outline-success">Buy Now</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 col-sm-12 card-center" >
                                <div className="card" >
                                    <img className="card-img-top" src={require("../images/crops images/fibercrops.jpg")} alt="card cap" width="100%; height:6rem;" />
                                    <div className="card-body">
                                        <h5 className="card-title">INDUSTRIAL CROPS</h5>
                                        <Link to="/" className="btn btn-outline-success">Buy Now</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-sm-12 discription-center" >
                                <h1 className='heading-caption'>Industrial Crops</h1>
                                <p className='discription-caption'>Industrial crops provide oils, fiber, or chemicals from leaves, seeds, bark, or roots for income or on-farm use. Plants in our collection are used for edible oil, confection, forage, fiber, fuel oil, or as a pesticide.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </>
  )
}
