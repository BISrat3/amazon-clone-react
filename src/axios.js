import axios from 'axios';

const instance = axios.create({
	baseURL: "http://127.0.0.1:5001/challenge-12a45/us-central1/api", 
// the api (cloud function ) uRL
});
export default instance;
// http://localhost:5001/clone-ef0ad/us-central1/api
// http://127.0.0.1:5001/challenge-12a45/us-central1/api