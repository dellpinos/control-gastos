import { NewBudget } from "./NewBudget";

export const Header = ({ presupuesto, setPresupuesto }) => {
    return (
        <header>
            <h1>Planificador de Gastos</h1>

            <NewBudget
                presupuesto={presupuesto}
                setPresupuesto={setPresupuesto}
                
            />
        </header>
    )
}
