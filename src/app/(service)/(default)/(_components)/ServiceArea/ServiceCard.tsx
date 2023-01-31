import classNames from 'classnames/bind'
import styles from './ServiceCard.module.css'
const cx = classNames.bind(styles)

export default function ServiceCard({ serviceContent }) {
  return (
    <div className={cx('container')}>
      <div className={cx('id')}>Service {serviceContent.id}</div>
      <div className={cx('title')}>{serviceContent.title}</div>
      <h4 className={cx('sub_title')}>{serviceContent.subTitle}</h4>
      <p className={cx('description')}>{serviceContent.description}</p>
      <div className={cx('illust')}>{returnIcon(serviceContent.id)}</div>
    </div>
  )
}

const returnIcon = id => {
  switch (id) {
    case 1:
      return <img src="/assets/illust/service_1.svg" alt="service_1" />
    case 2:
      return <img src="/assets/illust/service_2.svg" alt="service_2" />
    case 3:
      return <img src="/assets/illust/service_3.svg" alt="service_3" />
    case 4:
      return <img src="/assets/illust/service_4.svg" alt="service_4" />
    case 5:
      return <img src="/assets/illust/service_5.svg" alt="service_5" />
    case 6:
      return <img src="/assets/illust/service_6.svg" alt="service_6" />
    case 7:
      return <img src="/assets/illust/service_7.svg" alt="service_7" />
    case 8:
      return <img src="/assets/illust/service_8.svg" alt="service_8" />
    case 9:
      return <img src="/assets/illust/service_9.svg" alt="service_9" />
    case 10:
      return <img src="/assets/illust/service_10.svg" alt="service_10" />
    case 11:
      return <img src="/assets/illust/service_11.svg" alt="service_11" />
    case 12:
      return <img src="/assets/illust/service_12.svg" alt="service_12" />
  }
}
