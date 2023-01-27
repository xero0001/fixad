import gql from 'graphql-tag'
import { PRE_REGISTERED_USER_FRAGMENT } from '@client/queries/fragments'

export const TEST_MUTATION = gql`
  mutation testMutation($id: Int!) {
    testMutation(id: $id) {
      ${PRE_REGISTERED_USER_FRAGMENT}
    }
  }
`
