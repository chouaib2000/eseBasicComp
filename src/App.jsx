import { Clock } from "./Clock";
import { AlertClock } from "./Events";
import { MouseClick } from "./MouseClick";
import { State } from "./State";
import { State2 } from "./State2";
import { Welcome } from "./Welcome";



export function App() {
    return (
        <div>
            <Welcome name='paolo' age={31} />
            <AlertClock />
            <State initialValue={40} />
            <State2 />
            <Clock />
            <MouseClick />
        </div>
    ) 
    
}



