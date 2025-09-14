import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './PetCard.css';
import { Link } from 'react-router-dom';
export const PetCard = ()=>{
    return(
    <>
    
    <div >
        <h1 className='text-center text-success my-5' id="pet-info"> Pets Information </h1>
        <div className = "row" id="card">
            <div className='col-md-3'>
                <div class="card" >
                            <img src="https://images.pexels.com/photos/164186/pexels-photo-164186.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Name ~ Bear</h5>
                                <p class="card-text">Gender ~ Female</p>
                                <Link to="/adopt">
                                    <button className = "btn btn-primary"> Adopt</button>
                                </Link>
                            </div>
                </div>



            </div>

                <div className='col-md-3'>
                        <div class="card" >
                            <img src="https://images.pexels.com/photos/257519/pexels-photo-257519.jpeg?auto=compress&cs=tinysrgb&w=1600" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Name ~ Bailey </h5>
                                <p class="card-text">Gender ~ Female</p>
                                {/* {/* <Link to ='/adopt' className = 'btn btn-primary' > 
                                   <button> Adopt </button> 
                                </Link> */}
                                 <Link to="/adopt">
                                    <button className = "btn btn-primary"> Adopt</button>
                                </Link>
                                {/* <a href="#" class="btn btn-primary"> Adopt </a> */}
                            </div>
                        </div>
                </div>

                <div className='col-md-3'>
                    <div class="card" >
                            <img src="https://images.pexels.com/photos/59523/pexels-photo-59523.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Name ~ Cooper</h5>
                                <p class="card-text">Gender ~ Male</p>
                                <Link to="/adopt">
                                    <button className = "btn btn-primary"> Adopt</button>
                                </Link>
                            </div>
                </div>



                </div>

                <div className='col-md-3'>
                        <div class="card" >
                            <img src="https://images.pexels.com/photos/1562983/pexels-photo-1562983.jpeg?auto=compress&cs=tinysrgb&w=1600" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Name ~ Daisy </h5>
                                <p class="card-text">Gender ~ Female</p>
                                <Link to="/adopt">
                                    <button className = "btn btn-primary"> Adopt</button>
                                </Link>
                            </div>
                        </div>
                </div>
               
                <div className='col-md-3'>
                        <div class="card" >
                            <img src="https://images.pexels.com/photos/59965/dog-young-dog-puppy-59965.jpeg?auto=compress&cs=tinysrgb&w=1600" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Name ~ Daisy </h5>
                                <p class="card-text">Gender ~ Female</p>
                                <Link to="/adopt">
                                    <button className = "btn btn-primary"> Adopt</button>
                                </Link>
                            </div>
                        </div>
                </div>

                <div className='col-md-3'>
                        <div class="card" >
                            <img src="https://images.pexels.com/photos/128817/pexels-photo-128817.jpeg?auto=compress&cs=tinysrgb&w=1600" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Name ~ Daisy </h5>
                                <p class="card-text">Gender ~ Female</p>
                                <Link to="/adopt">
                                    <button className = "btn btn-primary"> Adopt</button>
                                </Link>
                            </div>
                        </div>
                </div>

                <div className='col-md-3'>
                        <div class="card" >
                            <img src="https://images.pexels.com/photos/92380/pexels-photo-92380.jpeg?auto=compress&cs=tinysrgb&w=1600" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Name ~ Daisy </h5>
                                <p class="card-text">Gender ~ Female</p>
                                <Link to="/adopt">
                                    <button className = "btn btn-primary"> Adopt</button>
                                </Link>
                            </div>
                        </div>
                </div>

                <div className='col-md-3'>
                        <div class="card" >
                            <img src="https://images.pexels.com/photos/1719626/pexels-photo-1719626.jpeg?auto=compress&cs=tinysrgb&w=1600" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Name ~ Daisy </h5>
                                <p class="card-text">Gender ~ Female</p>
                                <Link to="/adopt">
                                    <button className = "btn btn-primary"> Adopt</button>
                                </Link>
                            </div>
                        </div>
                </div>
                <p> </p>
                <button type="button" class="btn btn-info">More Pets...</button>
        </div>
    </div>
    </>
    );
}

