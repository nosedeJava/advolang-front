import RequestService from "../../services/RequestService";

/* Realiza la petición get a una URL dada

   setLoading -> Cambia el valor de loading de un componente
   setCurrentObject -> Cambia el valor de un objeto con la respuesta de la petición
   url -> URL de donde se va a realizar la petición (http://localhost:8080/URL o https://heroku.com/URL)
*/
export const componentDidMountGet = async (setLoading, setCurrentObject, url) => {
  setLoading(true);
  const res = await RequestService.get(url);
  setCurrentObject(JSON.parse(JSON.stringify(res.data)));
  setLoading(false);
};

export const componentDidMountPost = async (setLoading, afterPost, url, data) => {
  setLoading(true);
  const res = await RequestService.post(url, data);
  afterPost();
  setLoading(false);
};
