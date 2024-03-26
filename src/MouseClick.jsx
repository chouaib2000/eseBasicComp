export function MouseClick() {
    function handleButtonClick(event) {
        event.stopPropagation()
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