import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { InterfaceRepo, InterfaceUser, ServerResponse } from '../../models/models';

export const githubApi = createApi({
  reducerPath: 'github/api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.github.com/'
  }),
  endpoints(build) {
    return ({
      searchUsers: build.query<InterfaceUser[], string>({
        query: (search: string) => ({
          url: 'search/users',
          params: {
            q: search,
            per_page: 10
          }
        }),
        transformResponse: ( response: ServerResponse ) => response.items
      }),
      getUserRepos: build.query<InterfaceRepo[], string>({
        query: (search: string) => ({
          url: `users/${search}/repos`
        })
      })
    });
  },
})

export const { useSearchUsersQuery, useLazyGetUserReposQuery } = githubApi
