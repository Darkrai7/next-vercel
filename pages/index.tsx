import Link from 'next/link'
import { MainLayout } from '../components/layouts/MainLayout'

export default function HomePage() {
  return (
    <MainLayout>
      <h1 className="title">
        Ir a <Link href="/about">About</Link>
      </h1>
        
      <div className={'description'}> 
        <p>
          Get started by editing&nbsp;
          <code className={'code'}>pages/index.jsx</code>
        </p>          
        </div>  
    </MainLayout>
  )
}
