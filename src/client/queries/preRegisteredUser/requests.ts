import { NexusGenArgTypes, NexusGenObjects } from '@shared/generated/nexus-typegen'
import { graphQLClient } from '@client/shared'
import { TEST_MUTATION } from './tags'

export const testMutationMutation = async (
  variables: NexusGenArgTypes['Mutation']['testMutation'],
): Promise<{ testMutation: NexusGenObjects['PreRegisteredUser'] }> => {
  return await graphQLClient.request(TEST_MUTATION, variables)
}
