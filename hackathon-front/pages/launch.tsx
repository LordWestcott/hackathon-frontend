import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Rocket() {
    const router = useRouter()

    useEffect(() => {
        const timer = setTimeout(() => {
          console.log('This will run after 1 second!')
          router.push('/dashboard')
        }, 1000);
        return () => clearTimeout(timer);
      }, []);


    return (
        <div className='pb-12 flex justify-center items-center h-screen'>
            <img className="animate-up h-80 w-80" src="/astro_jump.png" alt="astro icon" />
        </div>
    )
}
