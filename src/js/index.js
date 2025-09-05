import "../scss/main.scss";

// component logic for Highlight section

// handle thumbnails clicks 
const highlightSections = document.getElementsByClassName('highlight');
if (highlightSections && highlightSections.length > 0) {
    const highlightSection = highlightSections[0];
    highlightSection.addEventListener('click', (event) => {
        const child = event.target.closest('.highlight__thumb-item');
        if (child && highlightSection.contains(child)) {
            const childImage = child.querySelector('img');
            if (childImage & childImage.src) {
                console.log(childImage.src);
            }

            const thumbs = highlightSection.querySelectorAll('.highlight__thumb-item');
            thumbs.forEach((elem) => {
                elem.classList.remove('active-item');
            });            
        }


    })
}

