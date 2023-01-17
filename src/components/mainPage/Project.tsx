import { Fade } from "react-awesome-reveal";
import styled from "styled-components";
import { useState } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import project1 from "../images/main_project1.png";
import project2 from "../images/main_project2.png";
import project3 from "../images/main_project3.png";
import project4 from "../images/main_project4.png";
import project5 from "../images/main_project5.png";
// import { title } from "process";

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
  const [isHovering, setIsHovering] = useState(false);
  const settings = {
    infinite: true,
    centerPadding: "10px",
    slidesToShow: 3,
    speed: 1000,
    dots: true,
    slidesToScroll: 1,
    // autoplay: true, //어지러워서 고민 ...
    autoplaySpeed: 3000,
    cssEase: "linear",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const handleMouseEnter = (e: any) => {
    // e.target.style.display = "block";
    setIsHovering(true);
    // const hovering = document.getElementById("hover");
    // console.log(isHovering);
    // hovering.style.display = 'block';
  };

  const handleMouseLeave = (e: any) => {
    // e.target.style.display = "none";
    setIsHovering(false);
    // const hovering = document.getElementById("hover");
    // console.log(isHovering);
  };

  return (
    <Fade>
      <ProjectContainer>
        <StyledSlider {...settings}>
          {imageList.map(({ title, desc, pid }: Iprojects) => {
            return (
              <div key={pid}>
                <ProjectBox title={title} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                  {isHovering && (
                    <Hover id="hover">
                      <HoverText>
                        <Title>{`project` + pid}</Title>
                        <Desc>{desc}</Desc>
                      </HoverText>
                    </Hover>
                  )}
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
`;

const ProjectBox = styled.div<{ title: string }>`
  /* background-image: url(${project1}); */
  background-image: url(${(props) => props.title});

  /* 에러))) props가 string으로 들어가서 적용되지 않음 ㅜㅜ*/
  /* 올바른 형식 인식: url(/static/media/main_project1.4b5d03d….png); */
  /* props 전달시 인식 에러: url(project2); */

  background-size: cover;
  width: 315px;
  height: 201px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s linear;
  margin-left: 50px;
  &:hover {
    /* width: 490px;
    height: 314px; */
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
  background: rgba(0, 0, 0, 0.4);
  /* display: none; */
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
  /* margin-top: 80px; */
  width: 1200px;
  display: flex;
  align-items: center;
`;

const Next = styled.div`
  font-size: 25px;
  position: absolute;
  top: 260px;
  left: 780px;
  &:hover {
    cursor: pointer;
  }
`;

const Prev = styled.div`
  font-size: 25px;
  position: absolute;
  top: 260px;
  right: 780px;
  &:hover {
    cursor: pointer;
  }
`;

export default Project;
