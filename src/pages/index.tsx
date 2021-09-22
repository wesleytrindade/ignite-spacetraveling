/* eslint-disable prettier/prettier */
import { GetStaticProps } from 'next';

import { FiCalendar, FiUser } from 'react-icons/fi';

import Link from 'next/link';

import { getPrismicClient } from '../services/prismic';

import commonStyles from '../styles/common.module.scss';

import styles from './home.module.scss';

interface Post {
  uid?: string;
  first_publication_date: string | null;
  data: {
    title: string;
    subtitle: string;
    author: string;
  };
}

interface PostPagination {
  next_page: string;
  results: Post[];
}

interface HomeProps {
  postsPagination: PostPagination;
}

export default function Home(): JSX.Element {
  return (

    <div className={styles.container}>
      <Link href="/posts">
        <div className={styles.post}>
          <a>
            <h1>Teste texto</h1>
          </a>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
            blanditiis cumque deserunt, dolores distinctio pariatur voluptas
            accusantium obcaecati mollitia, officia at. Laudantium eum
            officiis soluta, labore quaerat quam tenetur repellendus!
          </p>
          <span>
            <FiCalendar /> Data
          </span>
          <span>
            <FiUser /> Wesley
          </span>
        </div>
      </Link>

      <Link href="/posts">
        <div className={styles.post}>
          <a>
            <h1>Teste texto</h1>
          </a>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
            blanditiis cumque deserunt, dolores distinctio pariatur voluptas
            accusantium obcaecati mollitia, officia at. Laudantium eum
            officiis soluta, labore quaerat quam tenetur repellendus!
          </p>
          <span>
            <FiCalendar /> Data
          </span>
          <span>
            <FiUser /> Wesley
          </span>
        </div>
      </Link>
      <div className={styles.loadMore}>
        <Link href="/">
          <a>Carregar mais</a>
        </Link>
      </div>
    </div>
  );
}

// export const getStaticProps = async () => {
//   // const prismic = getPrismicClient();
//   // const postsResponse = await prismic.query(TODO);

//   // TODO
// };
