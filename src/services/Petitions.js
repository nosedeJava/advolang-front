import RequestService from "./RequestService";
import AzureService from './AzureService';
import LinkPreview from 'react-native-link-preview';
import JSSoup from 'jssoup';
import {fetch} from 'whatwg-fetch';
const axios = require('axios').default;
const invocation = new XMLHttpRequest();

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

const handlerHTTPRequest = (e) => {
  alert(JSON.stringify(e))
  alert("json data " +JSON.stringify(e.data))
}

/* Load specific recommendation component info */
export const recomInfoAzure = async (setLoading, setCurrentObject, url, setProfileImage, setRecObject, setDivText)  => {

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

      /*let externalData;

      invocation.open('GET', 'https://developer.mozilla.org/en-US/docs/HTTP/Access_control_CORS?redirectlocale=en-US&redirectslug=HTTP_access_control', false);
xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
      invocation.onload = function (e) {
      if (invocation.readyState === 4) {
        alert(invocation.responseText)

        if (invocation.status === 200) {

          var json_obj = JSON.parse(invocation.responseText);
          alert(JSON.stringify(json_obj))
        } else {
          console.error(invocation.statusText);
        }
      }
    }
    invocation.onerror = function (e) {
      console.error(invocation.statusText);
    };
      invocation.send();*/

      fetch('https://www.google.com?redirectlocale=en-US&redirectslug=HTTP_access_control', {
    mode: 'no-cors',
  })
  .then(response => console.log(response))
  .catch(error => console.error(error))
  fetch('https://www.google.com', {
mode: 'no-cors',
})
.then(response => console.log(response))
.catch(error => console.error(error))

      setRecObject(recom.resource)
      const p = await axios.get(recom.resource, {
        headers: {
          "Access-Control-Allow-Origin": "*"
        }
      });
      var soup = new JSSoup(p.data, false);

      let links = []

      soup.findAll('img').forEach(element => {
        /*let imgSrc = element.get('src')
        links.append(imgSrc)*/
        let imgSrc = element.attrs.src
        if(imgSrc.substring(0, 4) === "http") {
          links.push(imgSrc)
        }
      });

      let finalImage = "";

      const linkLength = links.length
      if(linkLength >= 2) {
        finalImage = links[1]
      }

      else if (linkLength === 1){
        finalImage = links[0]
      }

      await LinkPreview.getPreview(recom.resource)
          .then(data => setDivText([JSON.parse(JSON.stringify(data)), finalImage]));
    }

    setLoading(false);
  }

  catch(error) {
    console.log(error)
  }
}
