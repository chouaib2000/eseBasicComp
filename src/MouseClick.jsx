export function MouseClick() {
    function handleButtonClick(event) {
        console.log(event.target.src)
    }

    return (
        <div>
            <button onClick={handleButtonClick}>
                <img src="image-url.jpg" alt="Button image" />
                Click me!
                </button>
        </div>
    )
}