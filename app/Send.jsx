'use client'
import { Input } from '@/components/ui/input'
import { ChevronRightIcon, X } from 'lucide-react'
import React, { useState } from 'react'
import EmailCard from './EmailCard';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Button } from '@/components/ui/button';

// interface EmailItem {
//   id: number;
//   name: string;
//   imgUrl: string;
// }

const Send = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedItems, setSelectedItems] = useState([]);
  
  const [emailItems, setEmailItems] = useState([
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

  const toggleSelection = (id) => {
    setSelectedItems(prev => 
      prev.includes(id) 
        ? prev.filter(itemId => itemId !== id)
        : [...prev, id]
    );
  };

  const handleSend = () => {
    // Here you would implement the email sending logic
    // selectedItems contains all the IDs of selected recipients
    console.log("Sending to:", selectedItems);
    alert(`Preparing to send to ${selectedItems.length} recipients`);
  };

  return (
    <div className='bg-white min-h-screen w-full'>
      <div className='relative container md:px-0 px-6 pt-10 pb-6 max-w-3xl mx-auto text-black'>
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

        <ScrollArea className="h-[580px] max-w-3xl">
          <div className='grid md:grid-cols-4 grid-cols-2 gap-10 pt-2'>
            {filteredItems.length > 0 ? (
              filteredItems.map(item => (
                <EmailCard 
                  key={item.id}
                  name={item.name} 
                  imgUrl={item.imgUrl}
                  selected={selectedItems.includes(item.id)}
                  onClick={() => toggleSelection(item.id)}
                />
              ))
            ) : (
              <div className="text-center py-10 text-muted-foreground col-span-full">
                No results found for "{searchTerm}"
              </div>
            )}
          </div>
        </ScrollArea>

        {selectedItems.length > 0 && (
          <div className="absolute left-5 bottom-18">
            <div className="max-w-3xl mx-auto flex justify-between items-center">
              {/* <div>
                {selectedItems.length} recipient{selectedItems.length !== 1 ? 's' : ''} selected
              </div> */}
              <Button onClick={handleSend} className='z-10 bg-[#3D8EFE] hover:bg-[#3D8EFE]/90'>
                <ChevronRightIcon className='text-white'/>
              </Button>
            </div>
          </div>
        )}
        <div className='absolute bottom-0'><img src='/footer-gradient.svg' /></div>
      </div>
    </div>
  )
}

export default Send