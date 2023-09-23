import React, { useEffect, useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { updateCount } from '../../../rtk/cart/cartSlice';

function CartPoupap({ item }) {
    // eslint-disable-next-line no-use-before-define
    const [ count, setcount ] = useState(0);
    const dispatch = useDispatch();
    useEffect(() => {
        setcount(item.quantity);
    }, [ item.quantity ]);
    return (
        <div className=' cart'  >
            <span type="button" data-bs-toggle="modal" data-bs-target={ `#${item._id}` }>
                Update Count
            </span>


            <div className="modal fade text-primary " id={ `${item._id}` } tabIndex="-4" aria-labelledby={ `${item._id}cart` } aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-2 " id={ `${item._id}cart` }>Update</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <span className="modal-body text-center ">
                            {/* // eslint-disable-next-line no-const-assign */ }
                            <button className='mx-3 btn btn-outline-primary' onClick={ () => setcount(count + 1) } ><AiOutlinePlus /></button>
                            { count }
                            <button className='mx-3 btn btn-outline-primary' onClick={ () => setcount(count - 1) } ><AiOutlineMinus /></button>
                        </span>
                        <hr></hr>
                        <div className='modal-footer  text-center'>
                            <span data-bs-dismiss="modal" title="Save" type="button" className=' btn btn-primary m-1' onClick={ () => { dispatch(updateCount({ id: item._id, newCount: count })) } } >Save Change</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartPoupap;