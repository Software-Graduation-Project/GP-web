import { useState } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Rating } from "@mui/material";
import { RihamImg } from "../../../../assets";
import { Carousel } from "antd";
// TODO:
// open review as a model when it is clicked
// handle view all reviews button
// fetch reviews from the server

const reviewsData = [
  {
    id: 1,
    name: "John Doe",
    avatar: RihamImg,
    rating: 5,
    feedback: "Amazing service! The products exceeded my expectations.",
  },
  {
    id: 2,
    name: "Jane Smith",
    avatar: RihamImg,
    rating: 4,
    feedback: "Very satisfied with the quality and customer service.",
  },
];

const sliderSettings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  arrows: false,
  centerMode: false,
  responsive: [
    {
      breakpoint: 780,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};
const carouselSettings = {
  dots: false,
  dotPosition: "left" as const,
  infinite: true,
  speed: 500,
  autoplay: true,
  vertical: true,
  verticalSwiping: true,
};
export const ReviewSection = () => {
  const [reviews, setReviews] = useState(reviewsData);
  const handleSeeAll = () => {
    console.log(reviewsData);
  };
  return (
    <Container>
      <Button onClick={handleSeeAll} style={{ marginBottom: "0.5rem" }}>
        view all reviews
      </Button>
      <StyledSlider {...sliderSettings}>
        {reviews.map((review) => (
          <Card key={review.id} style={{ display: "flex" }}>
            <div className="header">
              <Avatar src={review.avatar} alt={review.name} />
              <div className="name-rating">
                <p>{review.name}</p>
                <Rating
                  name="half-rating-read"
                  defaultValue={review.rating}
                  precision={0.5}
                  readOnly
                  size="small"
                />
              </div>
            </div>
            <Feedback>{review.feedback}</Feedback>
          </Card>
        ))}
      </StyledSlider>
      <StyledCarousel {...carouselSettings}>
        {reviews.map((review) => (
          <Card key={review.id} style={{ display: "flex" }}>
            <div className="header">
              <Avatar src={review.avatar} alt={review.name} />
              <div className="name-rating">
                <p>{review.name}</p>
                <Rating
                  name="half-rating-read"
                  defaultValue={review.rating}
                  precision={0.5}
                  readOnly
                  size="small"
                />
              </div>
            </div>
            <Feedback>{review.feedback}</Feedback>
          </Card>
        ))}
      </StyledCarousel>
    </Container>
  );
};

const StyledSlider = styled(Slider)`
  display: none;
  width: 100%;
  margin-left: -0.6rem;
  .slick-track {
    gap: 1rem;
    display: flex;
    justify-content: space-between;
  }
  @media (max-width: 780px) {
    display: block;
  }
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: space-between;
  width: 100%;
  flex-direction: column;
  border-radius: 0 1rem 1rem 1rem;
  margin-top: 0.5rem;
`;

const Card = styled.div`
  height: 120px !important;
  width: 100%;
  padding: 1rem;
  cursor: pointer;
  overflow: hidden;
  border-radius: 0.5rem;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2),
    0 2px 25px rgba(79, 89, 121, 0.1) inset;
  .name-rating {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }
  .header {
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: flex-start;
  }
  @media (max-width: 780px) {
    width: auto;
  }
`;

const Avatar = styled.img`
  border-radius: 50%;
  object-fit: fill;
  width: 40px;
  height: 40px;
  padding: 0;
`;

const Feedback = styled.p`
  font-size: 0.9rem;
  width: auto;
  text-align: left;
  padding: 0.4rem 0 0 0.4rem;
  color: ${({ theme }) => theme.colors.secondary};
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const Button = styled.p`
  width: auto;
  font-family: "Overlock", serif;
  margin: 0 2rem;
  text-align: right;
  color: ${({ theme }) => theme.colors.primary_dark};
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.colors.secondary_dark};
    text-decoration: underline;
  }
`;

const StyledCarousel = styled(Carousel)`
  margin: 0 auto;
  align-items: center;
  width: 100% !important;
  display: flex !important;
  justify-content: center;
  .slick-list {
    width: 100%;
  }

  .slick-track {
    display: flex !important;
    flex-direction: column !important;
    height: auto !important;
  }

  .slick-slide {
    height: fit-content !important;
    > div {
      margin: 0.5rem 0;
    }
  }
  @media (max-width: 780px) {
    display: none !important;
  }
`;
