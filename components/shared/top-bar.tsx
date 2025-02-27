import { cn } from "@/lib/utils";
import { Button } from '../ui/button';
import { ShoppingCart, User, UserRound } from 'lucide-react';
import { Container } from "postcss";


interface Props {
    className?: string;
}

export const TopBar: React.FC<Props> = ({ className }) => {
    return(
        <div className={cn('sticky top-0 bg-white py-5 shadow-lg shadow-black/5 z-10', className)}>
             <p className='text-left px-20 py-10 text-4xl font-black'>Все пиццы</p>
             <div>
             <Button className="Submit" />
             </div>
        </div>
    );
       
}