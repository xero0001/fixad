// import { useAccount } from '../../useAccount'
// import { adminUsersQuery, adminDeleteUsersMutation } from ''
import { adminPreRegisteredUsersQuery, adminDeletePreRegisteredUsersMutation } from '../../queries/admin'
import { exploreQueryTemplate, deleteMutationTemplate } from './shared/utils'

const KEY = 'adminPreRegisteredUsers'

export function useAdminUsers() {
  // const { isLoggedIn, me, isMeLoading, refetchMe } = useAccount()
  // const isAuthenticated = isLoggedIn && me && !isMeLoading
  const isAuthenticated = true

  const useExplore = exploreQueryTemplate({ query: adminPreRegisteredUsersQuery, enabled: isAuthenticated, key: KEY })
  const useDelete = deleteMutationTemplate({ mutation: adminDeletePreRegisteredUsersMutation })

  return {
    key: KEY,
    useExplore,
    useDelete,
  }
}
