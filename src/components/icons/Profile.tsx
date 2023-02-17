import styled from "styled-components";

interface ProfileProps {
  profile: string;
}

export function Profile({ profile }: ProfileProps) {
  const userImg = JSON.stringify(profile);
  return <Wrapper profile={userImg} />;
}

const Wrapper = styled.div<{ profile: string }>`
  background-color: white;
  background-image: ${(props) => `url(${props.profile})`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 100%;
  width: 30px;
  height: 30px;
`;
