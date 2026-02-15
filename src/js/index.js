import "../scss/main.scss";

import addThumbClickHandlers from "./utils/highlight-switcher";
import addSubmitHandler from "./utils/form-handler";

document.addEventListener('DOMContentLoaded', () => {
    addThumbClickHandlers('highlight__thumbs', 'highlight__thumb-item', 'active-item');
    addSubmitHandler('contact-submit', 'contact');
    console.log('Dom loaded, handlers added');
});
