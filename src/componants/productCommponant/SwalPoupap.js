import React, { useState } from 'react';
import Swal from 'sweetalert2';


function SwalPoupap() {
const [Email, setEmail] = useState('');


Swal.fire({
    title: 'Submit your Gmail',
    input: 'Email',

    inputAttributes: {
        autocapitalize: 'off'
    },
    showCancelButton: true,
    confirmButtonText: 'Continue',
    showLoaderOnConfirm: true,
    preConfirm: (login) => {
        return fetch(`//api.github.com/users/${login}`)
        setEmail()
    },
    allowOutsideClick: () => !Swal.isLoading()
}).then((result) => {
    if (result.isConfirmed) {
        Swal.fire({
            title: `${result.value.login}'s avatar`,
            imageUrl: result.value.avatar_url
        });
    }
});

return <></>
   
}

export default SwalPoupap;