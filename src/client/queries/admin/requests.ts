import { NexusGenArgTypes, NexusGenObjects } from '@shared/generated/nexus-typegen'
import { graphQLClient } from '@client/shared'
import { ADMIN_PRE_REGISTER_USERS_QUERY, ADMIN_DELETE_PRE_REGISTER_USERS_MUTATION } from './tags'

export const adminPreRegisteredUsersQuery = async (
  variables: NexusGenArgTypes['Query']['adminPreRegisteredUsers'],
): Promise<{ adminPreRegisteredUsers: NexusGenObjects['PreRegisteredUser'] }> => {
  return await graphQLClient.request(ADMIN_PRE_REGISTER_USERS_QUERY, variables)
}

export const adminDeletePreRegisteredUsersMutation = async (
  variables: NexusGenArgTypes['Mutation']['adminDeletePreRegisteredUsers'],
): Promise<{ adminDeletePreRegisteredUsers: NexusGenObjects['PreRegisteredUser'] }> => {
  return await graphQLClient.request(ADMIN_DELETE_PRE_REGISTER_USERS_MUTATION, variables)
}
