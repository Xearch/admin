import { Profile } from '@/src/components/Profile/Profile'
import Layout from '@/src/Layout/index'

export const metadata = {
  title: 'Início',
}

export default function HomePage() {
  return (
    <Layout>
      <Profile />
    </Layout>
  )
}
