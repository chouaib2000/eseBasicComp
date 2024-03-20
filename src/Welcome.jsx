import { Age } from "./Age";

export function Welcome({ name, age }) {
    return (
        <div>
            <h2>Welcome, <strong>{ name }</strong></h2>
            {age > 18 && <Age age={age} />}
            {age && <Age age={age} />}
            {(age > 18 && age < 65) && <Age age={age} />}
            {(age > 18 && age < 65) && name === 'paolo' && <Age age={age} />}
        </div>
    )
}