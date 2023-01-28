import { NexusGenArgTypes, NexusGenObjects } from '@shared/generated/nexus-typegen'
import { graphQLClient } from '@client/shared'
import { SIGNUP_MUTATION, Update_Tel_Name_MUTATION } from './tags'

export const signupMutation = async (
  variables: NexusGenArgTypes['Mutation']['signup'],
): Promise<{ signup: NexusGenObjects['PreRegisteredUser'] }> => {
  return await graphQLClient.request(SIGNUP_MUTATION, variables)
}

export const UpdateTelNameMutation = async (
  variables: NexusGenArgTypes['Mutation']['updateTelName'],
): Promise<{ updateTelName: NexusGenObjects['PreRegisteredUser'] }> => {
  return await graphQLClient.request(Update_Tel_Name_MUTATION, variables)
}
