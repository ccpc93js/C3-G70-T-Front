import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://ingamers.api/' }),
  endpoints: (builder) => ({
    login: builder.muration({
      query: (credentials) => ({ url: 'auth/login', method: 'POST', body: credentials }),
    }),
    register: builder.muration({
      query: (credentials) => ({ url: 'auth/register', method: 'POST', body: credentials }),
    }),
    
  }),
})


export const { login } = usersApi