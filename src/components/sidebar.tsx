"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { 
  LayoutDashboard, 
  FileText, 
  Users, 
  DollarSign, 
  Laptop, 
  CheckSquare,
  ChevronDown
} from "lucide-react"

const navigation = [
  { 
    name: "Dashboard", 
    href: "/", 
    icon: LayoutDashboard,
    badge: "" 
  },
  { 
    name: "Contratos", 
    href: "/contratos", 
    icon: FileText,
    badge: "120" 
  },
  { 
    name: "Fornecedores", 
    href: "/fornecedores", 
    icon: Users,
    badge: "45" 
  },
  { 
    name: "Medições", 
    href: "/medicoes", 
    icon: DollarSign,
    badge: "8" 
  },
  { 
    name: "Ativos", 
    href: "/ativos", 
    icon: Laptop,
    badge: "64" 
  },
  { 
    name: "Checklists", 
    href: "/checklists", 
    icon: CheckSquare,
    badge: "12" 
  },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="fixed inset-y-0 left-0 w-64 bg-[#0f4c81] text-white">
      <div className="flex flex-col h-full">
        {/* Logo */}
        <div className="h-16 flex items-center px-6 border-b border-[#1a5c91]">
          <span className="text-xl font-bold">Celebre Obras</span>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
          {navigation.map((item) => {
            const isActive = pathname === item.href
            const Icon = item.icon
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center justify-between px-4 py-3 rounded-lg transition-colors ${
                  isActive
                    ? "bg-white/10 text-white"
                    : "text-white/70 hover:bg-white/5 hover:text-white"
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon className="h-5 w-5" />
                  <span>{item.name}</span>
                </div>
                {item.badge && (
                  <span className="px-2 py-1 text-xs bg-white/20 rounded-full">
                    {item.badge}
                  </span>
                )}
              </Link>
            )
          })}
        </nav>

        {/* User Profile Section */}
        <div className="p-4 border-t border-[#1a5c91]">
          <button className="w-full flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-white/5 transition-colors">
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
              <span className="text-sm font-medium">A</span>
            </div>
            <div className="flex-1 text-left">
              <p className="text-sm font-medium">Admin</p>
              <p className="text-xs text-white/70">Ver perfil</p>
            </div>
            <ChevronDown className="h-4 w-4 text-white/70" />
          </button>
        </div>
      </div>
    </aside>
  )
}
