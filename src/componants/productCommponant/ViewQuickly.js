import React from 'react';
function ViewQuickly({ product }) {

    return (
        <div className='Quickly'>
            <span type="button" data-bs-toggle="modal" data-bs-target={ `#${product._id}viewQuickly`}>
                View Quickly
            </span>

            <div className="modal fade" id={ `${product._id}viewQuickly` } tabIndex="1079" aria-labelledby={ `${product._id}viewQuickly` } aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id={ `${product._id}viewQuickly` }>product modal</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div id={ `${product._id}indicators` } className="carousel slide">
                                <div className="carousel-indicators">
                                    { Object.keys(product.images).map(key => {
                                        if (key === '0') {

                                            return <button key={ Math.random() } type="button" data-bs-target={ `#${product._id}indicators` } data-bs-slide-to={ key } aria-label={ `Slide ${key}` } className="active btn-items" aria-current="true">
                                                <img src={ product.images[ key ] } alt='...' />
                                            </button>;
                                        } else {

                                            return <button key={ Math.random() } className='btn-items' type="button" data-bs-target={ `#${product._id}indicators` } data-bs-slide-to={ key } aria-label={ `Slide ${key}` }>
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
                                <button className="carousel-control-prev " type="button" data-bs-target={ `#${product._id}indicators` } data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon bg-secondary rounded-circle" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target={ `#${product._id}indicators` } data-bs-slide="next">
                                    <span className="carousel-control-next-icon bg-secondary rounded-circle" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>

                            <div className='descripe   my-3 overflow-scroll row w' style={ { "backgroundColor": "aliceblue" } }>
                                {/* return key of obj as new array and mapping */ }
                                { Object.keys(product).map((keys) => {
                                    if (keys !== 'images' & keys !== '_id' && keys !== 'image') {

                                        return (

                                            <div key={ Math.random() } className={ `${keys} my-3  col-12` } >
                                                <span className='key text-primary me-2 h5'>{ keys }:</span>
                                                <span className='value text-secondary p'>{ `${product[ `${keys}` ]} ` }</span>
                                                <hr />
                                            </div>

                                        );
                                    } else {
                                        return null
                                    }
                                }) }
                            </div>



                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ViewQuickly;