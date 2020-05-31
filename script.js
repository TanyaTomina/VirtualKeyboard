const keyCodesMy = [
    [{en: '`', ru: 'ё', code: 'Backquote', enShiftCode: '~', ruShiftCode: 'Ё'},
        {en: '1', ru: '1', code: 'Digit1', enShiftCode: '!', ruShiftCode: '!'},
        {en: '2', ru: '2', code: 'Digit2', enShiftCode: '@', ruShiftCode: '№'},
        {en: '3', ru: '3', code: 'Digit3', enShiftCode: '#', ruShiftCode: ';'},
        {en: '4', ru: '4', code: 'Digit4', enShiftCode: '$', ruShiftCode: '%'},
        {en: '5', ru: '5', code: 'Digit5', enShiftCode: '%', ruShiftCode: '%'},
        {en: '6', ru: '6', code: 'Digit6', enShiftCode: '^', ruShiftCode: ':'},
        {en: '7', ru: '7', code: 'Digit7', enShiftCode: '\&', ruShiftCode: '?'},
        {en: '8', ru: '8', code: 'Digit8', enShiftCode: '*', ruShiftCode: '*'},
        {en: '9', ru: '9', code: 'Digit9', enShiftCode: '(', ruShiftCode: '('},
        {en: '0', ru: '0', code: 'Digit0', enShiftCode: ')', ruShiftCode: ')'},
        {en: '-', ru: '-', code: 'Minus', enShiftCode: '_', ruShiftCode: '_'},
        {en: '=', ru: '=', code: 'Equal', enShiftCode: '+', ruShiftCode: '+'},
        {en: 'Backspace', ru: 'Backspace', code: 'Backspace', enShiftCode: '', ruShiftCode: ''}],
    [{en: 'Tab', ru: 'Tab', code: 'Tab', enShiftCode: '', ruShiftCode: ''},
        {en: 'q', ru: 'й', code: 'KeyQ', enShiftCode: '', ruShiftCode: ''},
        {en: 'w', ru: 'ц', code: 'KeyW', enShiftCode: '', ruShiftCode: ''},
        {en: 'e', ru: 'у', code: 'KeyE', enShiftCode: '', ruShiftCode: ''},
        {en: 'r', ru: 'к', code: 'KeyR', enShiftCode: '', ruShiftCode: ''},
        {en: 't', ru: 'е', code: 'KeyT', enShiftCode: '', ruShiftCode: ''},
        {en: 'y', ru: 'н', code: 'KeyY', enShiftCode: '', ruShiftCode: ''},
        {en: 'u', ru: 'г', code: 'KeyU', enShiftCode: '', ruShiftCode: ''},
        {en: 'i', ru: 'ш', code: 'KeyI', enShiftCode: '', ruShiftCode: ''},
        {en: 'o', ru: 'щ', code: 'KeyO', enShiftCode: '', ruShiftCode: ''},
        {en: 'p', ru: 'з', code: 'KeyP', enShiftCode: '', ruShiftCode: ''},
        {en: '[', ru: 'х', code: 'BracketLeft', enShiftCode: '{', ruShiftCode: ''},
        {en: ']', ru: 'ъ', code: 'BracketRight', enShiftCode: '}', ruShiftCode: ''},
        {en: '\\', ru: '\\', code: 'Backslash', enShiftCode: '|', ruShiftCode: '/'},
        {en: 'Del', ru: 'Del', code: 'Delete', enShiftCode: '', ruShiftCode: ''}],
    [{en: 'CapsLock', ru: 'CapsLock', code: 'CapsLock', enShiftCode: '', ruShiftCode: ''},
        {en: 'a', ru: 'ф', code: 'KeyA', enShiftCode: '', ruShiftCode: ''},
        {en: 's', ru: 'ы', code: 'KeyS', enShiftCode: '', ruShiftCode: ''},
        {en: 'd', ru: 'в', code: 'KeyD', enShiftCode: '', ruShiftCode: ''},
        {en: 'f', ru: 'а', code: 'KeyF', enShiftCode: '', ruShiftCode: ''},
        {en: 'g', ru: 'п', code: 'KeyG', enShiftCode: '', ruShiftCode: ''},
        {en: 'h', ru: 'р', code: 'KeyH', enShiftCode: '', ruShiftCode: ''},
        {en: 'j', ru: 'о', code: 'KeyJ', enShiftCode: '', ruShiftCode: ''},
        {en: 'k', ru: 'л', code: 'KeyK', enShiftCode: '', ruShiftCode: ''},
        {en: 'l', ru: 'д', code: 'KeyL', enShiftCode: '', ruShiftCode: ''},
        {en: ';', ru: 'ж', code: 'Semicolon', enShiftCode: ':', ruShiftCode: ''},
        {en: '\'', ru: 'э', code: 'Quote', enShiftCode: '\"', ruShiftCode: ''},
        {en: 'Enter', ru: 'Enter', code: 'Enter', enShiftCode: '', ruShiftCode: ''}],
    [{en: 'Shift', ru: 'Shift', code: 'ShiftLeft', enShiftCode: '', ruShiftCode: ''},
        {en: 'z', ru: 'я', code: 'KeyZ', enShiftCode: '', ruShiftCode: ''},
        {en: 'x', ru: 'ч', code: 'KeyX', enShiftCode: '', ruShiftCode: ''},
        {en: 'c', ru: 'с', code: 'KeyC', enShiftCode: '', ruShiftCode: ''},
        {en: 'v', ru: 'м', code: 'KeyV', enShiftCode: '', ruShiftCode: ''},
        {en: 'b', ru: 'и', code: 'KeyB', enShiftCode: '', ruShiftCode: ''},
        {en: 'n', ru: 'т', code: 'KeyN', enShiftCode: '', ruShiftCode: ''},
        {en: 'm', ru: 'ь', code: 'KeyM', enShiftCode: '', ruShiftCode: ''},
        {en: ',', ru: 'б', code: 'Comma', enShiftCode: '', ruShiftCode: ''},
        {en: '.', ru: 'ю', code: 'Period', enShiftCode: '', ruShiftCode: ''},
        {en: '/', ru: '.', code: 'Slash', enShiftCode: ':', ruShiftCode: ''},
        {en: '&#8593;', ru: '&#8593;', code: 'ArrowUp', enShiftCode: '', ruShiftCode: ''},
        {en: 'Shift', ru: 'Shift', code: 'ShiftRight', enShiftCode: '', ruShiftCode: ''}],
    [{en: 'Ctrl', ru: 'Ctrl', code: 'ControlLeft', enShiftCode: '', ruShiftCode: ''},
        {en: 'Win', ru: 'Win', code: 'Win', enShiftCode: '', ruShiftCode: ''},
        {en: 'Alt', ru: 'Alt', code: 'AltLeft', enShiftCode: '', ruShiftCode: ''},
        {en: 'Space', ru: 'Space', code: 'Space', enShiftCode: '', ruShiftCode: ''},
        {en: 'Alt', ru: 'Alt', code: 'AltRight', enShiftCode: '', ruShiftCode: ''},
        {en: 'Ctrl', ru: 'Ctrl', code: 'ControlRight', enShiftCode: '', ruShiftCode: ''},
        {en: '&#8592;', ru: '&#8592;', code: 'ArrowLeft', enShiftCode: '', ruShiftCode: ''},
        {en: '&#8595;', ru: '&#8595;', code: 'ArrowDown', enShiftCode: '', ruShiftCode: ''},
        {en: '&#8594;', ru: '&#8594;', code: 'ArrowRight', enShiftCode: '', ruShiftCode: ''}]
];

let divWrapper = document.createElement('div');
divWrapper.className = "wrapper";
document.body.prepend(divWrapper);
divWrapper.insertAdjacentHTML('afterbegin', '<textarea id="wrapper-text" class="wrapper-text" autofocus></textarea>');
divWrapper.insertAdjacentHTML('beforeend', '<div id="wrapper-keyboard" class="wrapper-keyboard"></div>');
divWrapper.insertAdjacentHTML('beforeend', '<div class="wrapper-description">Клавиатура разработана в Windows OS' +
    '<br>Ctrl + Shift - комбинация для переключения языка или Alt + Shift</div>');
const WRAPPER_KEYBOARD = document.getElementById('wrapper-keyboard');
const WRAPPER_TEXT = document.getElementById('wrapper-text');
let shiftOn = false;
let ctrlOn = false;
let altOn = false;
let languageRu = localStorage.getItem("languageRu") === 'true';
let capsLockOn = false;
let positionCursor = 0;


function keySearch(code) {
    for (let i = 0; i < keyCodesMy.length; i++) {
        for (let j = 0; j < keyCodesMy[i].length; j++) {
           if (keyCodesMy[i][j].code === code) {
               return keyCodesMy[i][j];
           }
        }
    }
}

function createText(code) {
    let element = keySearch(code);
    if (element) {
        if (element.en.length === 1) {
            let startString = WRAPPER_TEXT.innerHTML.slice(0, positionCursor);
            let endString = WRAPPER_TEXT.innerHTML.slice(positionCursor);
            if (!languageRu) {
                if ((!shiftOn && capsLockOn) || (shiftOn && !capsLockOn)) {
                    if (element.enShiftCode && !capsLockOn) {
                        WRAPPER_TEXT.innerHTML = startString + element.enShiftCode.toString() + endString;
                    } else {
                        WRAPPER_TEXT.innerHTML = startString + element.en.toString().toUpperCase() + endString;
                    }
                } else {
                    if (shiftOn && capsLockOn && element.enShiftCode) {
                        WRAPPER_TEXT.innerHTML = startString + element.enShiftCode.toString() + endString;
                    } else {
                        WRAPPER_TEXT.innerHTML = startString + element.en.toString() + endString;
                    }
                }
            } else if (languageRu) {
                if ((!shiftOn && capsLockOn) || (shiftOn && !capsLockOn)) {
                    if (element.ruShiftCode && !capsLockOn) {
                        WRAPPER_TEXT.innerHTML = startString + element.ruShiftCode.toString() + endString;
                    } else {
                        WRAPPER_TEXT.innerHTML = startString + element.ru.toString().toUpperCase() + endString;
                    }
                } else {
                    if (shiftOn && capsLockOn && element.ruShiftCode) {
                        WRAPPER_TEXT.innerHTML = startString + element.ruShiftCode.toString() + endString;
                    } else {
                        WRAPPER_TEXT.innerHTML = startString + element.ru.toString() + endString;
                    }
                }
            }
            positionCursor++;
        } else if (element.en === 'Enter') {
            WRAPPER_TEXT.innerHTML = WRAPPER_TEXT.innerHTML.slice(0, positionCursor) + '\n' + WRAPPER_TEXT.innerHTML.slice(positionCursor);
            positionCursor++;
        } else if (element.en === 'Backspace') {
            let newArray = WRAPPER_TEXT.innerHTML.toString().split('');
            newArray.splice(positionCursor - 1, 1);
            WRAPPER_TEXT.innerHTML = newArray.join('');
            positionCursor--;
        } else if (element.en === 'Space') {
            WRAPPER_TEXT.innerHTML = WRAPPER_TEXT.innerHTML.slice(0, positionCursor) + ' ' + WRAPPER_TEXT.innerHTML.slice(positionCursor);
            positionCursor++;
        } else if (element.en === 'Tab') {
            WRAPPER_TEXT.innerHTML = WRAPPER_TEXT.innerHTML.slice(0, positionCursor) + '  ' + WRAPPER_TEXT.innerHTML.slice(positionCursor);
            positionCursor = positionCursor + 2;
        } else if (element.code === 'ArrowLeft') {
            positionCursor--;
        } else if (element.code === 'ArrowRight') {
            positionCursor++;
        } else if (element.en === 'Del') {
            let array = WRAPPER_TEXT.innerHTML.toString().split('');
            let removed = array.splice(positionCursor, 1);
            WRAPPER_TEXT.innerHTML = array.join('');
        } else if (element.en === 'CapsLock') {
            capsLockOn = !capsLockOn;
        } else if (element.code === 'ArrowUp') {
            let positionInCurrentLine = positionCursor - WRAPPER_TEXT.innerHTML.slice(0, positionCursor).lastIndexOf('\n');
            let positionLastNewLine = WRAPPER_TEXT.innerHTML.slice(0, positionCursor).lastIndexOf('\n');
            let positionPreLastNewLine = WRAPPER_TEXT.innerHTML.slice(0, positionLastNewLine).lastIndexOf('\n');
            if (positionLastNewLine >= 0) {
                if (positionInCurrentLine <= (positionLastNewLine - positionPreLastNewLine)) {
                    positionCursor = positionPreLastNewLine + positionInCurrentLine;
                } else {
                    positionCursor = positionLastNewLine;
                }
            }
        } else if (element.code === 'ArrowDown') {
            let positionInCurrentLine = positionCursor - WRAPPER_TEXT.innerHTML.slice(0, positionCursor).lastIndexOf('\n');
            let positionFirstNewLine = positionCursor + WRAPPER_TEXT.innerHTML.slice(positionCursor).indexOf('\n');
            let positionNextLineAfterFirst = positionFirstNewLine + 1 + WRAPPER_TEXT.innerHTML.slice(positionFirstNewLine + 1).indexOf('\n');
            if (WRAPPER_TEXT.innerHTML.slice(positionCursor).indexOf('\n') !== -1) {
                if (WRAPPER_TEXT.innerHTML.slice(positionFirstNewLine + 1).indexOf('\n') === -1) {
                    positionNextLineAfterFirst = WRAPPER_TEXT.innerHTML.length - 1;
                }
                if (positionInCurrentLine <= (positionNextLineAfterFirst - positionFirstNewLine)) {
                    positionCursor = positionInCurrentLine + positionFirstNewLine;
                } else {
                    positionCursor = positionNextLineAfterFirst;
                }
            }
        }
    }
    if (positionCursor < 0) {
        positionCursor = 0;
    } else if (positionCursor > WRAPPER_TEXT.innerHTML.length) {
        positionCursor = WRAPPER_TEXT.innerHTML.length - 1;
    }
    setFocus(positionCursor);
}

function switchLanguage(button1, button2) {
    if (button1 && button2) {
        languageRu = !languageRu;
        localStorage.setItem('languageRu', languageRu);
        WRAPPER_KEYBOARD.querySelectorAll('.row').forEach(function (row) {
                row.remove();
            }
        )
        createKeyboard();
    }
}

function createKeyboard() {
    let i = 0;
    keyCodesMy.forEach(row => {
        let buttonsRow = document.createElement('div');
        i++;
        buttonsRow.className = 'row row' + [i];
        WRAPPER_KEYBOARD.appendChild(buttonsRow);
        row.forEach(element => {
            let divButton = document.createElement('div');
            divButton.className = 'button';
            divButton.setAttribute('data-code', element.code);
            if (languageRu) {
                if (element.enShiftCode) {
                    divButton.innerHTML += '<p><span>'+ element.ruShiftCode +'</span></p>';
                }
            } else {
                divButton.innerHTML += '<p><span>'+ element.enShiftCode +'</span></p>';
            }
            if (languageRu) {
                divButton.innerHTML += '<p><span>'+ element.ru +'</span></p>';
            } else {
                divButton.innerHTML += '<p><span>'+ element.en +'</span></p>';
            }
            buttonsRow.appendChild(divButton);
        })
    })
}

createKeyboard();


document.onkeydown = function (event) {
    event.preventDefault();
    document.querySelector('.button[data-code="'+ event.code +'"]').classList.add('active');
    createText(event.code);
    shiftOn = event.shiftKey;
    ctrlOn = event.ctrlKey;
    altOn = event.altKey;
    positionCursor = WRAPPER_TEXT.selectionStart;
    switchLanguage(shiftOn, ctrlOn);
    switchLanguage(shiftOn, altOn);
};

document.onkeyup = function (event) {
    document.querySelector('.button[data-code="'+ event.code +'"]').classList.remove('active');
    shiftOn = event.shiftKey;
    ctrlOn = event.ctrlKey;
    altOn = event.altKey;
};

WRAPPER_KEYBOARD.addEventListener('click', (event) => {
    if (event.target.classList.contains('button') || event.target.parentNode.classList.contains('button') || event.target.parentNode.parentNode.classList.contains('button')) {
        if (event.target.parentNode.classList.contains('button')) {
            event.target.parentNode.classList.add('active');
            createText(event.target.parentNode.getAttribute('data-code'));
            setTimeout( function () {
                    event.target.parentNode.classList.remove('active');
                },250
            );
        } else if (event.target.parentNode.parentNode.classList.contains('button')) {
            event.target.parentNode.parentNode.classList.add('active');
            createText(event.target.parentNode.parentNode.getAttribute('data-code'));
            setTimeout( function () {
                    event.target.parentNode.parentNode.classList.remove('active');
                },250
            );
        } else {
            event.target.classList.add('active');
            createText(event.target.getAttribute('data-code'));
            setTimeout( function () {
                    event.target.classList.remove('active');
                },250
            );
        }
    }
    setFocus(positionCursor);
});

function setFocus(positionCursor) {
    WRAPPER_TEXT.focus();
    WRAPPER_TEXT.setSelectionRange(positionCursor, positionCursor);
}

WRAPPER_TEXT.addEventListener('click', (event) => {
    positionCursor = WRAPPER_TEXT.selectionStart;
});