import { Fade } from "react-awesome-reveal";
import main_project1 from "../images/main_project1.png";
import styled from "styled-components";
import { useState } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Project = () => {
  function SampleNextArrow(props: any) {
    const { style, onClick } = props;
    return (
      <Next style={{ ...style }} onClick={onClick}>
        <IoIosArrowForward />
      </Next>
    );
  }
  function SamplePrevArrow(props: any) {
    const { style, onClick } = props;
    return (
      <Prev style={{ ...style }} onClick={onClick}>
        <IoIosArrowBack />
      </Prev>
    );
  }

  const [isHovering, setIsHovering] = useState(0);
  const settings = {
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 1000,
    dots: true,
    slidesToScroll: 1,
    // autoplay: true, //어지러워서 고민 ...
    autoplaySpeed: 2000,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <Fade>
      <ProjectContainer>
        <StyledSlider {...settings}>
          <Projects>
            <ProjectBox onMouseOver={() => setIsHovering(1)} onMouseOut={() => setIsHovering(0)}>
              {isHovering ? (
                <Hover>
                  {/* <IoIosArrowBack style={{ fontSize: "30px" }} /> */}
                  <HoverText>
                    <Title>festivalarm</Title>
                    <Desc>프로젝트 소개 프로젝트 소개 프로젝트 소개 프로젝트 소개</Desc>
                  </HoverText>
                  {/* <IoIosArrowForward style={{ fontSize: "30px" }} /> */}
                </Hover>
              ) : (
                ""
              )}
            </ProjectBox>
          </Projects>
          <Projects>
            <ProjectBox onMouseOver={() => setIsHovering(1)} onMouseOut={() => setIsHovering(0)}>
              {isHovering ? (
                <Hover>
                  {/* <IoIosArrowBack style={{ fontSize: "30px" }} /> */}
                  <HoverText>
                    <Title>festivalarm</Title>
                    <Desc>프로젝트 소개 프로젝트 소개 프로젝트 소개 프로젝트 소개</Desc>
                  </HoverText>
                  {/* <IoIosArrowForward style={{ fontSize: "30px" }} /> */}
                </Hover>
              ) : (
                ""
              )}
            </ProjectBox>
          </Projects>
          <Projects>
            <ProjectBox onMouseOver={() => setIsHovering(1)} onMouseOut={() => setIsHovering(0)}>
              {isHovering ? (
                <Hover>
                  {/* <IoIosArrowBack style={{ fontSize: "30px" }} /> */}
                  <HoverText>
                    <Title>festivalarm</Title>
                    <Desc>프로젝트 소개 프로젝트 소개 프로젝트 소개 프로젝트 소개</Desc>
                  </HoverText>
                  {/* <IoIosArrowForward style={{ fontSize: "30px" }} /> */}
                </Hover>
              ) : (
                ""
              )}
            </ProjectBox>
          </Projects>
          <Projects>
            <ProjectBox onMouseOver={() => setIsHovering(1)} onMouseOut={() => setIsHovering(0)}>
              {isHovering ? (
                <Hover>
                  {/* <IoIosArrowBack style={{ fontSize: "30px" }} /> */}
                  <HoverText>
                    <Title>festivalarm</Title>
                    <Desc>프로젝트 소개 프로젝트 소개 프로젝트 소개 프로젝트 소개</Desc>
                  </HoverText>
                  {/* <IoIosArrowForward style={{ fontSize: "30px" }} /> */}
                </Hover>
              ) : (
                ""
              )}
            </ProjectBox>
          </Projects>
          <Projects>
            <ProjectBox onMouseOver={() => setIsHovering(1)} onMouseOut={() => setIsHovering(0)}>
              {isHovering ? (
                <Hover>
                  {/* <IoIosArrowBack style={{ fontSize: "30px" }} /> */}
                  <HoverText>
                    <Title>festivalarm</Title>
                    <Desc>프로젝트 소개 프로젝트 소개 프로젝트 소개 프로젝트 소개</Desc>
                  </HoverText>
                  {/* <IoIosArrowForward style={{ fontSize: "30px" }} /> */}
                </Hover>
              ) : (
                ""
              )}
            </ProjectBox>
          </Projects>
        </StyledSlider>
      </ProjectContainer>
    </Fade>
  );
};

const ProjectContainer = styled.div`
  margin-top: 50px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Projects = styled.div`
  /* display: flex;
  justify-content: center;
  align-items: center; */
`;

const ProjectBox = styled.div`
  background-image: url(${main_project1});
  background-size: cover;
  width: 315px;
  height: 201px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  transition: all 0.2s linear;
  &:hover {
    width: 430px;
    height: 300px;
  }
`;

const Hover = styled.div`
  width: 490px;
  height: 314px;
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const HoverText = styled.div`
  display: flex;
  flex-direction: column;
  margin: 42px;
`;

const Title = styled.div`
  font-weight: 700;
  font-size: 28px;
  line-height: 34px;
`;

const Desc = styled.div`
  font-weight: 600;
  font-size: 18px;
  line-height: 30px;
  width: 232px;
  height: 60px;
  margin-top: 24px;
`;

const StyledSlider = styled(Slider)`
  position: relative;
`;

const Next = styled.div`
  font-size: 25px;
  position: absolute;
  top: 260px;
  left: 780px;
`;

const Prev = styled.div`
  font-size: 25px;
  position: absolute;
  top: 260px;
  right: 780px;
`;

export default Project;
