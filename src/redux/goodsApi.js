import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = 'http://localhost:3001/';

export const goodsApi = createApi({
  reducerPath: 'goodsApi',
  // magic
  tagTypes: ['Products'],
  // -----
  baseQuery: fetchBaseQuery({baseUrl: baseUrl}),
  endpoints: (build) => ({
    getGoods: build.query({
      // query: () => 'goods',
      query: (limit = '') => `goods?${ limit && `_limit=${limit}` }`,
      // magic
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Products', id })),
              { type: 'Products', id: 'LIST' },
            ]
          : [{ type: 'Products', id: 'LIST' }],
      // -----
    }),
    addProduct: build.mutation({
      query: (body) => ({
        url: 'goods',
        method: 'POST',
        body,
      }),
      // magin
      invalidatesTags: [{type: 'Products', id: 'LIST'}]
      // -----
    }),
    delProduct: build.mutation({
      query: (id) => ({
        url: 'goods',
        method: 'DELETE',
      }),
      // magin
      invalidatesTags: [{type: 'Products', id: 'LIST'}]
      // -----
    }),
  }),
});

export const { useGetGoodsQuery, useAddProductMutation, useDelProductMutation } = goodsApi;