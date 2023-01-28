import { NexusGenArgTypes, NexusGenObjects } from '@shared/generated/nexus-typegen'
import { graphQLClient } from '@client/shared'
import { SIGNUP_PRE_REGISTERED_USER_MUTATION, Update_Tel_Name_PRE_REGISTERED_USER_MUTATION } from './tags'

export const signupPreRegisteredUserMutation = async (
  variables: NexusGenArgTypes['Mutation']['signupPreRegisteredUser'],
): Promise<{ signup: NexusGenObjects['PreRegisteredUser'] }> => {
  return await graphQLClient.request(SIGNUP_PRE_REGISTERED_USER_MUTATION, variables)
}

export const updateTelNamePreRegisteredUserMutation = async (
  variables: NexusGenArgTypes['Mutation']['updateTelNamePreRegisteredUser'],
): Promise<{ updateTelName: NexusGenObjects['PreRegisteredUser'] }> => {
  return await graphQLClient.request(Update_Tel_Name_PRE_REGISTERED_USER_MUTATION, variables)
}
