import { User2 } from "lucide-react"

const UserDropdown = () => {
    const openPremiumPlan = () => {
        console.log('funcionalidade indisponivel')
    }
    return (
        <div className="flex align-center gap-2">
            <button onClick={()=> openPremiumPlan()} className="bg-white rounded-full pl-4 pr-4 text-zinc-700">
                Ver Planos Premium
            </button>
            <div className="rounded-full bg-black/50 p-1">
                <User2 />
            </div>
        </div>
    )
}
export default UserDropdown