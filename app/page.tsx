import * as React from 'react';
import { cn } from '@/lib/utils';
// import { Container } from './shared/container';


interface Props {  
  className?: string;  
}  
   
export default function Home() {
  return (
    <header className={cn('border border-b')}>
      {/* <Container className='flex items-center justify-between py-8'> */}
          <div className='flex gap-4'>
          <p className='text-2xl font-black text-base text-base text-gray-400'>Все питццы</p>
          </div>    
      {/* </Container> */}
    </header>    
   ); 
}    