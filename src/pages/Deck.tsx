import { Trello } from "lucide-react"
import { Layout } from "@/components/layout"

export default function Deck() {
  return (
    <Layout title="Deck" icon={Trello}>
      <div className="p-6">
        <div className="text-center py-20">
          <Trello className="mx-auto h-16 w-16 text-muted-foreground mb-4" />
          <h3 className="text-xl font-semibold text-foreground mb-2">Tableau Kanban</h3>
          <p className="text-muted-foreground">Cette section sera bientôt disponible.</p>
        </div>
      </div>
    </Layout>
  )
}