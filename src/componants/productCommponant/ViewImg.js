import React from 'react';

function ViewImg({ product }) {
    return (
        <>
            <img src={product.images[0]} alt='...' type="button" data-bs-toggle="modal" data-bs-target="#imageModaal"  className='img img-fluid' style={{maxHeight:"100px"}}/>

            <div className="modal fade" id="imageModaal" tabIndex="1" aria-labelledby="imageModaalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="imageModaalLabel">product modal</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div id="carouselExampleIndicators" className="carousel slide">
                                <div className="carousel-indicators">
                                    { Object.keys(product.images).map(key => {
                                        if (key === '0') {

                                            return <button key={ Math.random() } type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={ key } aria-label={ `Slide ${key}` } className="active btn-items" aria-current="true">
                                                <img src={ product.images[ key ] } alt='...' />
                                            </button>;
                                        } else {

                                            return <button key={ Math.random() } className='btn-items' type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={ key } aria-label={ `Slide ${key}` }>
                                                <img className=' img img-fluid ' src={ product.images[ key ] } alt='...' />
                                            </button>;
                                        }
                                    }) }
                                </div>
                                <div className="carousel-inner">
                                    { product.images.map(img => {
                                        if (img === product.images[ 0 ]) {
                                            return (
                                                <div key={ Math.random() } className="carousel-item active">
                                                    <img src={ img } className="d-block w-100" alt="..." />
                                                </div>
                                            );
                                        } else {
                                            return (
                                                <div key={ Math.random() } className="carousel-item">
                                                    <img src={ img } className="d-block w-100" alt="..." />
                                                </div>
                                            );
                                        }
                                    }) }

                                </div>
                                <button className="carousel-control-prev " type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon bg-secondary rounded-circle" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                    <span className="carousel-control-next-icon bg-secondary rounded-circle" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>



                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default ViewImg;