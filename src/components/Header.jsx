
import { NewBudget } from "./NewBudget";
import { BudgetControl } from './BudgetControl';

const Header = ({ gastos, presupuesto, setPresupuesto, isValidPresupuesto, setIsValidPresupuesto }) => {
    return (
        <header>
            <h1>Planificador de Gastos</h1>

            {isValidPresupuesto ? (
                <BudgetControl
                    gastos={gastos}
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

export default Header