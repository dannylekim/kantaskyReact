import {createBrowserHistory} from 'history'
import axios from "axios"


//=============== Global Axios Settings ================

//Note: The better approach is to create an instance rather than using global settings and importing that instance
export const backendServerURL = 'https://kantasky-backend.herokuapp.com/'
axios.defaults.baseURL = backendServerURL;


export const history = createBrowserHistory()

