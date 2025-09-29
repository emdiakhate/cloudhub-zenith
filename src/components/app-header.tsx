import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface AppHeaderProps {
  title: string
  icon?: React.ComponentType<{ className?: string }>
}

export function AppHeader({ title, icon: Icon }: AppHeaderProps) {
  return (
    <header className="flex h-16 items-center justify-between border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-6">
      <div className="flex items-center gap-3">
        {Icon && <Icon className="h-6 w-6 text-primary" />}
        <h1 className="text-2xl font-semibold text-foreground">{title}</h1>
      </div>
      
      <div className="flex items-center gap-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Rechercher..."
            className="w-80 pl-10 bg-muted/50 border-border focus:ring-primary"
          />
        </div>
        <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
          <Search className="h-4 w-4" />
          <span className="sr-only">Search</span>
        </Button>
      </div>
    </header>
  )
}