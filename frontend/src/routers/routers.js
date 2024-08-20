import UserRegisterPage from '../components/user/pages/Register';
import UserLoginPage from '../components/user/pages/Login';
import UserSearchPage from '../components/user/pages/Search';
import UserDetailPage from '../components/user/pages/Detail';
import UserPaymentPage from '../components/user/pages/Payment';
import UserConfirmPaymentPage from '../components/user/pages/ConfirmPayment';
import UserBookingPage from '../components/user/pages/Booking';
import UserProfilePage from '../components/user/pages/Profile';

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
    userSearch: {
        url: "user/search",
        component: UserSearchPage
    },
    userDetail: {
        url: "user/detail",
        component: UserDetailPage
    },
    userPayment: {
        url: "user/payment",
        component: UserPaymentPage
    },
    userConfirmPayment: {
        url: "user/confirm_Payment",
        component: UserConfirmPaymentPage
    },
    userBooking: {
        url: "user/booking",
        component: UserBookingPage
    },
    userProfile: {
        url: "user/profile",
        component: UserProfilePage
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
            components.userRegister,
            components.userSearch,
            components.userDetail,
            components.agentLogin,
            components.agentRegister,
        ],
        redirectRoutes: "user/login"
    },
    member : {
        allowedRoutes: [
            components.userSearch,
            components.userDetail,
            components.userPayment,
            components.userConfirmPayment,
            components.userBooking,
            components.userProfile,
        ],
        redirectRoutes: "user/search"
    },
    agent : {
        allowedRoutes: [
            components.agentLogin,
            components.agentRegister,
            components.agentBooking,
        ],
        redirectRoutes: "/agent/login"
    }
}
//check permissions
export default permissions