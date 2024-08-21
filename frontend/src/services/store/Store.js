import { configureStore } from '@reduxjs/toolkit';
import roleStore from './Reducer'

export default configureStore({
    reducer: {
        Roles: roleStore,
    }
})
