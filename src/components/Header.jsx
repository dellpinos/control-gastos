import { NewBudget } from "./NewBudget";
import { BudgetControl } from './BudgetControl';

export const Header = ({ presupuesto, setPresupuesto, isValidPresupuesto, setIsValidPresupuesto }) => {
    return (
        <header>
            <h1>Planificador de Gastos</h1>

            {isValidPresupuesto ? (
                <BudgetControl
                    presupuesto={presupuesto}
                />
            ) : (

                <NewBudget
                    presupuesto={presupuesto}
                    setPresupuesto={setPresupuesto}
                    setIsValidPresupuesto={setIsValidPresupuesto}

                />
            )}


        </header>
    )
}
