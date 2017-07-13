
function autoPlay(pitch, duration){
    var durations = {4: 2000, 3: 1500, 2: 1000, 1: 500, 0.5: 250, 0.25: 125};
    duration = durations[duration];
    playnote(pitch);
    setTimeout(function(){endnote(pitch)}, duration);
}





function playnote(id) {
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


  function endnote(id) {
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