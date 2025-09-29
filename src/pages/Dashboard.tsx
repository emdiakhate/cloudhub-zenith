import { LayoutDashboard, TrendingUp, Users, FolderOpen } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Layout } from "@/components/layout"

export default function Dashboard() {
  const stats = [
    {
      title: "Projets actifs",
      value: "12",
      description: "+2 ce mois",
      icon: FolderOpen,
      trend: "up"
    },
    {
      title: "Équipes",
      value: "4",
      description: "3 collaborateurs",
      icon: Users,
      trend: "stable"
    },
    {
      title: "Productivité",
      value: "94%",
      description: "+12% vs. dernier mois",
      icon: TrendingUp,
      trend: "up"
    }
  ]

  return (
    <Layout title="Tableau de bord" icon={LayoutDashboard}>
      <div className="space-y-8 p-6">
        {/* Welcome Section */}
        <div className="bg-gradient-primary text-white rounded-xl p-8 shadow-medium">
          <h2 className="text-3xl font-bold mb-2">Bienvenue sur CloudHub</h2>
          <p className="text-white/90 text-lg">
            Votre espace de travail moderne pour une productivité optimale.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {stats.map((stat) => (
            <Card key={stat.title} className="hover:shadow-medium transition-shadow duration-300">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.title}
                </CardTitle>
                <stat.icon className="h-5 w-5 text-primary" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-foreground mb-1">{stat.value}</div>
                <p className={`text-xs ${
                  stat.trend === 'up' ? 'text-success' : 'text-muted-foreground'
                }`}>
                  {stat.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="hover:shadow-medium transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-foreground">Actions rapides</CardTitle>
              <CardDescription>
                Accédez rapidement à vos outils favoris
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <button className="w-full text-left p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                <div className="font-medium text-foreground">Créer un nouveau projet</div>
                <div className="text-sm text-muted-foreground">Démarrer un projet collaboratif</div>
              </button>
              <button className="w-full text-left p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                <div className="font-medium text-foreground">Planifier une réunion</div>
                <div className="text-sm text-muted-foreground">Organiser votre agenda</div>
              </button>
              <button className="w-full text-left p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                <div className="font-medium text-foreground">Analyser l'activité</div>
                <div className="text-sm text-muted-foreground">Consulter les métriques</div>
              </button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-medium transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-foreground">Activité récente</CardTitle>
              <CardDescription>
                Dernières actions de votre équipe
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg">
                <div className="h-2 w-2 bg-primary rounded-full"></div>
                <div className="flex-1">
                  <div className="text-sm font-medium text-foreground">Projet Design System mis à jour</div>
                  <div className="text-xs text-muted-foreground">Il y a 2 heures</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg">
                <div className="h-2 w-2 bg-accent rounded-full"></div>
                <div className="flex-1">
                  <div className="text-sm font-medium text-foreground">3 nouveaux fichiers partagés</div>
                  <div className="text-xs text-muted-foreground">Il y a 4 heures</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg">
                <div className="h-2 w-2 bg-success rounded-full"></div>
                <div className="flex-1">
                  <div className="text-sm font-medium text-foreground">Réunion équipe planifiée</div>
                  <div className="text-xs text-muted-foreground">Hier</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  )
}