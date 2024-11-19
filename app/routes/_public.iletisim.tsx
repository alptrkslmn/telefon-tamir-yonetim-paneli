import { useLoaderData, Form } from '@remix-run/react'
import { prisma } from '~/db.server'
import { useState } from 'react'

export async function loader() {
  const contactPage = await prisma.page.findFirst({
    where: { slug: 'iletisim' }
  })
  return { contactPage }
}

export default function ContactPage() {
  const { contactPage } = useLoaderData<typeof loader>()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  return (
    <div>
      <h1 className="text-4xl font-bold mb-6">{contactPage?.title}</h1>
      <div 
        className="prose dark:prose-invert max-w-full mb-6"
        dangerouslySetInnerHTML={{ __html: contactPage?.content || '' }}
      />
      
      <Form method="post" className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Bize Ulaşın</h2>
        
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2">Ad Soyad</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 py-2 border dark:border-gray-600 dark:bg-gray-700 rounded-md"
            required
          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2">E-posta</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border dark:border-gray-600 dark:bg-gray-700 rounded-md"
            required
          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="phone" className="block mb-2">Telefon</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-3 py-2 border dark:border-gray-600 dark:bg-gray-700 rounded-md"
          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="message" className="block mb-2">Mesaj</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-3 py-2 border dark:border-gray-600 dark:bg-gray-700 rounded-md"
            rows={4}
            required
          ></textarea>
        </div>
        
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 dark:hover:bg-blue-700 transition"
        >
          Mesajı Gönder
        </button>
      </Form>
    </div>
  )
}
