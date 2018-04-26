/*jshint browser: true, esversion: 6, jquery: true */

document.onreadystatechange = function()
{
    if(document.readyState === "interactive")
    {
        var i = 0;
        var counter = 0;

        var map = new Map();
        map.set("myTitle", "mmazepa: ES6 Learning");
        document.title = map.get("myTitle");

        document.onkeydown = function(e)
        {
            var colors =
            [
                "black",
                "purple",
                "cyan",
                "goldenrod",
                "magenta",
                "silver"
            ];
            if(e.keyCode === 13)
            {
                document.getElementsByTagName("body")[0].style.backgroundColor = colors[i%colors.length];
                i++;
            }
        };

        const capitalizeFirst = (textToCapitalize, addDot) =>
        {
            if (addDot) textToCapitalize = textToCapitalize + ".";
            return textToCapitalize.charAt(0).toUpperCase() + textToCapitalize.slice(1);
        };

        const elementCreator = (parentElement, childElement, text, isSentence) =>
        {
            var element = document.createElement(childElement);
            var textContent = document.createTextNode(capitalizeFirst(text, isSentence));
            element.appendChild(textContent);
            parentElement.appendChild(element);
        };

        map.set("header", "this is the header of this page");
        map.set("main", "this is main section of this page, " +
                        "it will be good to check " +
                        "all of it's functionality");
        map.set("footer", "this is the footer of this page");

        var elements =
        [
            {
                name: "header",
                content: map.get("header")
            },
            {
                name: "main",
                content: map.get("main")
            },
            {
                name: "footer",
                content: map.get("footer")
            }
        ];

        elements.forEach((item) =>
        {
            var element = document.getElementsByTagName(item.name)[0];
            element.classList.add(item.name);
            elementCreator(element, "h4", item.name, false);
            elementCreator(element, "p", item.content, true);
            if (item.name === "main")
            {
                elementCreator(element, "div", "Speed Meter: [" + counter + "]", false);
                // elementCreator(element, "input", "", false);
            }

            element.onclick = function()
            {
                element.classList.toggle(item.name + "Click");
            };

            element.ondblclick = function()
            {
                element.classList.toggle("hidden");
            };

            element.onmouseover = function()
            {
                element.classList.toggle("biggerFont");
            };

            element.onmouseout = function()
            {
                element.classList.toggle("biggerFont");
            };

            element.onmousemove = function()
            {
                counter -= 2;
                document.getElementsByTagName("div")[0].innerHTML = "Speed Meter: [" + counter + "]";
            };
        });

        document.onmousemove = function()
        {
            counter++;
            document.getElementsByTagName("div")[0].innerHTML = "Speed Meter: [" + counter + "]";
        };
    }
};
