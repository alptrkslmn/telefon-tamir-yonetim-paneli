import { useLoaderData } from '@remix-run/react'
import { prisma } from '~/db.server'

export async function loader() {
  const homePage = await prisma.page.findFirst({
    where: { slug: 'anasayfa' }
  })
  return { homePage }
}

export default function HomePage() {
  const { homePage } = useLoaderData<typeof loader>()

  return (
    <div>
      <h1 className="text-4xl font-bold mb-6">{homePage?.title}</h1>
      <div 
        className="prose dark:prose-invert max-w-full"
        dangerouslySetInnerHTML={{ __html: homePage?.content || '' }}
      />
    </div>
  )
}
