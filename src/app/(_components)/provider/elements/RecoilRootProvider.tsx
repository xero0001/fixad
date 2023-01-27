'use client'

import { RecoilRoot, RecoilEnv } from 'recoil'

RecoilEnv.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = false

export default function RecoilRootProvider({ children }) {
  return <RecoilRoot>{children}</RecoilRoot>
}
