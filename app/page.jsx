"use client"
import { ChevronRight, Inbox, Menu, Star, Search, PenLine, Phone, Tag } from "lucide-react";

const page = () => {
  return (
    <div>
      {/* Nav */}
      <div className="py-8 px-14 flex justify-between items-center">
        <div>
          <h1 className="text-[2rem] font-medium text-[#626262] font-['OPT'] tracking-tight">
            zero <span className="font-sans">hands</span>
          </h1>
        </div>
        <div className="font-semibold flex items-center gap-6 text-[#303030]/60">
          <div className="hover:text-[#303030] transition-all duration-300 cursor-pointer">Home</div>
          <div className="hover:text-[#303030] transition-all duration-300 cursor-pointer">Pricing</div>
          <div className="hover:text-[#303030] transition-all duration-300 cursor-pointer">Blogs</div>
          <div className="hover:text-[#303030] transition-all duration-300 cursor-pointer">About</div>
        </div>
        <div className="flex items-center gap-6">
          <div className="text-[#303030] font-semibold">Sign in</div>
          <div className="button"><span>Get Started</span></div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="px-8 pb-8">
        <div className="h-full w-full bg-blue-200 rounded-xl overflow-hidden relative">
          <img src="/landing/hero.webp" className="w-full h-full object-cover" />

          {/* left side */}
          <div className="absolute bottom-24 left-16 flex flex-col gap-8">
            <div className="text-7xl font-medium text-white font-['OPT'] tracking-tight">The better way to finish <br /> your email.</div>
            <div className="text-xl font-semibold text-white/80 font-sans max-w-[40%]">ZeroHands turns messages into finished work—auto-triage, replies in your voice, booked meetings, and clean CRM updates. Built for teams that need speed and control.</div>
            <div className="flex items-center gap-5">
              <div className="cursor-pointer bg-white px-8 py-3 rounded-full">
                <span className="btnspan">Get Started</span>
              </div>
              <div className="cursor-pointer relative bg-white/20 backdrop-blur-lg px-8 py-3 border border-white/40 rounded-full overflow-hidden">
                <span className="text-white text-[16px] font-semibold flex items-center">Demo <ChevronRight size={20} className="ml-1" /></span>
                <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/70 to-transparent rounded-b-full blur-xs"></div>
              </div>
            </div>
          </div>

          {/* right side */}
          <div className="absolute top-20 -right-0">
            <div className="h-[80vh] w-[42vw] bg-gradient-to-t from-white/40 to-white/60 rounded-3xl pl-6 py-6">
              <WhatsappUI />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;





import React, { useState } from "react";

const chats = [
  { id: 1, avatar: "AL", name: "Alice", message: "Hey, how are you?", date: "Aug 20", tag: "All", unread: true },
  { id: 2, avatar: "BO", name: "Bob", message: "Let’s catch up tomorrow.", date: "Sep 4", tag: "Important" },
  { id: 3, avatar: "CH", name: "Charlie", message: "Meeting at 5?", date: "Dec 15", tag: "VIP" },
  { id: 4, avatar: "DI", name: "Diana", message: "Got it 👍", date: "Feb 26", tag: "Follow-Up" },
  { id: 5, avatar: "EV", name: "Eve", message: "Haha that’s funny 😂", date: "Jan 3", tag: "All" },
  { id: 6, avatar: "MA", name: "Matthew", message: "Update the doc", date: "Jun 30", tag: "Important" },
  { id: 7, avatar: "LI", name: "Liam", message: "See you soon!", date: "Jul 28", tag: "VIP" },
  { id: 8, avatar: "SO", name: "Sonny", message: "Reminder about tomorrow", date: "Jun 13", tag: "Follow-Up" },
];

const tabs = [
  { label: "All"},
  { label: "Important"},
  { label: "VIP"},
  { label: "Follow-Up"},
];

const WhatsappUI = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  // Filter chats by tab + search
  const filteredChats = chats.filter(
    (chat) =>
      (activeTab === "All" || chat.tag === activeTab) &&
      (chat.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        chat.message.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="h-full w-full flex bg-transparent rounded-3xl">
      {/* Left Sidebar */}
      <div className="flex-1 bg-white rounded-l-3xl border-neutral-400 flex flex-col overflow-hidden relative">
        {/* Floating Pen Button */}
        <div className="absolute bottom-4 right-4">
          <div className="bg-[#006BFF] rounded-full size-10 flex items-center justify-center shadow-md cursor-pointer">
            <PenLine className="size-4 text-white" />
          </div>
        </div>

        {/* Top Nav */}
        <div className="px-4 py-3 flex justify-between items-center bg-[#F0F2F5] rounded-tl-3xl">
          <h1 className="text-xl font-bold text-neutral-600">
            <Menu />
          </h1>
          <div className="flex gap-3 text-gray-500">
            <div className="font-semibold text-xs bg-[#006BFF] text-white px-3 rounded-lg flex items-center gap-1.5">
              <Inbox className="size-3" /> Inbox Zero
            </div>
            <div className="size-10 bg-[#0288D1] rounded-full text-white font-semibold text-lg flex items-center justify-center">
              V
            </div>
          </div>
        </div>

        {/* Search */}
        <div className="px-4 py-3">
          <div className="flex items-center gap-2 bg-[#F0F2F5] px-3 py-2 rounded-lg">
            <Search className="w-4 h-4 text-gray-500" />
            <input
              type="text"
              placeholder="Search in all..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-transparent outline-none w-full text-xs font-medium"
            />
          </div>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-x-7 border-b border-[#F0F2F5] text-xs font-medium text-[#303030]">
  {tabs.map((tab) => (
    <div
      key={tab.label}
      className="relative cursor-pointer flex flex-col items-center py-3"
      onClick={() => setActiveTab(tab.label)}
    >
      <div
        className={`flex items-center gap-1 ${
          activeTab === tab.label ? "text-[#3D8EFE]" : "text-[#303030]/60"
        }`}
      >
        <span>{tab.label}</span>
      </div>
      {activeTab === tab.label && (
        <div className="absolute bottom-0 w-10 h-1 bg-[#3D8EFE] rounded-t-full"></div>
      )}
    </div>
  ))}
</div>


        {/* Chat List */}
        <div className="overflow-y-auto flex-1">
          {filteredChats.length > 0 ? (
            filteredChats.map((chat) => (
              <div
                key={chat.id}
                className="px-4 py-3 flex items-center gap-3 hover:bg-gray-50 cursor-pointer"
              >
                <div className="size-8 rounded-full bg-[#DBEAFE] flex items-center justify-center text-[#006BFF] font-bold text-[12px]">
                  {chat.avatar}
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-center">
                    <div className="flex flex-col">
                      <div className="flex items-center gap-2">
                        <h2 className="text-xs font-semibold text-[#303030]">
                          {chat.name}
                        </h2>
                        <div className="size-1.5 bg-[#F6339A] rounded-full"></div>
                      </div>
                      <p className="text-xs text-[#303030]/60 truncate">
                        {chat.message}
                      </p>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <span className="text-xs text-[#303030]/60 font-medium">
                        {chat.date}
                      </span>
                      <div>
                        {chat.unread ? (
                          <Tag className="size-2.5 text-[#8947D9]" />
                        ) : (
                          <Phone className="size-2.5 text-[#A2845E]" />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center text-xs text-gray-500 py-8">
              No chats found
            </div>
          )}
        </div>
      </div>

      {/* Right Side (Wallpaper) */}
      <div className="flex-1 bg-[url('https://i.pinimg.com/736x/52/59/bb/5259bb8fc42d56983e6f8737dc20a2d8.jpg')] bg-cover bg-center"></div>
    </div>
  );
};


