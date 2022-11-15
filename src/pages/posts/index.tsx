import { GetStaticProps } from 'next'
import Head from 'next/head'
import * as Prismic from '@prismicio/client'

import { getPrismicClient } from '../../services/prismic'

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

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient()

  const response = await prismic.query(
    [Prismic.predicates.at('document.type', 'post')],
    {
      fetch: ['post.title', 'post.content'],
      pageSize: 100,
    }
  )

  console.log(JSON.stringify(response, null, 2))

  return {
    props: {},
  }
}
