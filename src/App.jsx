import { Clock } from "./Clock";
import { Container } from "./Container";
import { AlertClock } from "./Events/AlertClock";
import { MouseClick } from "./MouseClick";
import { MyUncontrolledForm } from "./MyUncontrolledForm";
import { Myform } from "./Myform";
// import { Mylist } from "./Mylist";
import { State } from "./State";
import { State2 } from "./State2/Counter";
import { Welcome } from "./Welcome";



export function App() {
    return (
        <Container title={<h1>My awesome Application</h1>}>
            <Welcome name='paolo' age={31} />
            <Welcome />
            <AlertClock />
            <State initialValue={40} />
            <State2 />
            <Clock />
            <MouseClick />
            <Myform />
            <MyUncontrolledForm />
            {/* <Mylist items={[
                {id: 1, name: 'jane', age: 33},
                {id: 2, name: 'kate', age: 20},
                {id: 3, name: 'john', age: 50},
                {id: 4, name: 'billy',age: 90},
                {id: 5, name: 'jane', age: 3},
            ]} /> */}
        </Container>
    ) 
    
}



