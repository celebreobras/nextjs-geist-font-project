"use client"

import React from "react"
import { Bell, Search, Settings } from "lucide-react"

export function Header() {
  return (
    <header className="bg-white border-b border-gray-200 h-16 fixed top-0 right-0 left-64 z-30">
      <div className="h-full px-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Buscar..."
              className="pl-10 pr-4 py-2 border border-gray-200 rounded-full w-64 focus:outline-none focus:ring-2 focus:ring-[#0f4c81] focus:border-transparent"
            />
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="relative p-2 rounded-full hover:bg-gray-100 transition-colors">
            <Bell className="h-5 w-5 text-gray-600" />
            <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full"></span>
          </button>
          <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
            <Settings className="h-5 w-5 text-gray-600" />
          </button>
          <div className="flex items-center gap-3 ml-4">
            <div className="w-8 h-8 rounded-full bg-[#0f4c81] flex items-center justify-center text-white font-semibold">
              A
            </div>
            <div className="text-sm">
              <p className="font-medium text-gray-700">Admin</p>
              <p className="text-gray-500 text-xs">Administrador</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
