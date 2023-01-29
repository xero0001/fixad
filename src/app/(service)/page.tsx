import Image from 'next/image'
import PreSignUp from './(_components)/preSignUp/PreSignUp'
import styles from './page.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>응 타이틀</h1>

        <div className={styles.grid}>응 메인</div>
        <PreSignUp />
      </main>

      <footer className={styles.footer}>응 푸터</footer>
    </div>
  )
}
