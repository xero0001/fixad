import PreSignUp from './(_components)/preSignUp/PreSignUp'
import styles from './page.module.css'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

export default function Page() {
  return (
    <>
      <PreSignUp />
    </>
  )
}
