import { 
  LayoutDashboard, 
  File, 
  Calendar as CalendarIcon, 
  Activity, 
  Trello, 
  MessageSquare, 
  StickyNote,
  Clock,
  CheckCircle,
  Circle,
  AlertCircle
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Layout } from "@/components/layout"
import { format } from "date-fns"
import { fr } from "date-fns/locale"

export default function Dashboard() {
  const now = new Date()
  const currentTime = format(now, "HH:mm", { locale: fr })
  const currentDate = format(now, "EEEE d MMMM yyyy", { locale: fr })

  // Données mock
  const recentFiles = [
    { name: "Présentation Q4.pdf", type: "PDF", date: "Il y a 2h", icon: File },
    { name: "Budget 2024.xlsx", type: "Excel", date: "Il y a 4h", icon: File },
    { name: "Design_System.fig", type: "Figma", date: "Hier", icon: File },
    { name: "Roadmap.md", type: "Markdown", date: "Il y a 2j", icon: File },
    { name: "Analytics_Report.pdf", type: "PDF", date: "Il y a 3j", icon: File }
  ]

  const upcomingEvents = [
    { title: "Réunion équipe", time: "14:00", date: "Aujourd'hui" },
    { title: "Call client ABC", time: "10:30", date: "Demain" },
    { title: "Sprint Review", time: "15:00", date: "Vendredi" }
  ]

  const recentActivity = [
    { action: "Sarah a modifié le projet Design System", time: "Il y a 1h", type: "edit" },
    { action: "Nouveau fichier ajouté dans Fichiers", time: "Il y a 2h", type: "file" },
    { action: "Tâche 'API Integration' terminée", time: "Il y a 3h", type: "task" },
    { action: "Commentaire ajouté sur Mobile App", time: "Il y a 4h", type: "comment" },
    { action: "Réunion planifiée pour demain", time: "Il y a 6h", type: "event" }
  ]

  const deckTasks = [
    { title: "Refonte UI Dashboard", status: "en-cours", priority: "high" },
    { title: "Tests API v2", status: "todo", priority: "medium" },
    { title: "Documentation", status: "en-cours", priority: "low" },
    { title: "Mobile responsive", status: "review", priority: "high" }
  ]

  const unreadMessages = [
    { from: "Marie Dupont", subject: "Rapport mensuel", time: "10:30" },
    { from: "Équipe Design", subject: "Nouvelles maquettes", time: "09:15" },
    { from: "Support Client", subject: "Feedback utilisateur", time: "Hier" }
  ]

  const pinnedNotes = [
    { title: "Réunion de demain", content: "Préparer slides pour présentation Q4" },
    { title: "Idées features", content: "Dashboard temps réel, notifications push" },
    { title: "Contacts importants", content: "CEO: +33 1 23 45 67 89" }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "en-cours": return "text-primary"
      case "todo": return "text-muted-foreground"
      case "review": return "text-warning"
      default: return "text-muted-foreground"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "en-cours": return Clock
      case "todo": return Circle
      case "review": return AlertCircle
      default: return Circle
    }
  }

  return (
    <Layout title="Tableau de bord" icon={LayoutDashboard}>
      <div className="space-y-6 p-6">
        {/* Section de bienvenue */}
        <div className="bg-gradient-primary text-white rounded-xl p-8 shadow-medium">
          <h2 className="text-3xl font-bold mb-2">Bonjour, Alex 👋</h2>
          <p className="text-white/90 text-lg mb-2">Il est {currentTime}</p>
          <p className="text-white/80 text-base capitalize">{currentDate}</p>
        </div>

        {/* Grille de cartes */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Fichiers récents */}
          <Card className="hover:shadow-medium transition-all duration-300 hover:scale-[1.02]">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-2">
                <File className="h-5 w-5 text-primary" />
                <CardTitle className="text-foreground">Fichiers récents</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              {recentFiles.map((file, i) => (
                <div key={i} className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer">
                  <file.icon className="h-4 w-4 text-muted-foreground" />
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium text-foreground truncate">{file.name}</div>
                    <div className="text-xs text-muted-foreground">{file.date}</div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Événements à venir */}
          <Card className="hover:shadow-medium transition-all duration-300 hover:scale-[1.02]">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-2">
                <CalendarIcon className="h-5 w-5 text-primary" />
                <CardTitle className="text-foreground">Événements à venir</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              {upcomingEvents.map((event, i) => (
                <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors cursor-pointer">
                  <div className="h-2 w-2 bg-primary rounded-full"></div>
                  <div className="flex-1">
                    <div className="text-sm font-medium text-foreground">{event.title}</div>
                    <div className="text-xs text-muted-foreground">{event.date} à {event.time}</div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Activité récente */}
          <Card className="hover:shadow-medium transition-all duration-300 hover:scale-[1.02]">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-2">
                <Activity className="h-5 w-5 text-primary" />
                <CardTitle className="text-foreground">Activité récente</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              {recentActivity.map((activity, i) => (
                <div key={i} className="flex items-start gap-3 p-2 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer">
                  <div className="h-2 w-2 bg-accent rounded-full mt-2"></div>
                  <div className="flex-1">
                    <div className="text-sm text-foreground">{activity.action}</div>
                    <div className="text-xs text-muted-foreground">{activity.time}</div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Tâches Deck */}
          <Card className="hover:shadow-medium transition-all duration-300 hover:scale-[1.02]">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-2">
                <Trello className="h-5 w-5 text-primary" />
                <CardTitle className="text-foreground">Tâches Deck</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              {deckTasks.map((task, i) => {
                const StatusIcon = getStatusIcon(task.status)
                return (
                  <div key={i} className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer">
                    <StatusIcon className={`h-4 w-4 ${getStatusColor(task.status)}`} />
                    <div className="flex-1">
                      <div className="text-sm font-medium text-foreground">{task.title}</div>
                      <div className="text-xs text-muted-foreground capitalize">{task.status}</div>
                    </div>
                    <div className={`text-xs px-2 py-1 rounded-full ${
                      task.priority === 'high' ? 'bg-destructive/20 text-destructive' :
                      task.priority === 'medium' ? 'bg-warning/20 text-warning' :
                      'bg-muted text-muted-foreground'
                    }`}>
                      {task.priority}
                    </div>
                  </div>
                )
              })}
            </CardContent>
          </Card>

          {/* Messages non lus */}
          <Card className="hover:shadow-medium transition-all duration-300 hover:scale-[1.02]">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5 text-primary" />
                <CardTitle className="text-foreground">Messages non lus</CardTitle>
                <div className="ml-auto bg-destructive text-destructive-foreground text-xs px-2 py-1 rounded-full">
                  3
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              {unreadMessages.map((message, i) => (
                <div key={i} className="flex items-start gap-3 p-2 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer">
                  <div className="h-2 w-2 bg-destructive rounded-full mt-2"></div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium text-foreground">{message.from}</div>
                    <div className="text-sm text-muted-foreground truncate">{message.subject}</div>
                    <div className="text-xs text-muted-foreground">{message.time}</div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Notes épinglées */}
          <Card className="hover:shadow-medium transition-all duration-300 hover:scale-[1.02]">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-2">
                <StickyNote className="h-5 w-5 text-primary" />
                <CardTitle className="text-foreground">Notes épinglées</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              {pinnedNotes.map((note, i) => (
                <div key={i} className="p-3 rounded-lg bg-accent/10 hover:bg-accent/20 transition-colors cursor-pointer border border-accent/20">
                  <div className="text-sm font-medium text-foreground mb-1">{note.title}</div>
                  <div className="text-xs text-muted-foreground">{note.content}</div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  )
}