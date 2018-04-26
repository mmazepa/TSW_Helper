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

            return element;
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

            if (item.name === "header")
            {
                var clock = elementCreator(element, "nav", "", false);
                clock.setAttribute("id", "clock");
                clock.classList.add("clock");
                const checkTime = (time) =>
                {
                    if(time < 10)
                    {
                        time = "0" + time;
                    }
                    return time;
                };
                const startTime = () =>
                {
                    var today = new Date();
                    var h = today.getHours();
                    var m = today.getMinutes();
                    var s = today.getSeconds();
                    m = checkTime(m);
                    s = checkTime(s);

                    clock.innerHTML = h + ":" + m + ":" + s;
                    var timer = setTimeout(startTime, 500);
                };
                startTime();
            }

            if (item.name === "main")
            {
                elementCreator(element, "div", "Speed Meter: [" + counter + "]", false);
                elementCreator(element, "br", "", false);

                elementCreator(element, "input", "", false);

                var select = elementCreator(element, "select", "", false);
                select.appendChild(new Option("+", "+"));
                select.appendChild(new Option("-", "-"));
                select.appendChild(new Option("*", "*"));
                select.appendChild(new Option("/", "/"));

                elementCreator(element, "input", "", false);
                elementCreator(element, "button", "calculate", false);
                elementCreator(element, "p", "", false);

                var inputs = document.getElementsByTagName("input");
                inputs[0].setAttribute("id", "number1");
                inputs[1].setAttribute("id", "number2");
                inputs[0].setAttribute("style", "width:100px;");
                inputs[1].setAttribute("style", "width:100px;");

                var button = document.getElementsByTagName("button")[0];
                button.onclick = function()
                {
                    var number1 = document.getElementById("number1").value;
                    var number2 = document.getElementById("number2").value;
                    if (number1 !== "" && number2 !== "")
                    {
                        var place = document.getElementsByTagName("p")[2];
                        var dropdown = document.getElementsByTagName("select")[0];
                        var chosenOne = dropdown.options[dropdown.selectedIndex].value;

                        var result = 0;
                        number1 = parseInt(number1);
                        number2 = parseInt(number2);

                        switch (chosenOne)
                        {
                            case "+":
                                result = number1 + number2;
                                break;
                            case "-":
                                result = number1 - number2;
                                break;
                            case "*":
                                result = number1 * number2;
                                break;
                            case "/":
                                result = number1 / number2;
                                break;
                        }
                        place.innerHTML = number1 + " " + chosenOne + " " + number2 + " = " + result;
                    }
                };
            }

            if (item.name === "footer")
            {
                var info = elementCreator(element, "p", "", false);
                const inspectTime = () =>
                {
                    var currentTime = document.getElementById("clock").textContent;
                    var parsed = parseInt(currentTime.slice(-2));
                    info.innerHTML = "Time mod 5 is " + parsed%5 +
                                        " and mod 3 is " + parsed%3 + ".";
                    setTimeout(inspectTime, 500);
                };
                inspectTime();
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
