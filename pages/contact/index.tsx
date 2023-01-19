import Link from 'next/link';
import { MainLayout } from '../../components/layouts/MainLayout';

export default function ContactPage() {
  return (
    <MainLayout>
      <h1>Contact Page</h1>

      <h1 className={'title'}>
        Volver a <Link href="/">Inicio</Link>
      </h1>

        <div className={'description'}>
          <p>
            Get started by editing&nbsp;
            <code className={'code'}>pages/contact/index.jsx</code>
          </p>
        </div>
    </MainLayout>
  )
}
