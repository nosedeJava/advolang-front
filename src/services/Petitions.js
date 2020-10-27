import RequestService from "./RequestService";
import AzureService from './AzureService';

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

export const componentDidMountGetWithAzureAfter = async (setLoading, setAzureObject, url) => {
  setLoading(true);
  const res = await RequestService.get(url);
  const azureURLRec = JSON.parse(JSON.stringify(res.data));
  if(azureURLRec !== "") componentDidMountGetAzure(setLoading, setAzureObject, azureURLRec);
  setLoading(false);
};

export const componentDidMountGetAzure = async (setLoading, setCurrentObject, url) => {
  setLoading(true);
  const res = await AzureService.getFile(url);
  setCurrentObject(res.config.url);
  setLoading(false);
};

export const componentDidMountListGet = (url_petitions_list) => {
  url_petitions_list.forEach(element =>  {
    componentDidMountGet(element.loadingConst, element.setConst, element.url);
  });
}

export const componentDidMountPost = async (setLoading, afterPost, url, data) => {
  setLoading(true);
  const res = await RequestService.post(url, data);
  afterPost(JSON.parse(JSON.stringify(res.data)));
  setLoading(false);
};
