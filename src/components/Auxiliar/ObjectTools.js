
/* Retorna el valor del objeto almacenado en el localStorage

localStorageIdValue -> Valor(id) del objeto en el localStorages
*/
export const getLocalStorageObject = (localStorageIdValue) => {
    return JSON.parse(localStorage.getItem(localStorageIdValue));
}
