import UserRegisterPage from '../components/user/pages/Register';
import UserLoginPage from '../components/user/pages/Login';
import AgentRegisterPage from '../components/agent/pages/Register';
import AgentLoginPage from '../components/agent/pages/Login';

const components = {
    userLogin: {
        url: "user/login",
        component: UserLoginPage
    },
    userRegister: {
        url: "user/register",
        component: UserRegisterPage
    },
    agentLogin: {
        url: "agent/login",
        component: AgentLoginPage
    },
    agentRegister: {
        url: "agent/register",
        component: AgentRegisterPage
    }

}
const permissions = {
    user: {
        allowedRoutes : [
            components.userLogin,
            components.userRegister
        ],
        redirectRoutes: "user/login"
    },
    member : {
        allowedRoutes: [
            components.todo,
            components.profile
        ],
        redirectRoutes: "/profile"
    },
    agent : {
        allowedRoutes: [
            components.agentLogin,
            components.agentRegister
        ],
        redirectRoutes: "/agent/login"
    }
}
//check permissions
export default permissions