'use client'
import React, { useState } from 'react'
import { Input } from '@/components/ui/input'
import { X } from 'lucide-react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import HiringCard from './HiringCard'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'

interface HiringItem {
  id: number;
  name: string;
  title: string;
  date: string;
}

const Hiring = () => {
  // Sample data - replace with your actual data source
  const [hiringItems, setHiringItems] = useState<HiringItem[]>([
    { id: 1, name: "Manasvi", title: "Regarding Job Post", date: "May 21" },
    { id: 2, name: "Alex", title: "Frontend Developer Position", date: "May 22" },
    { id: 3, name: "Sarah", title: "Backend Engineer Role", date: "May 23" },
    { id: 4, name: "John", title: "UI/UX Designer Opportunity", date: "May 24" },
    { id: 5, name: "Emily", title: "Product Manager Interview", date: "May 25" },
    { id: 6, name: "David", title: "Technical Writer Position", date: "May 26" },
    { id: 7, name: "Lisa", title: "DevOps Engineer Role", date: "May 27" },
    { id: 8, name: "Michael", title: "Data Scientist Opportunity", date: "May 28" },
    { id: 9, name: "Jessica", title: "Marketing Specialist Role", date: "May 29" },
    { id: 10, name: "Kevin", title: "Sales Representative Position", date: "May 30" },
    { id: 11, name: "Olivia", title: "Customer Support Role", date: "May 31" },
    { id: 12, name: "Robert", title: "QA Engineer Position", date: "Jun 1" },
  ]);

  const [searchTerm, setSearchTerm] = useState("");

  // Filter items based on search term (checks both name and title)
  const filteredItems = hiringItems.filter(item => 
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const clearSearch = () => {
    setSearchTerm("");
  };

  return (
    <div className='bg-white min-h-screen w-full'>
      <div className='container md:px-0 px-6 py-10 max-w-3xl mx-auto text-black'>
        <div>
          <div className="*:not-first:mt-2 pb-10">
            <div className="relative">
              <Input 
                className="peer pe-9 text-2xl py-8 font-serif" 
                placeholder="Search hiring items..." 
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
        <ScrollArea className="h-[612px] max-w-3xl md:pb-0 pb-5">
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
        </ScrollArea>
      </div>
    </div>
  )
}

export default Hiring