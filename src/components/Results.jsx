
import { calculateInvestmentResults } from '../util/investment.js';


export default function Results ({output}) {
const resultsData = calculateInvestmentResults(output);
console.log(resultsData);
return <p>
Results...
</p>


}