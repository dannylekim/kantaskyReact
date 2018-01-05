import axios from 'axios'
import kantaskyServer from '../config/config'

class User { 
    static async authenticate(credentials) { 
        try { 
            return await (axios.post(kantaskyServer + 'login', credentials))
        }
        catch (err) { 
            console.log("ERROR: " + err)
        }
    }

    static async signUp(user) { 
        try {
            return await (axios.post(kantaskyServer + 'signup', user))
        }
        catch (err) { 
            console.log("ERROR: " + err)
        }
    }
}

export default User