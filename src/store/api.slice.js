import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const api = createApi({
        reducerPath: 'api',
        baseQuery: fetchBaseQuery({baseUrl: 'https://cdnapi.smotrim.ru/'}),
        endpoints: (builder) => ({
            getPersons: builder.query({query: () => 'api/v1/boxes/vesti2',}),
        }),
    }
)

export const {useGetPersonsQuery} = api