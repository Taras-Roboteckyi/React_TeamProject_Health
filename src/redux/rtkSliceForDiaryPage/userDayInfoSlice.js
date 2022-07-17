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
      query: day => `diary/${day}`,
      providesTags: ['userDayInfo'],
    }),
    addProduct: builder.mutation({
      query: newProduct => ({
        url: `diary/add`,
        method: 'POST',
        body: newProduct,
      }),
      invalidatesTags: ['userDayInfo'],
    }),
    deleteProduct: builder.mutation({
      query: productId => ({
        url: `diary/remove`,
        method: 'DELETE',
        body: productId,
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
