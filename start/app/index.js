import _ from "lodash";

const component = () =>{
    const el = document.createElement('div');

    // lodash is require for the next line to work
    el.innerHTML = _.join(['Hello', 'Webpack'], ' ');

    return el;
}

document.body.appendChild(component());