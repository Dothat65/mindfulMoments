import React from 'react';
import { Link } from 'react-router-dom';
import { Avatar, AvatarImage, AvatarFallback } from '@radix-ui/react-avatar';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuSeparator } from '@radix-ui/react-dropdown-menu';
import './home.css';

export default function Home() {
  return (
    <>
      <header className="w-full px-4 md:px-6 py-4 flex items-center justify-between">
        <Link className="flex items-center gap-2 text-white" to="#">
        </Link>
        <div className="flex items-center gap-4 sm:gap-6">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Avatar className="h-10 w-10 rounded-full overflow-hidden bg-white text-black">
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
      <main className="flex-1 w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl font-bold mb-4">
              Welcome back, Moe!
            </h1>
            <p className="text-lg mb-8">
              Let's continue your mental health journey. Explore the tools and resources available to you.
            </p>
            <div className="flex gap-4">
              <Link to="/dashboard" className="btn-primary">Go to Dashboard</Link>
              <Link to="/resources" className="btn-secondary">Explore Resources</Link>
            </div>
          </div>
          <div className="md:w-1/2 bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-medium mb-6">Your Dashboard</h2>
            <div className="grid grid-cols-2 gap-4 mb-8">
              <Link to="/moodTracker" className="dashboard-box">
                Mood Tracker
              </Link>
              <Link to="/journal" className="dashboard-box">
                Journal
              </Link>
              <Link to="/meditation" className="dashboard-box">
                Meditation
              </Link>
              <Link to="/resources" className="dashboard-box">
                Resources
              </Link>
            </div>
            <div className="recent-activity">
              <h2 className="text-xl font-medium mb-4">Recent Activity</h2>
              <ul>
                <li>Mood Tracker Updated - 2 hours ago</li>
                <li>New Journal Entry - 1 day ago</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
