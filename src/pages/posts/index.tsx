import Head from 'next/head'

import styles from './styles.module.scss'

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | BetNews</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a href="">
            <time>20 de Abril de 2021</time>
            <strong>Como ganhar dinheiro com esportes</strong>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              quod, voluptatum, quae, voluptas quidem voluptates quibusdam
              voluptatibus quia quos quas voluptate. Quisquam, quae. Quisquam
              quod, voluptatum, quae, voluptas quidem voluptates quibusdam
            </p>
          </a>
          <a href="">
            <time>20 de Abril de 2021</time>
            <strong>Como ganhar dinheiro com esportes</strong>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              quod, voluptatum, quae, voluptas quidem voluptates quibusdam
              voluptatibus quia quos quas voluptate. Quisquam, quae. Quisquam
              quod, voluptatum, quae, voluptas quidem voluptates quibusdam
            </p>
          </a>
          <a href="">
            <time>20 de Abril de 2021</time>
            <strong>Como ganhar dinheiro com esportes</strong>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              quod, voluptatum, quae, voluptas quidem voluptates quibusdam
              voluptatibus quia quos quas voluptate. Quisquam, quae. Quisquam
              quod, voluptatum, quae, voluptas quidem voluptates quibusdam
            </p>
          </a>
          <a href="">
            <time>20 de Abril de 2021</time>
            <strong>Como ganhar dinheiro com esportes</strong>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              quod, voluptatum, quae, voluptas quidem voluptates quibusdam
              voluptatibus quia quos quas voluptate. Quisquam, quae. Quisquam
              quod, voluptatum, quae, voluptas quidem voluptates quibusdam
            </p>
          </a>
        </div>
      </main>
    </>
  )
}
