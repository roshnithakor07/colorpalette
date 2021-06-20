
        for (let i = 1; i <= 100; i++) {
            const box = document.createElement('div');
            box.classList.add('box');
            box.id = "box"
            document.querySelector('.container').appendChild(box)
        }

        const btn = document.querySelector('.btn');
        const randomColorBlock = document.querySelectorAll('.box');
        //console.log(randomColorBlock)



        function RandomHexColorCode() {
            var chars = "0123456789abcdef";
            var colorLength = 6;
            var color = "";

            for (let i = 0; i < colorLength; i++) {
                var randomColor = Math.floor(Math.random() * chars.length);
               console.log(randomColor)
                color += chars.substring(randomColor, randomColor + 1);
              
               
            }

            return '#' + color;

        }

        function addColor() {
            randomColorBlock.forEach(e => {
                var newColor = RandomHexColorCode();
                e.style.backgroundColor = newColor;
                e.innerHTML = newColor;

                e.addEventListener('click', function () {

                    var $temp = $("<input>");
                    $("body").append($temp);
                    $temp.val($(e).html()).select()
                    document.execCommand("copy")
                    $temp.remove()
                    e.style.color = "#fff"

                    e.innerHTML = newColor

                    setTimeout(() => {

                        console.log("hello")

                        e.innerHTML = "Copied!"

                    }, 1000);


                })



            })
        }

