
import { NewBudget } from "./NewBudget";
import { BudgetControl } from './BudgetControl';

const Header = ({ gastos, setGastos, presupuesto, setPresupuesto, isValidPresupuesto, setIsValidPresupuesto }) => {
    return (
        <header>
            <h1>Planificador de Gastos</h1>

            {isValidPresupuesto ? (
                <BudgetControl
                    gastos={gastos}
                    setGastos={setGastos}
                    presupuesto={presupuesto}
                    setPresupuesto={setPresupuesto}
                    setIsValidPresupuesto={setIsValidPresupuesto}
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