import { NexusGenArgTypes, NexusGenObjects } from '@shared/generated/nexus-typegen'
import { graphQLClient } from '@client/shared'
import { SIGNUP_PRE_REGISTERED_USER_MUTATION, FINISH_SIGNUP_PRE_REGISTERED_USER_MUTATION } from './tags'

export const signupPreRegisteredUserMutation = async (
  variables: NexusGenArgTypes['Mutation']['signupPreRegisteredUser'],
): Promise<{ signupPreRegisteredUser: NexusGenObjects['PreRegisteredUser'] }> => {
  return await graphQLClient.request(SIGNUP_PRE_REGISTERED_USER_MUTATION, variables)
}

export const finishSignupPreRegisteredMutation = async (
  variables: NexusGenArgTypes['Mutation']['finishSignupPreRegisteredUser'],
): Promise<{ finishSignupPreRegisteredUser: NexusGenObjects['PreRegisteredUser'] }> => {
  return await graphQLClient.request(FINISH_SIGNUP_PRE_REGISTERED_USER_MUTATION, variables)
}
