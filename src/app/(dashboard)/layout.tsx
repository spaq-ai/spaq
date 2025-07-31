'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Brain, Home, Network, Sparkles, Settings, LogOut, Menu, ChevronLeft, BarChart3 } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { Sidebar, SidebarBody, SidebarLink } from '@/components/ui/sidebar'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  const links = [
    {
      label: "Dashboard",
      href: "/",
      icon: (
        <Home className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "ReasonChains",
      href: "/chains",
      icon: (
        <Network className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "AI Agent",
      href: "/agent",
      icon: (
        <Sparkles className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Analytics",
      href: "/analytics",
      icon: (
        <BarChart3 className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Settings",
      href: "/settings",
      icon: (
        <Settings className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
  ];

  return (
    <div className="flex flex-col md:flex-row bg-gray-100 dark:bg-black w-full flex-1 mx-auto border border-neutral-200 dark:border-neutral-700 overflow-hidden h-screen">
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between gap-10 border-r border-neutral-200 dark:border-neutral-700">
          <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
            <Link href="/" className={cn(
              "flex items-center gap-2 p-3",
              !open && "justify-center"
            )}>
              <Image 
                src="/images/spaq-transparent.png" 
                alt="spaq" 
                width={48} 
                height={48} 
                className="w-12 h-12 flex-shrink-0"
              />
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: open ? 1 : 0 }}
                className={cn(
                  "font-bold text-xl dark:text-white whitespace-nowrap",
                  !open && "hidden"
                )}
              >
                spaq
              </motion.span>
            </Link>
            <div className="mt-8 flex flex-col gap-2">
              {links.map((link, idx) => (
                <div key={idx} className="relative">
                  <SidebarLink 
                    link={link} 
                    className={cn(
                      "relative px-3 py-2 rounded-lg transition-all",
                      pathname === link.href 
                        ? "bg-purple-500/10 text-purple-500" 
                        : "hover:bg-neutral-100 dark:hover:bg-neutral-800"
                    )}
                  />
                  {pathname === link.href && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute left-0 top-0 bottom-0 w-1 bg-purple-500 rounded-r"
                      initial={false}
                      transition={{
                        type: "spring",
                        stiffness: 350,
                        damping: 30
                      }}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className={cn(
              "flex items-center gap-2 p-3",
              !open && "justify-center"
            )}>
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center text-white font-semibold flex-shrink-0">
                JD
              </div>
              <motion.div
                animate={{
                  opacity: open ? 1 : 0,
                  width: open ? "auto" : 0,
                }}
                className={cn(
                  "flex flex-col overflow-hidden",
                  !open && "hidden"
                )}
              >
                <span className="text-sm font-medium dark:text-white whitespace-nowrap">John Doe</span>
                <span className="text-xs text-neutral-500 dark:text-neutral-400 whitespace-nowrap">john@company.com</span>
              </motion.div>
            </div>
            <SidebarLink 
              link={{
                label: "Logout",
                href: "#",
                icon: <LogOut className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
              }}
              className="text-neutral-500 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-200"
            />
          </div>
        </SidebarBody>
      </Sidebar>
      <div className="flex-1 overflow-y-auto">
        {children}
      </div>
    </div>
  )
}