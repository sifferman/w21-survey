
/* stopbutton.js */


hasStopButton           = true;
const StopButton        = document.getElementById( "StopButton" );

StopButton.setAttribute("style","");

Actions[ "StopButtonTime" ] = NaN;


function handle_StopButton() {
    stopped = true;
    Actions[ "StopButtonTime" ] = time();

    StopButton.disabled = true;
    if (hasSlider == true) disable_Sliders();
}
