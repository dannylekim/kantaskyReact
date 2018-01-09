import axios from 'axios'
import kantaskyServer from '../config/config'

class User { 
    static async authenticate(credentials) { 
        try { 
            return Promise.resolve(await axios.post(kantaskyServer + 'login', credentials))
        }
        catch (err) { 
            return Promise.reject(err.response)
        }
    }

    static async signUp(user) { 
        try {
            return Promise.resolve(await (axios.post(kantaskyServer + 'signup', user)))
        }
        catch (err) { 
            
            return Promise.reject(err.response)
        }
    }
}

export default User