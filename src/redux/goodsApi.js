import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = 'http://localhost:3001/';

export const goodsApi = createApi({
  reducerPath: 'goodsApi',
  baseQuery: fetchBaseQuery({baseUrl: baseUrl}),
  endpoints: (build) => ({
    getGoods: build.query({
      // query: () => 'goods',
      query: (limit = '') => `goods?${ limit && `_limit=${limit}` }`,
    }),
    addProduct: build.mutation({
      query: (body) => ({
        url: 'goods',
        method: 'POST',
        body,
      })
    }),
  }),
});

export const { useGetGoodsQuery, useAddProductMutation } = goodsApi;