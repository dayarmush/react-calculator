import { useState, useEffect } from "react"

function Calculator() {

    const [total, setTotal] = useState(0)
    const [opp, setOpp] = useState('+')
    const [values, setValues] = useState({
        num1: 0,
        num2: 0,
    })

    useEffect(() => {
        calculate()
    }, [values.num1, values.num2, opp])

    function handleChange(e) {
        const key = e.target.name
        const value = e.target.value
        setValues(pre => {
            return {...pre, [key]: parseInt(value)}
        })
    }
    
    function calculate() {
    console.log(values, opp)
        if (isNaN(values.num1)) {
            setTotal(0)
        } else if (isNaN(values.num2)) {
            setTotal(0)
        } else {
            if (opp === '+') {
                setTotal(values.num1 + values.num2);
            } else if (opp === '-') {
                setTotal(values.num1 - values.num2);
            } else if (opp === 'x') {
                setTotal(values.num1 * values.num2);
            } else if (opp === '/') {
                setTotal(values.num1 / values.num2);
            }
        }   
    }

    // function calculate() {
    //     if (isNaN(values.num1)) {
    //         setTotal(0);
    //     } else if (isNaN(values.num2)) {
    //         setTotal(0);
    //     } else {
    //         switch (opp) {
    //             case '+':
    //                 setTotal(values.num1 + values.num2);
    //                 break;
    //             case '-':
    //                 setTotal(values.num1 - values.num2);
    //                 break;
    //             case 'x':
    //                 setTotal(values.num1 * values.num2);
    //                 break;
    //             case '/':
    //                 if (values.num2 !== 0) {
    //                     setTotal(values.num1 / values.num2);
    //                 } else {
    //                     setTotal('Error: Division by zero');
    //                 }
    //                 break;
    //             default:
    //                 setTotal('Invalid operator');
    //         }
    //     }
    // }

    return (
        <form>
            <input type="number" name="num1" onChange={handleChange}/>
            <select onChange={(e) => setOpp(e.target.value)} name="function">
                <option>+</option>
                <option>-</option>
                <option>x</option>
                <option>/</option>
            </select>
            <input type="number" name="num2" onChange={handleChange}/>
            <h4>Result: {total}</h4>
        </form>
    )
}

export default Calculator