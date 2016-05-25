function highLight(x) {
    x.style.backgroundColor = "#ee6e73";
    x.style.borderBottomLeftRadius = "2px";
    x.style.borderBottomRightRadius = "2px";
    x.style.borderTopLeftRadius = "2px";
    x.style.borderTopRightRadius = "2px";
}

function noLight(x) {
    x.style.backgroundColor = "#fff8e1";
}

function move(x) {
    x.style.paddingLeft = "5px";
    x.style.paddingRight = "0px";
}

function reset(x) {
    x.style.paddingLeft = "0px";
    x.style.paddingRight = "5px";
}

function flush(x) {
    x.style.opacity  = "0.9";
}

function receed(x) {
    x.style.opacity = "1.0";
}

function lightOrange(x) {
    x.style.border = "2px solid #b0bec5";
    x.style.borderBottomLeftRadius = "8px";
    x.style.borderBottomRightRadius = "8px";
    x.style.borderTopLeftRadius = "8px";
    x.style.borderTopRightRadius = "8px";
}

function backToOrange(x) {
    x.style.border = "2px solid #fff8e1";
    x.style.borderBottomLeftRadius = "4px";
    x.style.borderBottomRightRadius = "4px";
    x.style.borderTopLeftRadius = "4px";
    x.style.borderTopRightRadius = "4px";
}
