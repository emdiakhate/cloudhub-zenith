import { 
  LayoutDashboard, 
  FolderOpen, 
  Calendar, 
  Users, 
  Trello, 
  MessageSquare, 
  Mail, 
  FileText, 
  Image, 
  Activity 
} from "lucide-react"
import { NavLink } from "react-router-dom"
import { cn } from "@/lib/utils"
import { ThemeToggle } from "./theme-toggle"

const navigationItems = [
  { title: "Tableau de bord", url: "/", icon: LayoutDashboard },
  { title: "Fichiers", url: "/files", icon: FolderOpen },
  { title: "Agenda", url: "/calendar", icon: Calendar },
  { title: "Contacts", url: "/contacts", icon: Users },
  { title: "Deck", url: "/deck", icon: Trello },
  { title: "Discussion", url: "/discussion", icon: MessageSquare },
  { title: "Mail", url: "/mail", icon: Mail },
  { title: "Notes", url: "/notes", icon: FileText },
  { title: "Photos", url: "/photos", icon: Image },
  { title: "Activité", url: "/activity", icon: Activity },
]

export function AppSidebar() {
  return (
    <div className="flex h-screen w-sidebar flex-col bg-sidebar border-r border-sidebar-border">
      {/* Logo */}
      <div className="flex h-16 items-center justify-center border-b border-sidebar-border bg-gradient-primary">
        <h1 className="text-xl font-bold text-white">CloudHub</h1>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto px-3 py-4">
        <ul className="space-y-1">
          {navigationItems.map((item) => (
            <li key={item.url}>
              <NavLink
                to={item.url}
                end={item.url === "/"}
                className={({ isActive }) =>
                  cn(
                    "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-300",
                    "hover:bg-sidebar-muted hover:text-sidebar-accent",
                    isActive
                      ? "bg-sidebar-accent text-sidebar-accent-foreground shadow-soft"
                      : "text-sidebar-foreground"
                  )
                }
              >
                {({ isActive }) => (
                  <>
                    <item.icon className={cn("h-5 w-5 flex-shrink-0", isActive && "text-sidebar-accent-foreground")} />
                    <span className="truncate">{item.title}</span>
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Theme Toggle */}
      <div className="border-t border-sidebar-border p-3">
        <div className="flex items-center justify-center">
          <ThemeToggle />
        </div>
      </div>
    </div>
  )
}