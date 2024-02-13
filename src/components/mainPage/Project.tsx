import styled from "styled-components";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import 윤영팀 from "../images/윤영팀.jpg";
import 진규팀 from "../images/진규팀.png";
import 소영팀 from "../images/소영팀.jpg";
import 서영팀 from "../images/서영팀.png";
import 한아팀 from "../images/한아팀.jpg";
import 민영팀 from "../images/민영팀.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

interface Iarrow {
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

interface Iprojects {
  title: string;
  desc: string;
  pid: string;
}

const imageList = [
  {
    pid: "I-GO",
    title: 윤영팀,
    desc: "요양원과 학생을 1대1 매칭하여 디지털 격차를 해소하는 웹 서비스",
  },
  {
    pid: "MediMed",
    title: 진규팀,
    desc: "투약정보, 건강정보, 기초건강관리까지 건강 전반을 책임지는 서비스",
  },
  {
    pid: "한걸음씩",
    title: 소영팀,
    desc: "디지털 소외자를 위한 웹사이트 학습 기능 탑재 커뮤니티",
  },
  {
    pid: "함께사장",
    title: 서영팀,
    desc: "전통시장 사장님과 손님, 모두를 위한 시장 커뮤니티",
  },
  {
    pid: "TestMate",
    title: 한아팀,
    desc: "디지털 정보의 홍수 문제를 해결하는 국가 자격 시험 관리 웹 서비스",
  },
  {
    pid: "Potential",
    title: 민영팀,
    desc: "디지털 격차 해소를 위한 신생 쇼핑몰 입점 서비스",
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
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.currentTarget.style.opacity = "1";
    e.currentTarget.style.transition = "all ease 0.3s 0s";
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.currentTarget.style.opacity = "0";
    e.currentTarget.style.transition = "all ease 0.3s 0s";
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  });

  return (
    <ProjectContainer data-aos="fade-up">
      <StyledSlider {...settings}>
        {imageList.map(({ title, desc, pid }: Iprojects) => {
          return (
            <div key={pid}>
              <ProjectBox title={title}>
                <Hover id="hover" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                  <HoverText>
                    <Title>{pid}</Title>
                    <Desc>{desc}</Desc>
                  </HoverText>
                </Hover>
              </ProjectBox>
            </div>
          );
        })}
      </StyledSlider>
    </ProjectContainer>
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
  @media (max-width: 768px) {
    height: 225px;
    overflow: hidden;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    width: 100vw;
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
  @media (max-width: 768px) {
    margin-left: 40px;
  }
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
  background: rgba(0, 0, 0, 0.6);
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
  word-break: keep-all;
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
  z-index: 10;
  left: 780px;
  &:hover {
    cursor: pointer;
  }
`;

const Prev = styled.div`
  font-size: 25px;
  position: absolute;
  z-index: 10;
  right: 780px;
  &:hover {
    cursor: pointer;
  }
`;

export default Project;
