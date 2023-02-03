import styled from "styled-components";
import { BLACK_1 } from "../../styles/theme";
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useMediaQuery from "../../hooks/useMediaQuery";
import axios from "axios";

interface MoreButtonProps {
  cid: number;
  isBoard: boolean;
  isComment: boolean;
}

export function MoreButton({ cid, isBoard, isComment }: MoreButtonProps) {
  const accessToken = localStorage.getItem("token");
  const ref = useRef<HTMLButtonElement>(null);
  const [isMore, setMore] = useState(false);
  const navigate = useNavigate();
  const isPC = useMediaQuery("(min-width: 1024px)");
  let targetURL = "";

  const onClickMore = (event: React.MouseEvent<HTMLButtonElement>) => {
    setMore(!isMore);
  };

  const onClickPatch = () => {
    axios
      .patch(
        `http://13.125.72.138:8080/community/comment/${cid}/like`,
        { body: null }, // body null이라도 있어야 이 문법에서 돌아감
        {
          headers: {
            "Content-Type": `application/json`,
            JWT: `${accessToken}`,
          },
        },
      )
      .catch((err) => {
        throw err;
      })
      .then((response) => {
        console.log(response);
      });
  };

  const onClickDelete = () => {
    if (isBoard) {
      targetURL = `http://13.125.72.138:8080/community/post/${cid}`;
    } else if (isComment) {
      targetURL = `http://13.125.72.138:8080/community/comment/${cid}`;
    } else {
      targetURL = `http://localhost:8080/community/reply/${cid}`;
    }
    axios
      .delete(targetURL, {
        headers: {
          "Content-Type": `application/json`,
          JWT: `${accessToken}`,
        },
      })
      .catch((err) => {
        throw err;
      })
      .then((response) => {
        console.log(response);
      });
  };

  return (
    <div style={{ position: "relative" }}>
      <button ref={ref} onClick={onClickMore}>
        {isPC ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12 20C11.45 20 10.9793 19.8043 10.588 19.413C10.196 19.021 10 18.55 10 18C10 17.45 10.196 16.979 10.588 16.587C10.9793 16.1957 11.45 16 12 16C12.55 16 13.021 16.1957 13.413 16.587C13.8043 16.979 14 17.45 14 18C14 18.55 13.8043 19.021 13.413 19.413C13.021 19.8043 12.55 20 12 20ZM12 14C11.45 14 10.9793 13.804 10.588 13.412C10.196 13.0207 10 12.55 10 12C10 11.45 10.196 10.979 10.588 10.587C10.9793 10.1957 11.45 10 12 10C12.55 10 13.021 10.1957 13.413 10.587C13.8043 10.979 14 11.45 14 12C14 12.55 13.8043 13.0207 13.413 13.412C13.021 13.804 12.55 14 12 14ZM12 8C11.45 8 10.9793 7.804 10.588 7.412C10.196 7.02067 10 6.55 10 6C10 5.45 10.196 4.97933 10.588 4.588C10.9793 4.196 11.45 4 12 4C12.55 4 13.021 4.196 13.413 4.588C13.8043 4.97933 14 5.45 14 6C14 6.55 13.8043 7.02067 13.413 7.412C13.021 7.804 12.55 8 12 8Z"
              fill="#D7D7D7"
            />
          </svg>
        ) : (
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M7.99935 13.3334C7.63268 13.3334 7.3189 13.2029 7.05802 12.942C6.79668 12.6807 6.66602 12.3667 6.66602 12C6.66602 11.6334 6.79668 11.3194 7.05802 11.058C7.3189 10.7971 7.63268 10.6667 7.99935 10.6667C8.36602 10.6667 8.68002 10.7971 8.94135 11.058C9.20224 11.3194 9.33268 11.6334 9.33268 12C9.33268 12.3667 9.20224 12.6807 8.94135 12.942C8.68002 13.2029 8.36602 13.3334 7.99935 13.3334ZM7.99935 9.33335C7.63268 9.33335 7.3189 9.20269 7.05802 8.94135C6.79668 8.68046 6.66602 8.36669 6.66602 8.00002C6.66602 7.63335 6.79668 7.31935 7.05802 7.05802C7.3189 6.79713 7.63268 6.66669 7.99935 6.66669C8.36602 6.66669 8.68002 6.79713 8.94135 7.05802C9.20224 7.31935 9.33268 7.63335 9.33268 8.00002C9.33268 8.36669 9.20224 8.68046 8.94135 8.94135C8.68002 9.20269 8.36602 9.33335 7.99935 9.33335ZM7.99935 5.33335C7.63268 5.33335 7.3189 5.20269 7.05802 4.94135C6.79668 4.68046 6.66602 4.36669 6.66602 4.00002C6.66602 3.63335 6.79668 3.31958 7.05802 3.05869C7.3189 2.79735 7.63268 2.66669 7.99935 2.66669C8.36602 2.66669 8.68002 2.79735 8.94135 3.05869C9.20224 3.31958 9.33268 3.63335 9.33268 4.00002C9.33268 4.36669 9.20224 4.68046 8.94135 4.94135C8.68002 5.20269 8.36602 5.33335 7.99935 5.33335Z"
              fill="#D7D7D7"
            />
          </svg>
        )}
      </button>
      {isMore ? (
        <MoreSection>
          <EditButton
            onClick={() => {
              navigate("/write");
            }}
          >
            수정하기
          </EditButton>
          <EditButton onClick={onClickDelete}>삭제하기</EditButton>
        </MoreSection>
      ) : null}
    </div>
  );
}

const MoreSection = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 10;

  position: absolute;
  right: 0;

  margin-left: auto;
  text-align: center;
  background-color: #333333;
  color: white;
  height: min-height;
  border-radius: 8px;

  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.07), 0 2px 4px rgba(0, 0, 0, 0.07), 0 4px 8px rgba(0, 0, 0, 0.07),
    0 8px 16px rgba(0, 0, 0, 0.07), 0 16px 32px rgba(0, 0, 0, 0.07), 0 32px 64px rgba(0, 0, 0, 0.07);
`;

const EditButton = styled.button`
  right: 0;
  width: max-content;
  color: white;
  margin: 24px;
  letter-spacing: -0.32px;
  font-weight: 500;
`;
