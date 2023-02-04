import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import matter from 'gray-matter'
import Link from 'next/link'
import fs from 'fs'
const inter = Inter({ subsets: ['latin'] })

export async function getStaticProps() {
  const files = fs.readdirSync('posts');
  const posts = files.map((fileName) => {
    const slug = fileName.replace('.md', '');
    const readFile = fs.readFileSync(`posts/${fileName}`, 'utf-8');
    const { data: frontmatter } = matter(readFile);

    return {
      slug,
      frontmatter
    }
  })
  return {
    props: {
      posts
    }
  }
}
export default function Home({ posts }) {
  return (
    <div className='grid grid-cols-3 md:grid-cols-7 lg:grid-cols-4 p-3 md:p-3'>
      {posts.map(({ slug, frontmatter }) => (
        <div key={slug} className='border border-yellow-800 m-2 rounded-xl shadow-lg overflow-hidden flex flex-col'>
          <Link href={`/post/${slug}`} legacyBehavior>
            <a>
              <Image
                width={40}
                height={35}
                alt={frontmatter.title}
                src={`/${frontmatter.socialImage}`}
              />
              <h1 className='p-6 text-center inset-8'>{frontmatter.title}</h1>

            </a>

          </Link>


        </div>
      ))}
    </div>

  )
}