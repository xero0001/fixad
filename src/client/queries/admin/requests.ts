import { NexusGenArgTypes, NexusGenObjects } from '@shared/generated/nexus-typegen'
import { graphQLClient } from '@client/shared'
import { ADMIN_PRE_REGISTER_USERS, ADMIN_PRE_REGISTER_USERS_COUNT } from './tags'

export const adminPreRegisteredUsersQuery = async (
  variables: NexusGenArgTypes['Query']['adminPreRegisteredUsers'],
): Promise<{ adminPreRegisteredUsers: NexusGenObjects['PreRegisteredUser'] }> => {
  return await graphQLClient.request(ADMIN_PRE_REGISTER_USERS, variables)
}

export const adminPreRegisteredUsersCount = async (
  variables: NexusGenArgTypes['Query']['adminPreRegisteredUsersCount'],
): Promise<{ adminPreRegisteredUsersCount: number }> => {
  return await graphQLClient.request(ADMIN_PRE_REGISTER_USERS_COUNT, variables)
}
