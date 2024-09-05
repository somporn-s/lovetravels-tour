import UserRegisterPage from '../components/user/pages/register';
import UserConfEmail from '../components/user/pages/confEmail';
import UserLoginPage from '../components/user/pages/login';
import UserSearchPage from '../components/user/pages/search';
import UserDetailPage from '../components/user/pages/detail';
import UserPaymentPage from '../components/user/pages/payment';
import UserConfirmPaymentPage from '../components/user/pages/confirmPayment';
import UserBookingPage from '../components/user/pages/booking';
import UserProfilePage from '../components/user/pages/profile';

import AgentRegisterPage from '../components/agent/pages/register';
import AgentConfEmail from '../components/agent/pages/confEmail';
import AgentLoginPage from '../components/agent/pages/login';
import AgentBookingPage from '../components/agent/pages/booking';
import AgentPackageTourPage from '../components/agent/pages/packageTour';
import AgentAddPackageTourPage from '../components/agent/pages/addPackageTour';

const components = {
    userLogin: {
        url: "user/login",
        component: UserLoginPage
    },
    userRegister: {
        url: "user/register",
        component: UserRegisterPage
    },
    userConfEmail: {
        url: "user/confirm_email",
        component: UserConfEmail
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
    agentConfEmail: {
        url: "agent/confirm_email",
        component: AgentConfEmail
    },
    agentBooking: {
        url: "agent/booking",
        component: AgentBookingPage
    },
    agentPackageTour: {
        url: "agent/package_tour",
        component: AgentPackageTourPage
    },
    agentAddPackageTour: {
        url: "agent/add_package_tour",
        component: AgentAddPackageTourPage
    },

}
const permissions = {
    user: {
        allowedRoutes : [
            components.userLogin,
            components.userRegister,
            components.userConfEmail,
            components.userSearch,
            components.userDetail,
            components.userPayment,
            components.userConfirmPayment,
            components.userBooking,
            components.userProfile,
            components.agentLogin,
            components.agentRegister,
            components.agentConfEmail,
        ],
        redirectRoutes: "user/login"
    },
    member: {
        allowedRoutes : [
            components.userSearch,
            components.userDetail,
            components.userPayment,
            components.userConfirmPayment,
            components.userBooking,
            components.userProfile
        ],
        redirectRoutes: "user/search"
    },
    agent : {
        allowedRoutes: [
            components.agentBooking,
            components.agentPackageTour,
            components.agentAddPackageTour,
        ],
        redirectRoutes: "agent/booking"
    }
}
export default permissions