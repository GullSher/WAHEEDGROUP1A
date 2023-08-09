// from   https://codepen.io/syrizaldev/pen/bGGZLaW
import '../Slider/Sliderjs.js'
import '../Slider/Slider.css'

const Slider = () => {
    return (

        <section class="section slider-section">
            <div class="container slider-column">
                <div class="slider-inner" id="slider">
                    <img class="slider-image" src="https://source.unsplash.com/1920x1280/?animal" alt="Slider" />
                    <img class="slider-image" src="https://source.unsplash.com/1920x1280/?nature" alt="Slider" />
                    <img class="slider-image" src="https://source.unsplash.com/1920x1280/?people" alt="Slider" />
                    <img class="slider-image" src="https://source.unsplash.com/1920x1280/?fruits" alt="Slider" />
                    <img class="slider-image" src="https://source.unsplash.com/1920x1280/?travel" alt="Slider" />
                    <img class="slider-image" src="https://source.unsplash.com/1920x1280/?flower" alt="Slider" />
                </div>
                <span role="tablist" class="pagination"></span>
                <span class="slider-prev"><i class="bx bx-chevron-left"></i></span>
                <span class="slider-next"><i class="bx bx-chevron-right"></i></span>
            </div>
        </section>

    )
}
export default Slider