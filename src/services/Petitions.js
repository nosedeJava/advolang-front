import RequestService from "./RequestService";
import AzureService from './AzureService';

export const componentDidMountGet = async (setLoading, setCurrentObject, url) => {

  try{
    setLoading(true);
    const res = await RequestService.get(url);
    setCurrentObject(JSON.parse(JSON.stringify(res.data)));
    setLoading(false);
  }

  catch(error) {
    console.log(error)
  }

};

export const componentDidMountGetAzure = async (setLoading, setCurrentObject, url , container) => {

  try{
    setLoading(true);
    const res = await AzureService.getFile(url, container);
    setCurrentObject(res.config.url);
    setLoading(false);
  }

  catch(error) {
    console.log(error)
  }

};

export const componentDidMountListGet = (url_petitions_list) => {
  url_petitions_list.forEach(element =>  {
    componentDidMountGet(element.loadingConst, element.setConst, element.url);
  });
}

export const componentDidMountPost = async (setLoading, afterPost, url, data) => {

  try {

    setLoading(true);
    const res = await RequestService.post(url, data);
    afterPost(JSON.parse(JSON.stringify(res.data)));
    setLoading(false);
  }

  catch(error) {
    console.log(error)
  }

};

export const postAzure= async (urlGet, file, postContainer, afterAction) => {
  try {
    const putRes = await AzureService.putFile(urlGet, file, postContainer);
    afterAction(putRes)
  }

  catch(error) {
    console.log(error)
  }
}

export const componentDidMountGetAndAfterPostAzure = async (urlGet, getContainer, urlPost, postContainer, afterAction) => {

  try {

    AzureService.getFile(urlGet, getContainer)
    .then(res => res.data)
    .then(data => postAzure(urlGet, data, postContainer, afterAction)
    );

  }
  catch(error) {
    console.log(error)
  }
}

/* Load specific user component info */
export const userInfoAzure = async (setLoading, setCurrentObject, url, setProfileImage)  => {

  try {

    setLoading(true);
    const res = await RequestService.get(url);
    const user = JSON.parse(JSON.stringify(res.data));
    setCurrentObject(user);

    const imageRes = await AzureService.getFile(user.profileImage, user.username)
    setProfileImage(imageRes.config.url)

    setLoading(false);
  }

  catch(error) {
    console.log(error)
  }
}

/* Load specific recommendation component info (recommendation resource)*/
export const recomInfoAzure = async (setLoading, setCurrentObject, url, setProfileImage, setRecObject)  => {

  try{

    setLoading(true);
    const res = await RequestService.get(url);
    const recom = JSON.parse(JSON.stringify(res.data));
    setCurrentObject(recom);

    const imageRes = await AzureService.getFile(recom.thumbnail, recom.creator)
    setProfileImage(imageRes.config.url)

    if(recom.resourceType.toLowerCase() !== 'url'){
      const recRes = await AzureService.getFile(recom.resource, recom.creator)
      setRecObject(recRes.config.url)
    }

    else {
      setRecObject(recom.resource)
    }

  setLoading(false);

  }
  catch(error) {
    console.log(error)
  }
}

export const getUserThumbByUsername = async (setLoading, url, setProfileImage) => {

  try{
    setLoading(true)
    const res = await RequestService.get(url);
    const user = JSON.parse(JSON.stringify(res.data));
    const imageRes = await AzureService.getFile(user.profileImage, user.username);
    setProfileImage(imageRes.config.url)
    setLoading(false);
  }

  catch(error) {
    console.log(error)
  }

}
