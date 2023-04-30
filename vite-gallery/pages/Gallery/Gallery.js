import "./Gallery.css/";

const template = () => {
    return`
    <section class="gallery">
        <h2>Gallery</h2>
    </section>
    `
}

export const printTemplate = () => {
    document.querySelector("main").innerHTML = template()
}