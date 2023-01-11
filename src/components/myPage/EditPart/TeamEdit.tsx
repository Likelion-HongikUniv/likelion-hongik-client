import styled from "styled-components";
import { useSetRecoilState } from "recoil";
import { teamState } from "./../../../states/index";

export function TeamEdit() {
  const setTeam = useSetRecoilState(teamState);
  return (
    <div style={{ display: "flex" }}>
      <TeamTitle>팀 변경</TeamTitle>
      <div>
        <TeamSelect style={{ marginLeft: "63px" }}>
          <TeamOptions
            onClick={() => {
              setTeam(1);
            }}
          >
            건빵이최고
          </TeamOptions>
          <TeamOptions
            onClick={() => {
              setTeam(2);
            }}
          >
            같공
          </TeamOptions>
          <TeamOptions
            onClick={() => {
              setTeam(3);
            }}
          >
            페스티발람
          </TeamOptions>
        </TeamSelect>
      </div>
    </div>
  );
}
const TeamTitle = styled.div`
  font-weight: 500;
  font-size: 18px;
  line-height: 21.78px;
  display: flex;
  align-items: center;
`;

const TeamSelect = styled.select`
  width: 387px;
  height: 60px;
  background-color: #33333399;
  border: none;
  border-radius: 8px;
  margin-left: 47px;
  color: #d7d7d7;
  padding: 19px 16px;
  font-weight: 500;
  font-size: 18px;
  line-height: 21.78px;
  letter-spacing: -0.32px;
  margin-bottom: 24px;
`;

const TeamOptions = styled.option`
  font-weight: 500;
  font-size: 18px;
  line-height: 21.78px;
  letter-spacing: -0.32px;
  color: #d7d7d7;
  background-color: #222222;
`;
