
/* head.js */


// Initialize

initializeChart();

//


function handle_StartButton() {
    frame = 0;
    paused = false;

    StartButton.disabled = true;

    try {
        Slider.disabled = false;
    } catch ( error ) { }

    try {
        StopButton.disabled = false;
    } catch ( error ) { }

    draw();
}

function stop_execution() {
    frame = NaN;
    paused = true;

    try {
        Slider.disabled = true;
    } catch ( error ) { }

    try {
        StopButton.disabled = true;
    } catch (error) { }

    ContinueButton.disabled = false;
}


function draw() { setTimeout(function() {

    /* Update Client Data or Stop */
    try {
        if ( paused )
            throw new Stop();
        updateClientData();
    } catch ( error ) {
        if ( !(error instanceof Stop) )
            throw error;
        stop_execution();
        return;
    }

    // console.log(`time: ${time()}`);

    /* Draw */
    updateChart();

    /* Check Stopping Condition */ 
    try {
        checkStopCondition();
    } catch ( error ) {
        if ( !(error instanceof Stop) )
            throw error;
        stop_execution();
        return;
    }


    frame++;
    requestAnimationFrame( draw );
}, 1000/FPS );}
