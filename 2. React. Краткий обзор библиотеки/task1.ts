async function getElements(): Promise<IElement>{
    const res = await fetch('./component.json');
    return res.json()
}

interface IElement {
    tag: string;
    children: IElement[] | [string] | [];
    attrs: Record<string, string>
}

function createElement(element : IElement) {
    const elem = document.createElement(element.tag);
    for (const key in element.attrs) {
        elem.setAttribute(key, element.attrs[key]);
    }

    if(element.children.length > 0) {
        if(typeof element.children[0] === 'string') {
            elem.textContent = element.children[0]
        } else {
            element.children.forEach(child => {
                elem.appendChild(createElement(child))
            })
        }
    }

    return elem
}

function render(element: IElement) {
    const rootElement = document.querySelector('#root');
    if (!rootElement) {
        console.error('Root element not found!');
        return;
    }
    const currElem = createElement(element)
    rootElement.appendChild(currElem)
}

getElements().then(element => {
    render(element)
});
