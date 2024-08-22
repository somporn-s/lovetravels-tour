import UserRegisterPage from '../components/user/pages/register';
import UserLoginPage from '../components/user/pages/login';
import UserSearchPage from '../components/user/pages/search';
import UserDetailPage from '../components/user/pages/detail';
import UserPaymentPage from '../components/user/pages/payment';
import UserConfirmPaymentPage from '../components/user/pages/confirmPayment';
import UserBookingPage from '../components/user/pages/booking';
import UserProfilePage from '../components/user/pages/profile';

import AgentRegisterPage from '../components/agent/pages/register';
import AgentLoginPage from '../components/agent/pages/login';
import AgentBookingPage from '../components/agent/pages/booking';

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
    },
    agentBooking: {
        url: "agent/booking",
        component: AgentBookingPage
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
            components.agentBooking,
        ],
        redirectRoutes: "agent/booking"
    }
}
export default permissions