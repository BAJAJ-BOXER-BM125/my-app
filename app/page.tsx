import * as React from 'react';
import { cn } from '@/lib/utils';
// import { Container } from "components/ui/button.tsx";
// import { Button } from '../ui/button';
import { ShoppingCart, User, UserRound } from 'lucide-react';



interface Props {  
  className?: string;      
}  
 

export const Home: React.FC<Props> = ({ className }) => {
  return (
    <header className={cn('border border-b')}>
      {/* <Container className='flex items-center justify-between py-8'> */}
          <div className='flex gap-4'>
          <p className='text-4xl font-black px-20 py-10'>Все питццы</p>
          {/* <Button variant='outline' className='gap-1 flex items-center'><UserRound size={13}/>Всё</Button> */}
          </div>    
      {/* </Container> */}
    </header>    
   ); 
}    
  