import React from 'react'
import useEmblaCarousel, { EmblaOptionsType } from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

type PropType = {
  slides: any[]
  options?: EmblaOptionsType
}

const autoplayOptions = {
  delay: 3000,
  rootNode: emblaRoot => emblaRoot.parentElement,
}

const EmblaCarousel: React.FC<PropType> = props => {
  const { slides, options } = props
  const [emblaRef] = useEmblaCarousel(options, [Autoplay(autoplayOptions)])

  return (
    <div className="embla w-full h-full relative overflow-hidden">
      <div className="embla__viewport h-full" ref={emblaRef}>
        <div className="embla__container h-full">
          {slides.map((slide, index) => (
            <div className="embla__slide h-full" key={index}>
              <img
                className="embla__slide__img object-cover w-full h-full aspect-square"
                src={slide.src}
                alt="Your alt text"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default EmblaCarousel
