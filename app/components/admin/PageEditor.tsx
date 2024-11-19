import React, { useState } from 'react'
import { Editor } from '@tinymce/tinymce-react'
import { 
  Box, 
  Flex, 
  Text, 
  TextField, 
  Select, 
  Button, 
  Checkbox, 
  Tabs 
} from '@radix-ui/themes'
import { 
  ImageIcon, 
  FileTextIcon, 
  GearIcon, 
  EyeOpenIcon 
} from '@radix-ui/react-icons'
import { useDropzone } from 'react-dropzone'
import { HexColorPicker } from 'react-colorful'
import { motion } from 'framer-motion'

interface PageEditorProps {
  initialPage?: {
    title: string
    slug: string
    content: string
    status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED'
    visibility: 'PRIVATE' | 'PUBLIC' | 'PASSWORD_PROTECTED'
    featuredImage?: string
    metaTitle?: string
    metaDescription?: string
  }
  onSave: (pageData: any) => void
}

export const PageEditor: React.FC<PageEditorProps> = ({ 
  initialPage, 
  onSave 
}) => {
  const [title, setTitle] = useState(initialPage?.title || '')
  const [slug, setSlug] = useState(initialPage?.slug || '')
  const [content, setContent] = useState(initialPage?.content || '')
  const [status, setStatus] = useState(initialPage?.status || 'DRAFT')
  const [visibility, setVisibility] = useState(initialPage?.visibility || 'PRIVATE')
  const [featuredImage, setFeaturedImage] = useState(initialPage?.featuredImage || '')
  const [metaTitle, setMetaTitle] = useState(initialPage?.metaTitle || '')
  const [metaDescription, setMetaDescription] = useState(initialPage?.metaDescription || '')

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'image/*': ['.jpeg', '.png', '.gif', '.webp']
    },
    onDrop: (acceptedFiles) => {
      const file = acceptedFiles[0]
      setFeaturedImage(URL.createObjectURL(file))
    }
  })

  const handleSave = () => {
    onSave({
      title,
      slug,
      content,
      status,
      visibility,
      featuredImage,
      metaTitle,
      metaDescription
    })
  }

  const generateSlug = (text: string) => {
    return text
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, '')
      .replace(/[\s_-]+/g, '-')
      .replace(/^-+|-+$/g, '')
  }

  return (
    <Box>
      <Tabs.Root defaultValue="content">
        <Tabs.List>
          <Tabs.Trigger value="content">
            <FileTextIcon /> İçerik
          </Tabs.Trigger>
          <Tabs.Trigger value="seo">
            <GearIcon /> SEO Ayarları
          </Tabs.Trigger>
          <Tabs.Trigger value="visibility">
            <EyeOpenIcon /> Görünürlük
          </Tabs.Trigger>
        </Tabs.List>

        <Tabs.Content value="content">
          <Flex direction="column" gap="3">
            <TextField.Root>
              <TextField.Input 
                placeholder="Sayfa Başlığı" 
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value)
                  setSlug(generateSlug(e.target.value))
                }}
              />
            </TextField.Root>

            <TextField.Root>
              <TextField.Input 
                placeholder="URL Slug" 
                value={slug}
                onChange={(e) => setSlug(generateSlug(e.target.value))}
              />
            </TextField.Root>

            <Editor
              apiKey={import.meta.env.VITE_TINYMCE_API_KEY}
              init={{
                height: 500,
                menubar: true,
                plugins: [
                  'advlist', 'autolink', 'lists', 'link', 'image', 
                  'charmap', 'preview', 'anchor', 'searchreplace', 
                  'visualblocks', 'code', 'fullscreen',
                  'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
                ],
                toolbar: 'undo redo | blocks | ' +
                  'bold italic forecolor | alignleft aligncenter ' +
                  'alignright alignjustify | bullist numlist outdent indent | ' +
                  'removeformat | help',
                content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
              }}
              value={content}
              onEditorChange={(newContent) => setContent(newContent)}
            />
          </Flex>
        </Tabs.Content>

        <Tabs.Content value="seo">
          <Flex direction="column" gap="3">
            <TextField.Root>
              <TextField.Input 
                placeholder="Meta Başlık" 
                value={metaTitle}
                onChange={(e) => setMetaTitle(e.target.value)}
              />
            </TextField.Root>

            <TextField.Root>
              <TextField.Slot>
                <ImageIcon />
              </TextField.Slot>
              <TextField.Input 
                placeholder="Öne Çıkan Görsel" 
                value={featuredImage}
                onChange={(e) => setFeaturedImage(e.target.value)}
              />
            </TextField.Root>

            <div {...getRootProps()} style={{
              border: '2px dashed #ccc',
              padding: '20px',
              textAlign: 'center',
              cursor: 'pointer'
            }}>
              <input {...getInputProps()} />
              <p>Görsel yüklemek için tıklayın veya sürükleyin</p>
            </div>

            <TextField.Root>
              <TextField.Textarea 
                placeholder="Meta Açıklama" 
                value={metaDescription}
                onChange={(e) => setMetaDescription(e.target.value)}
              />
            </TextField.Root>
          </Flex>
        </Tabs.Content>

        <Tabs.Content value="visibility">
          <Flex direction="column" gap="3">
            <Select.Root 
              value={status} 
              onValueChange={(value: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED') => setStatus(value)}
            >
              <Select.Trigger>
                <Select.Value placeholder="Sayfa Durumu" />
              </Select.Trigger>
              <Select.Content>
                <Select.Item value="DRAFT">Taslak</Select.Item>
                <Select.Item value="PUBLISHED">Yayınlandı</Select.Item>
                <Select.Item value="ARCHIVED">Arşivlendi</Select.Item>
              </Select.Content>
            </Select.Root>

            <Select.Root 
              value={visibility} 
              onValueChange={(value: 'PRIVATE' | 'PUBLIC' | 'PASSWORD_PROTECTED') => setVisibility(value)}
            >
              <Select.Trigger>
                <Select.Value placeholder="Görünürlük" />
              </Select.Trigger>
              <Select.Content>
                <Select.Item value="PRIVATE">Özel</Select.Item>
                <Select.Item value="PUBLIC">Herkese Açık</Select.Item>
                <Select.Item value="PASSWORD_PROTECTED">Şifre Korumalı</Select.Item>
              </Select.Content>
            </Select.Root>
          </Flex>
        </Tabs.Content>
      </Tabs.Root>

      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Button 
          size="3" 
          variant="solid" 
          color="blue" 
          onClick={handleSave}
          style={{ marginTop: '20px', width: '100%' }}
        >
          Sayfayı Kaydet
        </Button>
      </motion.div>
    </Box>
  )
}
