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

const showSuccessMessageSignup = () => {
    Swal.fire({
        title: 'Success!',
        text: 'Sign up successfully! Now login.',
        icon: 'success',
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'OK'
    });
};

const showErrorMessageSignup = () => {
    Swal.fire({
        title: 'Error!',
        text: 'Error when registering, please try again.',
        icon: 'error',
        confirmButtonColor: '#d33',
        confirmButtonText: 'OK'
    });
};

export { showSuccessMessage, showErrorMessage, showErrorMessageSignup, showSuccessMessageSignup};