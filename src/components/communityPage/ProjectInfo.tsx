import styled from "styled-components";
import axios from "axios";
import { useRecoilState } from "recoil";
import { useEffect } from "react";
import { projectTeamState } from "../../states/atoms";
import { IMember, IProjectTeam } from "../../interfaces/team";

const baseURL = "http://13.125.72.138:8080";

export function ProjectInfo() {
  const [projectInfo, setProjectInfo] = useRecoilState<IProjectTeam>(projectTeamState);

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
        if (err.response.status === 401 || err.response.status === 500) {
          alert("오류코드 401, 접근 권한이 없습니다. 로그인이 필요합니다.");
        }
        if (err.response.status === 404) {
          alert("게시글을 찾을 수 없습니다.");
        }
        window.location.href = "/";
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
                src={member.profileImage}
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
  gap: 1.0417vw;
  div {
    display: flex;
    align-items: center;
    span {
      font-weight: 500;
      margin-left: 0.7813vw;
      font-size: 0.8333vw;
      color: #c6c6c6;
    }
  }
  @media all and (max-width: 768px) {
    gap: 4.1026vw;
    div {
      span {
        font-size: 3.5897vw;
        margin-left: 6vw;
      }
    }
  }
`;

const TeamName = styled.h1`
  font-weight: 700;
  font-size: 1.25vw;
  margin: 0;
  @media all and (max-width: 768px) {
    font-size: 5.1282vw;
  }
`;

const ImgBox = styled.div`
  width: 1.3021vw;
  height: 1.6667vw;
  overflow-x: visible;
  img {
    position: absolute;
    width: 1.6667vw;
    height: 1.6667vw;
    border-radius: 100%;
  }
  @media all and (max-width: 768px) {
    width: 6vw;
    height: 8.2051vw;
    img {
      width: 8.2051vw;
      height: 8.2051vw;
    }
  }
`;
