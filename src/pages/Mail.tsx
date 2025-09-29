import { Mail as MailIcon } from "lucide-react"
import { Layout } from "@/components/layout"

export default function Mail() {
  return (
    <Layout title="Mail" icon={MailIcon}>
      <div className="p-6">
        <div className="text-center py-20">
          <MailIcon className="mx-auto h-16 w-16 text-muted-foreground mb-4" />
          <h3 className="text-xl font-semibold text-foreground mb-2">Mail</h3>
          <p className="text-muted-foreground">Cette section sera bientôt disponible.</p>
        </div>
      </div>
    </Layout>
  )
}