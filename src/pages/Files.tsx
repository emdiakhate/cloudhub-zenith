import { FolderOpen } from "lucide-react"
import { Layout } from "@/components/layout"

export default function Files() {
  return (
    <Layout title="Fichiers" icon={FolderOpen}>
      <div className="p-6">
        <div className="text-center py-20">
          <FolderOpen className="mx-auto h-16 w-16 text-muted-foreground mb-4" />
          <h3 className="text-xl font-semibold text-foreground mb-2">Gestionnaire de fichiers</h3>
          <p className="text-muted-foreground">Cette section sera bientôt disponible.</p>
        </div>
      </div>
    </Layout>
  )
}