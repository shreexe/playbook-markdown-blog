import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <div className='flex flex-col min-h-screen'>
      <header className='bg-slate-900 mb-8 py-4 text-white'>
        <div className='container mx-auto flex justify-center'>
          <span className='mx-auto font-mono font-bold text-xl'>
          <Link href={'/'}>
            Moon
          </Link>
          </span>
        </div>
      </header>
      <main className='container mx-auto flex-1'>{children}</main>
      <footer className='bg-white mt-8 py-4 text-black border-t-[0.5px]'>
        <div className='container mx-auto flex justify-center'>
          &copy; Coffee 
        </div>
      </footer>
    </div>
  );
}