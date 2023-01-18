import axios from 'axios';
const instance = axios.create({
	baseURL: "...", 
// the api (cloud function ) uRL
});
export default instance;
// http://localhost:5001/clone-ef0ad/us-central1/api