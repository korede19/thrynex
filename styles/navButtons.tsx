import styled from "styled-components";

interface NavigationButtonProps {
  isNext?: boolean;
}

export const StyledNavigationButton = styled.div<NavigationButtonProps>`
  color: #fff;
  display: flex;
  //   background: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: absolute;
  top: 50%;
  z-index: 10;
  transform: translateY(-50%);
  ${({ isNext }) => (isNext ? "right: 10px;" : "left: 10px;")}
  &.swiper-button-prev:after {
    font-size: 40px;
  }

  &.swiper-button-next:after {
    font-size: 40px; // Specific width for the next button
  }
  @media (max-width: 768px) {
    &.swiper-button-prev:after {
      font-size: 20px; 
    }

    &.swiper-button-next:after {
      font-size: 20px;
  }
`;
