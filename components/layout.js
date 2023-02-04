import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <div className='flex flex-col min-h-screen'>
      <header className='bg-white mb-8 py-4'>
        <div className='container mx-auto flex justify-center text-yellow-900'>
          <Link href={'/'} legacyBehavior>
            <a>Home</a>
          </Link>
         
          <span className='mx-auto font-mono font-bold'>Playbook</span>{' '}
        </div>
      </header>
      <main className='container mx-auto flex-1'>{children}</main>
      <footer className='bg-white mt-8 py-4 text-black'>
        <div className='container mx-auto flex justify-center'>
          &copy; Coffee 
        </div>
      </footer>
    </div>
  );
}