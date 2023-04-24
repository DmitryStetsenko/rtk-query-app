import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = 'http://localhost:3001/';

export const goodsApi = createApi({
  reducerPath: 'goodsApi',
  baseQuery: fetchBaseQuery({baseUrl: baseUrl}),
  endpoints: (build) => ({
    getGoods: build.query({
      query: () => 'goods',
    })
  }),
});

export const { useGetGoodsQuery } = goodsApi;