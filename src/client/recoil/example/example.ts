import { atom } from 'recoil'
import { RecoilKey, ExampleType } from '../../../shared/types'

export const authInfoState = atom<ExampleType>({
  key: RecoilKey.ExampleKey,
  default: {
    example: false,
  },
})
