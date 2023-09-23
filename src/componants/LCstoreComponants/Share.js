import React from 'react';
import '../../styleSheet/share.css';
import { FacebookShareButton, EmailShareButton, TwitterShareButton, WhatsappShareButton, TelegramShareButton, LinkedinShareButton, FacebookMessengerShareButton } from 'react-share';
import { EmailIcon, FacebookIcon, FacebookMessengerIcon, LinkedinIcon, TelegramIcon, TwitterIcon, WhatsappIcon } from "react-share";
import { FaShare } from 'react-icons/fa'

function Share(props) {
    const shareUrl = typeof window !== 'undefined' ? `${window.location.href}/${props.product._id}` : '';
    const title = typeof document !== 'undefined' ? document.title : 'Check out this awesome content!';
    const handelCopy = (itemLink) => {
        navigator.clipboard.writeText(itemLink);
    };
    return (




        <>
            <div className=' share '  >
                <span type="button" data-bs-toggle="modal" data-bs-target={ `#${props.product._id}1` }>
                    <FaShare />
                </span>


                <div className="modal fade text-primary " id={ `${props.product._id}1` } tabIndex="-4" aria-labelledby={ `${props.product._id}share` } aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-2 " id={ `${props.product._id}share` }>Share</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <span className="modal-body text-center ">
                                <ul className='row share-icons p-0 mx-auto  '>

                                    <li className='icon col-4 g-3 mx-auto '>
                                        <EmailShareButton url={ shareUrl } quote={ title } >
                                            <EmailIcon borderRadius={ 50 } size={ 40 } />
                                        </EmailShareButton>
                                    </li>
                                    <li className='icon col-4 g-3 mx-auto '>
                                        <TwitterShareButton url={ shareUrl } quote={ title }>
                                            <TwitterIcon borderRadius={ 50 } size={ 40 } />
                                        </TwitterShareButton>
                                    </li>
                                    <li className='icon col-4 g-3 mx-auto '>
                                        <WhatsappShareButton url={ shareUrl } quote={ title }>
                                            <WhatsappIcon borderRadius={ 50 } size={ 40 } />
                                        </WhatsappShareButton>
                                    </li>
                                    <li className='icon col-4 g-3 mx-auto '>
                                        <FacebookShareButton url={ shareUrl } quote={ title }>
                                            <FacebookIcon borderRadius={ 50 } size={ 40 } />
                                        </FacebookShareButton>
                                    </li>
                                    <li className='icon col-4 g-3 mx-auto '>
                                        <FacebookMessengerShareButton url={ shareUrl } quote={ title }>
                                            <FacebookMessengerIcon borderRadius={ 50 } size={ 40 } />
                                        </FacebookMessengerShareButton>
                                    </li>
                                    <li className='icon col-4 g-3 mx-auto '>
                                        <LinkedinShareButton url={ shareUrl } quote={ title }>
                                            <LinkedinIcon borderRadius={ 50 } size={ 40 } />
                                        </LinkedinShareButton>
                                    </li>
                                    <li className='icon col-4 g-3 mx-auto '>
                                        <TelegramShareButton url={ shareUrl } quote={ title }>
                                            <TelegramIcon borderRadius={ 50 } size={ 40 } />
                                        </TelegramShareButton>
                                    </li>
                                </ul>
                            </span>

                            <div className='modal-footer   '>
                                <h6 className='text-center  w-100 p-1'>Copy Link to share any whare</h6>
                                <span onClick={ () => handelCopy(shareUrl) } data-bs-dismiss="modal" title="Save" type="button" className=' btn btn-primary m-1 ' >Copy</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>





    );
}

export default Share;