import { Calendar as CalendarIcon } from "lucide-react"
import { Layout } from "@/components/layout"

export default function Calendar() {
  return (
    <Layout title="Agenda" icon={CalendarIcon}>
      <div className="p-6">
        <div className="text-center py-20">
          <CalendarIcon className="mx-auto h-16 w-16 text-muted-foreground mb-4" />
          <h3 className="text-xl font-semibold text-foreground mb-2">Calendrier</h3>
          <p className="text-muted-foreground">Cette section sera bientôt disponible.</p>
        </div>
      </div>
    </Layout>
  )
}