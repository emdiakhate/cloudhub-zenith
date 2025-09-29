import { MessageSquare } from "lucide-react"
import { Layout } from "@/components/layout"

export default function Discussion() {
  return (
    <Layout title="Discussion" icon={MessageSquare}>
      <div className="p-6">
        <div className="text-center py-20">
          <MessageSquare className="mx-auto h-16 w-16 text-muted-foreground mb-4" />
          <h3 className="text-xl font-semibold text-foreground mb-2">Discussion</h3>
          <p className="text-muted-foreground">Cette section sera bientôt disponible.</p>
        </div>
      </div>
    </Layout>
  )
}