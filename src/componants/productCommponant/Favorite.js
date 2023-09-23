import React, { useEffect, useState } from 'react';
import { AiFillHeart } from 'react-icons/ai';
import { PiHeartBreakFill } from 'react-icons/pi';
import '../../styleSheet/LCstore_css/favourite.css';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import ViewImg from './ViewImg';
import { useDispatch } from 'react-redux';
import { LIKE } from '../../rtk/favourite/favouriteSlice';
function Favorite() {

  const dispatch = useDispatch();
  const [ storage, setstorage ] = useState([]);



  useEffect(() => {
    if (localStorage.getItem('favourites')) {
      setstorage(JSON.parse(localStorage.getItem('favourites')));
    }

  }, []);


  const handelUNlike = (product) => {

    dispatch(LIKE(product));
setstorage(JSON.parse(localStorage.getItem('favourites')));
    
  };









  return (
    <div className='Favorite container'>
      <h1 className='text-center text-bg-success m-3'>Favorites items</h1>
      <table className="table container  ">
        <thead>
          <tr  >
            <th scope="col"><AiFillHeart style={ { color: "1f65e9" } } /></th>
            <th scope="col">Image</th>
            <th scope="col">Price</th>
            <th scope="col">Setting</th>
          </tr>
        </thead>
        <tbody>
          { storage && storage.map((product, index) => {
            return (
              <tr key={ product._id} >
                <th scope="row">{ index+1 }</th>
                <td className='img-favourite'><ViewImg product={ product } /></td>
                <td className='fw-bold text-success' >{ product.price }</td>
                <td className='lh-lg py-3' >
                  <div className='Unlike ' title='disLike' onClick={ () => handelUNlike(product) } >
                    <PiHeartBreakFill style={ { color: "1f65e9", fontSize: "24px" } } />
                  </div>
                  <div className='btn btn-outline-primary ' title='Go To Show Product'>
                    <Link to={ `/` }><FaSearch /></Link>
                  </div>
                </td>
              </tr>
            );
          }) }


        </tbody>
      </table>



    </div>
  );
}

export default Favorite;