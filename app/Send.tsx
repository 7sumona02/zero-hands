'use client'
import { Input } from '@/components/ui/input'
import { X } from 'lucide-react'
import React, { useState } from 'react'
import EmailCard from './EmailCard';
import { ScrollArea } from '@/components/ui/scroll-area';

interface EmailItem {
    id: number;
    name: string;
    imgUrl: string;
  }

const Send = () => {
    const [searchTerm, setSearchTerm] = useState("");

    const [emailItems, setEmailItems] = useState<EmailItem[]>([
            { id: 1, name: "Manasvi", imgUrl: "/profile.svg" },
            { id: 2, name: "Alex", imgUrl: "/profile.svg" },
            { id: 3, name: "Daniel", imgUrl: "/profile.svg" },
            { id: 4, name: "David", imgUrl: "/profile.svg" },
            { id: 5, name: "Camila", imgUrl: "/profile.svg" },
            { id: 6, name: "Kevin", imgUrl: "/profile.svg" },
            { id: 7, name: "Sophia", imgUrl: "/profile.svg" },
            { id: 8, name: "Ethan", imgUrl: "/profile.svg" },
            { id: 9, name: "Olivia", imgUrl: "/profile.svg" },
            { id: 10, name: "Liam", imgUrl: "/profile.svg" },
            { id: 11, name: "Emma", imgUrl: "/profile.svg" },
            { id: 12, name: "Noah", imgUrl: "/profile.svg" },
            { id: 13, name: "Ava", imgUrl: "/profile.svg" },
            { id: 14, name: "William", imgUrl: "/profile.svg" },
            { id: 15, name: "Isabella", imgUrl: "/profile.svg" },
            { id: 16, name: "James", imgUrl: "/profile.svg" },
            { id: 17, name: "Mia", imgUrl: "/profile.svg" },
            { id: 18, name: "Benjamin", imgUrl: "/profile.svg" },
            { id: 19, name: "Charlotte", imgUrl: "/profile.svg" },
            { id: 20, name: "Lucas", imgUrl: "/profile.svg" }
      ]);

    const filteredItems = emailItems.filter(item => 
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  
    const clearSearch = () => {
      setSearchTerm("");
    };

  return (
    <div className='bg-white min-h-screen w-full'>
      <div className='container md:px-0 px-6 pt-10 pb-6 max-w-3xl mx-auto text-black'>
        <div className='text-2xl font-medium font-serif pb-3'>Choose whom to send this mail</div>
        <div>
          <div className="*:not-first:mt-2 pb-10">
            <div className="relative">
              <Input 
                className="peer pe-9 text-2xl py-8 font-serif" 
                placeholder="Search Zero Hands..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              {searchTerm && (
                <button 
                  onClick={clearSearch}
                  className="text-muted-foreground/80 absolute inset-y-0 end-0 flex items-center justify-center pe-3 hover:text-foreground transition-colors"
                >
                  <X size={16} aria-hidden="true" />
                </button>
              )}
            </div>
          </div>
        </div>
        
        {/* <ScrollArea className="h-[612px] max-w-3xl">
          {filteredItems.length > 0 ? (
            filteredItems.map(item => (
              <HiringCard 
                key={item.id}
                name={item.name} 
                title={item.title} 
                date={item.date} 
              />
            ))
          ) : (
            <div className="text-center py-10 text-muted-foreground">
              No results found for "{searchTerm}"
            </div>
          )}
        </ScrollArea> */}
        {/* <ScrollArea className="h-[612px] max-w-3xl md:pb-0 pb-5">
          <Table>
            <TableBody>
              <TableRow className='bg-transparent hover:bg-transparent'>
              {filteredItems.length > 0 ? (
            filteredItems.map(item => (
              <HiringCard 
                key={item.id}
                name={item.name} 
                title={item.title} 
                date={item.date} 
              />
            ))
          ) : (
            <div className="text-center py-10 text-muted-foreground">
              No results found for "{searchTerm}"
            </div>
          )}
              </TableRow>
            </TableBody>
          </Table>
          <ScrollBar orientation='horizontal' />
        </ScrollArea> */}
        <ScrollArea className="h-[580px] max-w-3xl">
            <div className='grid md:grid-cols-4 grid-cols-2 gap-10 pt-2'>
            {filteredItems.length > 0 ? (
                filteredItems.map(item => (
                <EmailCard 
                    key={item.id}
                    name={item.name} 
                    imgUrl={item.imgUrl} 
                />
                ))
            ) : (
            <div className="text-center py-10 text-muted-foreground">
                No results found for "{searchTerm}"
            </div>
            )}
            </div>
        </ScrollArea>
      </div>
    </div>
  )
}

export default Send