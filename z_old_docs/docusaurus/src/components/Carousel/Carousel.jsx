import clsx from 'clsx';
import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import EmblaPluginAutoplay from 'embla-carousel-autoplay';
import IconChevronLeft from '@site/static/img/assets/icons/chevron-left.svg';
import IconChevronRight from '@site/static/img/assets/icons/chevron-right.svg';
import ColorThief from 'colorthief';
import styles from './carousel.module.scss';

export function CarouselSlide({
  className,
  textStyle, // Added to accept dynamic styles for text
  ...rest
}) {
  return (
    <div
      className={clsx(
        styles.carousel__slide,
        className,
      )}
      {...rest}
    >
      <div
        className={clsx(
          styles.carousel__text, // Added to reference the text in slide
        )}
        style={textStyle} // Apply the dynamic textStyle here
      >
        {rest.children}
      </div>
    </div>
  );
}

export function Carousel({
  className,
  options,
  ...rest
}) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    ...(options || {}),
  }, [
    EmblaPluginAutoplay({
      delay: 10000,
    }),
  ]);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi],
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi],
  );
  const scrollTo = useCallback(
    (index) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi],
  );
  const onSelect = useCallback(() => {
    if (!emblaApi) return;

    setSelectedIndex(emblaApi.selectedScrollSnap());

    // Dynamic contrast adjustment
    const slideElement = emblaApi.slideNodes()[emblaApi.selectedScrollSnap()];
    const imgElement = slideElement.querySelector('img');

    if (imgElement) {
      const colorThief = new ColorThief();
      imgElement.onload = () => {
        const dominantColor = colorThief.getColor(imgElement);
        const luminance = (0.299 * dominantColor[0] + 0.587 * dominantColor[1] + 0.114 * dominantColor[2]) / 255;

        const textColor = luminance > 0.5 ? '#000000' : '#FFFFFF';
        slideElement.querySelector(`.${styles.carousel__text}`).style.color = textColor;
      };
    }
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, setScrollSnaps, onSelect]);

  return (
    <div
      className={clsx(
        styles.carousel,
        className,
      )}
    >
      <div
        ref={emblaRef}
        className={styles.carousel__viewport}
      >
        <div
          className={styles.carousel__container}
          {...rest}
        />
      </div>
      <button
        aria-label="Previous slide"
        onClick={scrollPrev}
        className={clsx(
          styles.carousel__arrow,
          styles['carousel__arrow--prev'],
        )}
      >
        <IconChevronLeft />
      </button>
      <button
        aria-label="Next slide"
        onClick={scrollNext}
        className={clsx(
          styles.carousel__arrow,
          styles['carousel__arrow--next'],
        )}
      >
        <IconChevronRight />
      </button>
      <div className={styles.carousel__pagination}>
        {scrollSnaps.map((_, paginationItemIndex) => (
          <button
            key={paginationItemIndex}
            aria-hidden
            tabIndex={-1}
            onClick={() => scrollTo(paginationItemIndex)}
            className={clsx(
              styles.carousel__pagination__btn,
              ((paginationItemIndex === selectedIndex) && styles['carousel__pagination__btn--active'])
            )}
          />
        ))}
      </div>
    </div>
  );
}
