import { Activity as ActivityIcon } from "lucide-react"
import { Layout } from "@/components/layout"

export default function Activity() {
  return (
    <Layout title="Activité" icon={ActivityIcon}>
      <div className="p-6">
        <div className="text-center py-20">
          <ActivityIcon className="mx-auto h-16 w-16 text-muted-foreground mb-4" />
          <h3 className="text-xl font-semibold text-foreground mb-2">Activité</h3>
          <p className="text-muted-foreground">Cette section sera bientôt disponible.</p>
        </div>
      </div>
    </Layout>
  )
}