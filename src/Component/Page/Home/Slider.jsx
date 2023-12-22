import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import img1 from "../../../assets/1st.jpg"
import img2 from "../../../assets/2nd.jpg"
import img3 from "../../../assets/3rd.jpg"
import img4 from "../../../assets/4th.jpg"
// import "./styles.css"
const Slider = () => {
    const [sliderRef] = useKeenSlider(
        {
            loop: true,
        },
        [
            (slider) => {
                let timeout
                let mouseOver = false
                function clearNextTimeout() {
                    clearTimeout(timeout)
                }
                function nextTimeout() {
                    clearTimeout(timeout)
                    if (mouseOver) return
                    timeout = setTimeout(() => {
                        slider.next()
                    }, 1000)
                }
                slider.on("created", () => {
                    slider.container.addEventListener("mouseover", () => {
                        mouseOver = true
                        clearNextTimeout()
                    })
                    slider.container.addEventListener("mouseout", () => {
                        mouseOver = false
                        nextTimeout()
                    })
                    nextTimeout()
                })
                slider.on("dragStarted", clearNextTimeout)
                slider.on("animationEnded", nextTimeout)
                slider.on("updated", nextTimeout)
            },
        ]
    )
    return (
        <div className="max-w-4xl ">
            <div ref={sliderRef} className="keen-slider rounded-2xl ">
                <div className="keen-slider__slide number-slide1 h-[400px] object-cover "><img src={img1} alt="" 
                 className="h-[400px] w-full"/> </div>
                <div className="keen-slider__slide number-slide1 h-[400px] object-cover"><img src={img2} alt="" 
                 className="h-[400px] w-full"/> </div>
                <div className="keen-slider__slide number-slide1 h-[400px] object-cover"><img src={img3} alt="" 
                 className="h-[400px] w-full"/> </div>
                <div className="keen-slider__slide number-slide1 h-[400px] object-cover"><img src={img4} alt="" 
                 className="h-[400px] "/> </div>
            </div>
        </div>
    );
};

export default Slider;