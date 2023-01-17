import { Fade } from "react-awesome-reveal";
import styled from "styled-components";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import project1 from "../images/main_project1.png";
import project2 from "../images/main_project2.png";
import project3 from "../images/main_project3.png";
import project4 from "../images/main_project4.png";
import project5 from "../images/main_project5.png";

interface Iarrow {
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

interface Iprojects {
  title: string;
  desc: string;
  pid: number;
}

const imageList = [
  {
    pid: 1,
    title: project1,
    desc: "project1 설명",
  },
  {
    pid: 2,
    title: project2,
    desc: "project2 설명",
  },
  {
    pid: 3,
    title: project3,
    desc: "project3 설명",
  },
  {
    pid: 4,
    title: project4,
    desc: "project4 설명",
  },
  {
    pid: 5,
    title: project5,
    desc: "project5 설명",
  },
];

const Project = () => {
  function NextArrow({ onClick }: Iarrow) {
    return (
      <Next onClick={onClick}>
        <IoIosArrowForward />
      </Next>
    );
  }
  function PrevArrow({ onClick }: Iarrow) {
    return (
      <Prev onClick={onClick}>
        <IoIosArrowBack />
      </Prev>
    );
  }
  const settings = {
    infinite: true,
    centerPadding: "10px",
    slidesToShow: 3,
    speed: 1000,
    dots: true,
    slidesToScroll: 1,
    autoplay: true, //어지러워서 고민 ...
    autoplaySpeed: 2000,
    cssEase: "linear",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.currentTarget.style.opacity = "1";
    e.currentTarget.style.transition = 'all ease 0.3s 0s'
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.currentTarget.style.opacity = "0";
    e.currentTarget.style.transition = "all ease 0.3s 0s";
  };

  return (
    <Fade>
      <ProjectContainer>
        <StyledSlider {...settings}>
          {imageList.map(({ title, desc, pid }: Iprojects) => {
            return (
              <div key={pid}>
                <ProjectBox title={title}>
                    <Hover id="hover" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                      <HoverText>
                        <Title>{`project` + pid}</Title>
                        <Desc>{desc}</Desc>
                      </HoverText>
                    </Hover>
                </ProjectBox>
              </div>
            );
          })}
        </StyledSlider>
      </ProjectContainer>
    </Fade>
  );
};

const ProjectContainer = styled.div`
  margin-top: 50px;
  width: 100vw;
  height: 400px;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  @media (max-width: 390px) {
    width: 390px;
    height: 225px;
    overflow: hidden;
  }
`;

const ProjectBox = styled.div<{ title: string }>`
  background-image: url(${(props) => props.title});
  background-size: cover;
  width: 315px;
  height: 201px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s linear;
  margin-left: 50px;
`;

const Hover = styled.div`
  width: 315px;
  height: 201px;
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: rgba(0, 0, 0, 0.4);
  opacity: 0;
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
  height: 300px;
  width: 1200px;
  display: flex;
  align-items: center;
`;

const Next = styled.div`
  font-size: 25px;
  position: absolute;
  top: 260px;
  /* left: 780px; */
  &:hover {
    cursor: pointer;
  }
`;

const Prev = styled.div`
  font-size: 25px;
  position: absolute;
  top: 260px;
  /* right: 780px; */
  &:hover {
    cursor: pointer;
  }
`;

export default Project;
