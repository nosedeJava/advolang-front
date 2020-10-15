import axios from "axios";

const sasToken = '?sv=2019-12-12&ss=bfqt&srt=sco&sp=rwdlacupx&se=2020-12-25T03:57:08Z&st=2020-08-27T19:57:08Z&spr=https&sig=5pzxwhKt4EZSsPFTiHXOTZtaIwe808HD4w%2BMN5OxT9o%3D';
const semiUrl = 'https://advolang.blob.core.windows.net'

class AzureService {

    getFile(fileName, containerName) {
        return axios.get(`${semiUrl}/${containerName}/${fileName}${sasToken}`, {responseType: 'blob'})
    }

    putFile(fileName, file, containerName) {
        return axios.put(`${semiUrl}/${containerName}/${fileName}${sasToken}`, file, {headers: {'x-ms-blob-type': 'BlockBlob'}})
    }

    deleteFile(fileName, containerName) {
        return axios.delete(`${semiUrl}/${containerName}/${fileName}${sasToken}`)
    }
}

export default new AzureService();
