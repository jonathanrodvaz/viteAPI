import "./About.css/";

const template = () => {
    return`
    <section class="about">
        <h2>About</h2>
    </section>
    `
}

export const printTemplate = () => {
    document.querySelector("main").innerHTML = template()
}