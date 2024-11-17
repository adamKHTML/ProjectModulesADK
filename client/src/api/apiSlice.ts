import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_URL = "http://localhost:8000";

export const apiSlice = createApi({
    reducerPath: 'app_module_api',
    baseQuery: fetchBaseQuery({
        baseUrl: API_URL,
        credentials: 'include',
        prepareHeaders: (headers: Headers) => {
            const token = localStorage.getItem('token');
            if (token) {
                headers.set('Authorization', `Bearer ${token}`);
            }
            return headers;
        }
    }),
    tagTypes: ['Auth', 'Modules'],
    endpoints: () => ({}),
});
