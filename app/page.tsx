import Hero from '@/components/Hero';

export default function Home() {
    return (
        <main className='bg-black-100 relative flex items-center justify-center'>
            <div className='w-full max-w-7xl'>
                <Hero />
            </div>
        </main>
    );
}
