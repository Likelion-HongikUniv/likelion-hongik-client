import styled from "styled-components";
import axios from "axios";
import { useRecoilState } from "recoil";
import { useEffect } from "react";
import { projectTeamState } from "../../states/atoms";
import { IMember, IProjectTeam } from "../../interfaces/team";
import emoji_lion from "./../images/emoji_lion_24x24.png";
import { useNavigate } from "react-router-dom";

const baseURL = "https://www.hongiklikelion.click";

export function ProjectInfo() {
  const [projectInfo, setProjectInfo] = useRecoilState<IProjectTeam>(projectTeamState);
  const navigate = useNavigate();

  function GetTeamMembers() {
    const token = localStorage.getItem("token");
    axios
      .get(`${baseURL}/team/members`, {
        headers: {
          "Content-Type": `application/json`,
          JWT: token,
        },
      })
      .then((response) => {
        if (response.status === 200) {
          setProjectInfo(response.data);
          return response.data;
        }
      })
      .catch((err) => {
        navigate("/community/BOARD");
        throw err;
      });
  }

  useEffect(() => {
    GetTeamMembers();
  }, []);

  return (
    <TeamWrapper>
      <TeamName>{projectInfo?.teamName}</TeamName>
      <div>
        <div>
          {projectInfo?.members.map((member: IMember, index) => (
            <ImgBox key={member.userId}>
              <img
                src={member.profileImage || emoji_lion}
                alt="team-profile-img"
                style={{ opacity: (projectInfo.memberCount - (index - 0.3)) / projectInfo.memberCount }}
              />
            </ImgBox>
          ))}
        </div>
        <span>팀원 {projectInfo?.memberCount}명</span>
      </div>
    </TeamWrapper>
  );
}

const TeamWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 44px;
  div {
    display: flex;
    align-items: center;
    span {
      font-weight: 500;
      margin-left: 15px;
      font-size: 16px;
      color: #c6c6c6;
    }
  }
  @media all and (max-width: 767px) {
    gap: 16px;
    div {
      span {
        font-size: 14px;
        margin-left: 23px;
      }
    }
  }
`;

const TeamName = styled.h1`
  font-weight: 700;
  font-size: 24px;
  margin: 0;
  @media all and (max-width: 767px) {
    font-size: 20px;
  }
`;

const ImgBox = styled.div`
  width: 25px;
  height: 32px;
  overflow-x: visible;
  img {
    position: absolute;
    width: 32px;
    height: 32px;
    border-radius: 100%;
  }
  @media all and (max-width: 767px) {
    width: 23px;
    height: 32px;
  }
`;
