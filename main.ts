namespace loops {
    //% blockId=loops_on_start block="on start"
    //% blockAliasFor="onStart" blockHidden=true
    export function onStart (handler: () => void) {
            handler();
    }
}

//% blockId="on_start" block="on start"
//% blockNamespace=loops weight=80
 function onStart (handler: () => void) {
     loops.onStart(handler)
 }