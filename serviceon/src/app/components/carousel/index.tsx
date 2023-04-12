import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const ImageWrapper = styled.div`
  height: 300px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Carousel: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    adaptiveHeight: true,
  };

  return (
    <Wrapper>
      <Slider {...settings}>
        <ImageWrapper>
          <Image src="/images/image1.jpg" />
        </ImageWrapper>
        <ImageWrapper>
          <Image src="/images/image2.jpg" />
        </ImageWrapper>
        <ImageWrapper>
          <Image src="/images/image3.jpg" />
        </ImageWrapper>
      </Slider>
    </Wrapper>
  );
};

export default Carousel;
