var current_time = 0;

function popCorn(){
        document.getElementById('demo_links').style.display = 'none';
         document.getElementById('popcorn_image').style.display = 'inline-block';
        disableKeyboard();
        autoPlay('c1', 0.25);
        autoPlay('asharp0', 0.25);
        autoPlay('c1', 0.25);
        autoPlay('g0', 0.25);
        autoPlay('csharp0', 0.25);
        autoPlay('g0', 0.25);
        autoPlay('c0', 0.5);

        autoPlay('c1', 0.25);
        autoPlay('asharp0', 0.25);
        autoPlay('c1', 0.25);
        autoPlay('g0', 0.25);
        autoPlay('csharp0', 0.25);
        autoPlay('g0', 0.25);
        autoPlay('c0', 0.5);


        autoPlay('c1', 0.25);
        autoPlay('d1', 0.25);
        autoPlay('dsharp1', 0.5);
        autoPlay('dsharp1', 0.25);
        autoPlay('dsharp1', 0.5);
        autoPlay('d1', 0.25);
        autoPlay('c1', 0.25);

        autoPlay('d1', 0.5);
        autoPlay('d1', 0.25);
        autoPlay('d1', 0.5);
        autoPlay('c1', 0.25);
        autoPlay('asharp0', 0.5);

        autoPlay('c1', 0.5);
        autoPlay('gsharp0', 0.5);
        autoPlay('c1', 0.5);
        autoPlay('asharp0', 0.5);
        autoPlay('c1', 0.5);


        current_time = 0;
        setTimeout(activateKeyboard, 5000);
        setTimeout(function(){
        document.getElementById('popcorn_image').style.display = 'none';
        document.getElementById('demo_links').style.display = 'block'; }, 5000);

}

function gameOfThrones(){
            document.getElementById('demo_links').style.display = 'none';
         document.getElementById('got_image').style.display = 'inline-block';
        disableKeyboard();
        autoPlay('g0', 0.5);
        autoPlay('c0', 0.5);
        autoPlay('csharp0', 0.25);
        autoPlay('f0', 0.25);

        autoPlay('g0', 0.5);
        autoPlay('c0', 0.5);
        autoPlay('csharp0', 0.25);
        autoPlay('f0', 0.25);

        autoPlay('g0', 0.5);
        autoPlay('c0', 0.5);
        autoPlay('csharp0', 0.25);
        autoPlay('f0', 0.25);

        autoPlay('g0', 0.5);
        autoPlay('c0', 0.5);
        autoPlay('e0', 0.25);
        autoPlay('f0', 0.25);

        autoPlay('g0', 0.5);
        autoPlay('c0', 0.5);
        autoPlay('e0', 0.25);
        autoPlay('f0', 0.25);

        autoPlay('g0', 0.5);
        autoPlay('c0', 0.5);
        autoPlay('e0', 0.25);
        autoPlay('f0', 0.25);

        autoPlay('g0', 0.5);
        autoPlay('c0', 0.5);
        autoPlay('e0', 0.25);
        autoPlay('f0', 0.25);

        autoPlay('g0', 0.5);
        autoPlay('c0', 0.5);
        autoPlay('e0', 0.25);
        autoPlay('f0', 0.25);


        autoPlay('g0', 1.5);
        autoPlay('c0', 1.5);

        autoPlay('csharp0', 0.25);
        autoPlay('f0', 0.25);
        autoPlay('g0', 1);
        autoPlay('c0', 1);
        autoPlay('csharp0', 0.25);
        autoPlay('f0', 0.25);


        autoPlay('d1', 0.5);
        autoPlay('g0', 0.5);
        autoPlay('asharp0', 0.25);
        autoPlay('c1', 0.25);

        autoPlay('d1', 0.5);
        autoPlay('g0', 0.5);
        autoPlay('asharp0', 0.25);
        autoPlay('c1', 0.25);

        autoPlay('d1', 0.5);
        autoPlay('g0', 0.5);
        autoPlay('asharp0', 0.25);
        autoPlay('c1', 0.25);

        autoPlay('d1', 0.5);
        autoPlay('g0', 0.5);
        autoPlay('asharp0', 0.25);
        autoPlay('c1', 0.25);
        current_time = 0;
        setTimeout(activateKeyboard, 10800);
        setTimeout(function(){document.getElementById('demo_links').style.display = 'block';
              document.getElementById('got_image').style.display = 'none';
        }, 10800);

}

function enterMenu(){
    disableKeyboard();
    autoPlay('c0', 0.25);
    autoPlay('d0', 0.25);
    autoPlay('e0', 0.25);
    autoPlay('g0', 0.25);
    autoPlay('a0', 0.25);
    autoPlay('c1', 0.25);
    current_time = 0;
    setTimeout(activateKeyboard, 700);
}

function exitMenu(){
    disableKeyboard();
    autoPlay('c1', 0.25);
    autoPlay('a0', 0.25);
    autoPlay('g0', 0.25);
    autoPlay('e0', 0.25);
    autoPlay('d0', 0.25);
    autoPlay('c0', 0.25);
    current_time = 0;
    setTimeout(activateKeyboard, 700);
}


function autoPlay(pitch, duration){
    var durations = {4: 2000, 3: 1500, 2: 1000,1.5: 750, 1: 500, 0.5: 250, 0.25: 125};
    duration = durations[duration] * 0.9;
    setTimeout(function(){strikenote(pitch); setTimeout(function(){releasenote(pitch)}, duration - 10);}, current_time);
    current_time += duration;
}



function strikenote(id) {
               var clickedElement = id;

                // Create synth components and connect them
                oscillator = context.createOscillator();
                oscillator.connect(gainNode);
                gainNode.connect(context.destination)
                oscillator.type = 'square';

                // Play note
                oscillator.frequency.value = note_frequencies[clickedElement];
                gainNode.gain.value = getVolume();
                oscillator.start();

                // Get clicked Element
                var key = document.getElementById(clickedElement);

                // Get the SVG document inside the Object tag
                var svgDoc = key.contentDocument;

                // Get one of the SVG items by ID;
                var svgItem = svgDoc.getElementById(clickedElement);

                // Select a random colour from pallette to fill the key
                active_key_colour = active_key_colours[Math.floor(Math.random()*active_key_colours.length)];
                svgItem.style.fill = active_key_colour;
            }


  function releasenote(id) {
                oscillator.stop();
                var clickedElement = id;
                var key = document.getElementById(clickedElement);

                // Get the SVG document inside the Object tag
                var svgDoc = key.contentDocument;
                // Get one of the SVG items by ID;
                var svgItem = svgDoc.getElementById(clickedElement);

                // Revert key color to normal
                if(clickedElement.length > 2){
                    svgItem.style.fill = 'black';
                }else{
                   svgItem.style.fill = '#eaeaea';
                }
            }

    function disableKeyboard(){
        document.body.style.pointerEvents = 'none';


    }

      function activateKeyboard(){
        document.body.style.pointerEvents = 'all';
    }