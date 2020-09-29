import Swal from 'sweetalert2';

const generalShowMessage = (tittle, message, type) => {
  return  (
    Swal.fire({
      title: tittle,
      text: message,
      icon: type,
      confirmButtonText: 'Accept'
    })
  );
}

export const ShowSuccessMessage = (tittle, message) => {
  return  generalShowMessage(tittle, message, 'success' );
}

export const ShowWarningMessage = (tittle, message) => {
  return  generalShowMessage(tittle, message, 'warning' );
}

export const ShowErrorMessage = (tittle, message) => {
  return  generalShowMessage(tittle, message, 'error' );
}
