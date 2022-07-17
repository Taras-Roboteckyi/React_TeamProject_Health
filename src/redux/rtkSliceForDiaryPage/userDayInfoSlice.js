import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userDayInfoApi = createApi({
  reducerPath: 'userDayInfoApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://health-projectbackend.herokuapp.com/api',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;

      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ['userDayInfo'],
  endpoints: builder => ({
    fetchUserDayInfo: builder.query({
      query: day => `/contacts/${day}`,
      providesTags: ['userDayInfo'],
    }),
    addProduct: builder.mutation({
      query: newContact => ({
        url: `/contacts`,
        method: 'POST',
        body: newContact,
      }),
      invalidatesTags: ['userDayInfo'],
    }),
    deleteProduct: builder.mutation({
      query: contactId => ({
        url: `/contacts/${contactId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['userDayInfo'],
    }),
  }),
});

export const {
  useFetchUserDayInfoQuery,
  useDeleteProductMutation,
  useAddProductMutation,
} = userDayInfoApi;
