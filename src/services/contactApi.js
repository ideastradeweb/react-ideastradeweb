import axios from 'axios'
const url = 'https://smtp-mailer.ideastradeweb.com/?send=1';


/*===========================================================
  SEND EMAIL
============================================================*/
export const sendEmail = (data) => {
  console.log(data);
  
  return axios.post(url, data);
}