import {createStackNavigator} from 'react-navigation'
import SignIn from './login/SignIn'
import SignUp from './login/SignUp'
import Forgetpassword from './login/Forgetpassword'
import Lockprofile from './login/Lockprofile'

const Login=createStackNavigator({
    Lockprofile:{screen:Lockprofile},
    SignIn:{screen:SignIn},
    SignUp:{screen:SignUp},
    Forgetpassword:{screen:Forgetpassword},
    
},
    {
        headerMode:"none"
    }
)

export default Login