import { useQuery, useMutation } from '@tanstack/react-query'

export const exploreQueryTemplate =
  ({ query, enabled, key }) =>
  variables => {
    const { data, isLoading, refetch } = useQuery([key, variables], () => query(variables), {
      enabled: !!(enabled && variables),
    })

    return {
      data: data?.[key] ?? ([] as any),
      totalCount: data?.[`${key}Count`] ?? 0,
      refetch,
      isLoading,
    }
  }

export const deleteMutationTemplate =
  ({ mutation }) =>
  options => {
    const { mutate, isLoading } = useMutation(mutation, options)

    return {
      mutate,
      isLoading,
    }
  }
