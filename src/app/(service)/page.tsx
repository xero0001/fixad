import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>응 타이틀</h1>

        <div className={styles.grid}>응 메인</div>
      </main>

      <footer className={styles.footer}>응 푸터</footer>
    </div>
  )
}
