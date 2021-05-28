(function ($) {
    const body = $.body;

    // calistiginda domdan elementi cekecek
    function getElement(key) {
        return $.querySelector(key);
    }

    function newElement(tag, attributes) {
        const el = $.createElement(tag);

        if (attributes) {
            if (attributes.className) {
                el.className = attributes.className;
            }
            if (attributes.id) {
                el.id = attributes.id;
            }
            if (attributes.innerHTML) {
                el.innerHTML = attributes.innerHTML;
            }
            if (attributes.innerText) {
                el.innerText = attributes.innerText;
            }
            if (attributes.style) {
                el.style = attributes.style;
            }
            if (attributes.type) {
                el.type = attributes.type;
            }
            if (attributes.placeholder) {
                el.placeholder = attributes.placeholder;
            }
        }
        return el;
    }

    // appendChild functionimizi hazirliyoruz
    function icineEkle(el, ...childs) { // parametre mutasyona ugramasin 
        let selectedElement = el //die bos bir kutu yarattik 
        const egerIlkParametreStringIse = typeof selectedElement === 'string'
        if (egerIlkParametreStringIse) {
            selectedElement = getElement(el);
            if (!selectedElement) {
                selectedElement = newElement('main', {
                    id: el
                });
                icineEkle($.body, selectedElement);
            }
        }
        childs.forEach((child) => {
            selectedElement.appendChild(child);
        });
        return el;
    }

    function generateToDo(parentTag) {
        // Elemntlerimizi yaratiyoruz ve classlarini veriyoruz functionimizla :D
        const main = newElement('main');
        const section = newElement('section');
        const container = newElement('div', {
            className: 'container'
        });
        const listBlock = newElement('div', {
            className: 'listBlock'
        });
        const li = newElement('li');
        const newTaskInput = newElement('input', {
            className: 'newTaskInput',
            type: 'text'
        });
        const searchInput = newElement('input', {
            type: 'search'
        });
        const list = newElement('ul', {
            className: 'list'
        });
        const search = newElement('div', {
            className: 'search'
        });
        const actionBlock = newElement('div', {
            className: 'actionBlock'
        });
        const btn = newElement('button', {
            className: 'btn',
            innerText: 'Add',
            style: {
                color: 'blue',
            }
        });

        // AppendChild ekledik functionimizla...
        icineEkle(parentTag, main);
        icineEkle(search, searchInput);
        icineEkle(actionBlock, newTaskInput, btn);
        icineEkle(body, main);
        icineEkle(main, section)
        icineEkle(section, newElement('header', {
            innerHTML: '<h1>To-Do</h1>'
        }), container);
        icineEkle(container, listBlock, search, actionBlock);
        icineEkle(listBlock, icineEkle(list, li));
    }

    generateToDo("#bir");
    generateToDo("#bir");
})(document)
