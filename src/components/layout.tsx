import { AppSidebar } from "./app-sidebar"
import { AppHeader } from "./app-header"

interface LayoutProps {
  children: React.ReactNode
  title: string
  icon?: React.ComponentType<{ className?: string }>
}

export function Layout({ children, title, icon }: LayoutProps) {
  return (
    <div className="flex h-screen w-full bg-background">
      <AppSidebar />
      
      <div className="flex flex-1 flex-col overflow-hidden">
        <AppHeader title={title} icon={icon} />
        
        <main className="flex-1 overflow-y-auto">
          <div className="animate-fade-in">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}