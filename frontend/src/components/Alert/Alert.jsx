import Swal from 'sweetalert2';

const showSuccessMessage = () => {
    Swal.fire({
        title: 'Success!',
        text: 'Login successfully!',
        icon: 'success',
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'OK'
    });
};

const showErrorMessage = () => {
    Swal.fire({
        title: 'Error!',
        text: 'Error logging in, please try again.',
        icon: 'error',
        confirmButtonColor: '#d33',
        confirmButtonText: 'OK'
    });
};

export { showSuccessMessage, showErrorMessage};