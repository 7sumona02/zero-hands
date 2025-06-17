import { X } from "lucide-react"
import { Input } from '@/components/ui/input'

export default function Search() {
  return (
    <div className="*:not-first:mt-2 pb-10">
      <div className="relative">
        <Input className="peer pe-9 text-2xl py-8 font-serif" placeholder="About my" type="about" />
        <div className="text-muted-foreground/80 pointer-events-none absolute inset-y-0 end-0 flex items-center justify-center pe-1 peer-disabled:opacity-50">
          <X size={16} aria-hidden="true" />
        </div>
      </div>
    </div>
  )
}
