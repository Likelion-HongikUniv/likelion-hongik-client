import client from "./client";

interface editProfileImageProps {
  token: string;
  slicedUrl: string;
}
export async function editProfileImage({ token, slicedUrl }: editProfileImageProps) {
  client
    .post(
      `/mypage/edit/profileImage`,
      { url: slicedUrl },
      {
        headers: {
          JWT: token,
          "Content-Type": `application/json`,
        },
      },
    )
    .then((response) => {
      console.log(response.status);
    })
    .catch((error) => console.error(error));
}
