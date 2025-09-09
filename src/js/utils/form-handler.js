export default function addSubmitHandler(buttonId, formId) {
    const button = document.getElementById(buttonId);
    const form = document.getElementById(formId);
    console.log(form);
    console.log(button);
    if (form && button) {
        // prevent page reload on clicking Submit 
        form.addEventListener("submit", function (event) {
            event.preventDefault();
        });

        button.addEventListener("click", function (event) {
            form.reset();
            alert('Thank you!');
        });
    }
}

