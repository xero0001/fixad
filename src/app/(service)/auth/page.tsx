import PreSignUp from './(_components)/preSignUp/PreSignUp'
import UserInfoUpdate from './(_components)/userInfoUpdate/UserInfoUpdate'
import styles from './page.module.css'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

export default function Page() {
  return (
    <>
      <PreSignUp />
      {/* <UserInfoUpdate /> */}
    </>
  )
}
