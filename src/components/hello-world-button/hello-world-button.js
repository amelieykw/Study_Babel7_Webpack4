class HelloWorldButton {

    render() {
        const button = document.createElement('button');
        button.innerHTML = 'Hello world';
        const body = document.querySelector('body');
        button.onclick = function () {
            const p = document.createElement('p');
            p.innerHTML = 'Hello world';
            body.appendChild(p);
        }
        body.appendChild(button);
    }
}

export default HelloWorldButton;