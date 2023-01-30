import Portal from '@root/src/client/components/portal/Portal'
import { IoAlertCircleSharp } from 'react-icons/io5'

import styles from './DuplicateModal.module.css'
import classNames from 'classnames/bind'
import Link from 'next/link'
import { PATH } from '@root/src/shared/const'
const cx = classNames.bind(styles)

export default function DuplicateModal({ desc }: { desc?: string }) {
  return (
    <Portal>
      <div className={cx('modal-container')}>
        <div className={cx('content')}>
          <IoAlertCircleSharp className={cx('alert-icon')} />
          <p className={cx('desc')}>{desc || '이미 가입된 아이디 입니다.'}</p>
          <div className={cx('button-wrapper')}>
            <Link href={PATH.HOME} className={cx('confirm-btn')}>
              확인
            </Link>
          </div>
        </div>
      </div>
    </Portal>
  )
}
