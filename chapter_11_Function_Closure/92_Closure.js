
/**
 * Closure Function: 
 */

function startBrowser(){
    let name = "Edge";

    function installBrowser(){
        console.log(name);
    }
    return installBrowser;
}

const runTC = startBrowser();
runTC();

//installBrowser();  // Error - Can not access inner function outside of its scope