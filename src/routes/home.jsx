import React from 'react';
import { Link } from 'react-router-dom';
import { Avatar, AvatarImage, AvatarFallback } from '@radix-ui/react-avatar';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuSeparator } from '@radix-ui/react-dropdown-menu';
import './home.css';


export default function Home() {
  return (
    <>
      <header className="w-full bg-[#91AC9A] px-4 md:px-6 py-4 flex items-center justify-between">
        <Link className="flex items-center gap-2 text-white" to="#">
        </Link>
        <div className="flex items-center gap-4 sm:gap-6">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Avatar className="h-9 w-9 bg-[#A9C3B6] text-white">
                <AvatarImage alt="User Avatar" src="/placeholder-avatar.jpg" />
                <AvatarFallback>MB</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuSeparator />
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
      <main className="flex-1 w-full py-12 md:py-24 lg:py-32 bg-[url('/nature-pattern.svg')] bg-repeat bg-[length:200px_200px] bg-[#B7D1D3] dark:bg-[#A6C3CE]">
        <div className="container px-4 md:px-6">
          <h1 className="text-3xl font-bold text-[#91AC9A] mb-4">
            Welcome back, Moe!
          </h1>
          <p className="text-xl text-[#A9C3B6] mb-8">
            Let's continue your mental health journey. Explore the tools and resources available to you.
          </p>
          <div className="grid grid-cols-2 gap-4 mb-8">
            <Link to="#" className="dashboard-box">
              Mood Tracker
            </Link>
            <Link to="#" className="dashboard-box">
              Journal
            </Link>
            <Link to="#" className="dashboard-box">
              Meditation
            </Link>
            <Link to="#" className="dashboard-box">
              Resources
            </Link>
          </div>
          <div className="recent-activity">
            <h2 className="text-xl font-semibold text-[#91AC9A]">Recent Activity</h2>
            <ul>
              <li>Mood Tracker Updated - 2 hours ago</li>
              <li>New Journal Entry - 1 day ago</li>
            </ul>
          </div>
        </div>
      </main>
    </>
  );
}