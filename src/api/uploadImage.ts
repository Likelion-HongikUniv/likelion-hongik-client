import axios from "axios";
import client from "./client";

interface getPresignedUrlProps {
  path: string;
  token: string;
}
/**
 *
 * @param path
 * @param token
 * @returns presigned url
 */
export function getPresignedUrl(prop: getPresignedUrlProps) {
  return client
    .get(`/pre-signed-url/${prop.path}`, {
      headers: {
        JWT: prop.token,
      },
    })
    .then((res: any) => {
      return res.data;
    });
}

/**
 *
 * @param url getPresignedUrl 함수로부터 받은 presigned url
 * @param file 업로드할 raw 파일
 * @returns 응답 코드
 */
export function uploadFile({ url, file }: any) {
  return axios.put(url, file).then((res) => {
    return res.status;
  });
}
