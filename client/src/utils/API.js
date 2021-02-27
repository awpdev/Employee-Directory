import axios from 'axios';

const URL = 'https://randomuser.me/api/?results=50&nat=us,ca,gb,ie,au,nz';

const API = {
  search: function() {
    return axios.get(URL);
  }
};
export default API;