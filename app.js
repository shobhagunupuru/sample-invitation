document.addEventListener('DOMContentLoaded', () => {


    const form = document.getElementById('registrar');
    const input = form.querySelector('input');

    const ul = document.getElementById('invitedList');
    const mainDiv = document.querySelector('.main');
    const div = document.createElement('div');
    const Filterlabel = document.createElement('label');
    const filterCheckbox = document.createElement('input');

    Filterlabel.textContent = 'Hide those who havent Responded';
    filterCheckbox.type = 'checkbox';
    div.appendChild(Filterlabel);
    div.appendChild(filterCheckbox);
    mainDiv.insertBefore(div, ul);
    //to hide the list items


    filterCheckbox.addEventListener('change', (e) => {
        const isChecked = e.target.checked;
        const lis = ul.children;
        if (isChecked) {
            for (let i = 0; i < lis.length; i += 1) {
                let li = lis[i];
                if (li.className === 'responded') {
                    li.style.display = '';
                } else {
                    li.style.display = 'none'
                }

            }
        } else {
            for (let i = 0; i < lis.length; i += 1) {
                let li = lis[i];
                li.style.display = '';
            }
        }


    });

    function createLI(text) {


        function createElement(elementName, property, value) {

            const element = document.createElement(elementName);
            element[property] = value;
            return element;


        }

        function appendToLi(elementName, property, value) {
            const element = createElement(elementName, property, value);
            li.appendChild(element);

            return element;
        }
        const li = document.createElement('li');

        appendToLi('span', 'textContent', text);



        appendToLi('label', 'textContent', 'Confirmed')
            .appendChild(createElement('input', 'type', 'checkbox'));


        //edit button
        appendToLi('button', 'textContent', 'Edit');




        //remove button
        appendToLi('button', 'textContent', 'remove');


        return li;

    }

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const text = input.value;

        input.value = '';
        if (text == '') {
            alert('Please enter the guests name');
            return false;
        }

        const li = createLI(text);
        ul.appendChild(li);


    });


    //adding class to the list items to change the colour or the box  
    ul.addEventListener('change', (e) => {

        const checkbox = event.target;
        const checked = checkbox.checked;
        const listItem = checkbox.parentNode.parentNode;
        if (checked) {
            listItem.className = 'responded';
        } else {
            listItem.className = '';
        }

    });

    // adding click event to the remove and edit button  

    ul.addEventListener('click', (e) => {

        if (e.target.tagName == 'BUTTON') {
            const button = e.target;
            const li = button.parentNode;
            const ul = li.parentNode;
            if (button.textContent == 'remove') {

                ul.removeChild(li);
            } else if (button.textContent === 'Edit') {

                const span = li.firstElementChild;
                const input = document.createElement('input');
                input.type = 'text';
                input.value = span.textContent;
                li.insertBefore(input, span);
                li.removeChild(span);
                button.textContent = 'save';


            } else if (button.textContent === 'save') {

                const input = li.firstElementChild;
                const span = document.createElement('span');
                span.textContent = input.value;
                li.insertBefore(span, input);
                li.removeChild(input);
                button.textContent = 'Edit';


            }


        }

    });

});