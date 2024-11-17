import { apiSlice } from "../apiSlice";

interface LoginResponse {
    token: string;
}

interface LoginRequest {
    email: string;
    password: string;
}

export const authApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation<LoginResponse, LoginRequest>({
            query: (credentials) => ({
                url: '/api/login_check',
                method: 'POST',
                body: credentials,
            }),
            transformResponse: (response: LoginResponse) => {
                if (response.token) {
                    localStorage.setItem('token', response.token);
                    console.log(localStorage);
                }
                return response;
            },
            invalidatesTags: [{ type: 'Auth', id: 'STATUS' }],
        }),
    }),
});

export const { useLoginMutation } = authApi;
