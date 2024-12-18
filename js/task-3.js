/* #завдання */
/*


Доповни код функції так, щоб вона повертала число —загальну ширину елемента. 
При розрахунку загальної ширини орієнтуйся на те, що значення box-sizing дорівнює border-box.

Візьми код нижче і встав після оголошення своєї функції для перевірки коректності її роботи. 
У консоль будуть виведені результати її роботи.

console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200

На що буде звертати увагу ментор при перевірці:

Оголошена функція getElementWidth(content, padding, border)
Виклик getElementWidth("50px", "8px", "4px") повертає число 74
Виклик getElementWidth("60px", "12px", "8.5px") повертає число 101
Виклик getElementWidth("200px", "0px", "0px") повертає число 200
Виклик getElementWidth з будь якими-валідними аргументами повертає правильне значення
*/

`use strict`;
    function getElementWidth(content, padding, border) {
        const contentWidth = parseFloat (content);
        const paddingWidth = parseFloat (padding) * 2;
        const borderWidth = parseFloat (border) * 2;

    return contentWidth + paddingWidth + borderWidth;
    }

    /* Перевiрка функцii */
    console.log(getElementWidth("50px", "8px", "4px")); // 74
    console.log(getElementWidth("60px", "12px", "8.5px")); // 101
    console.log(getElementWidth("200px", "0px", "0px")); // 200