import axios from 'axios';
import { useSearchParams } from "react-router-dom"
import { useRecoilState } from "recoil";
import { IBoard, IComment, IReply } from '../interfaces/comments'; 
import { commentsListState, boardState } from "../states/atoms";

const baseURL = 'http://13.124.126.164:8080/';


interface postIdProps {
  postId?: any;
}



const GetPostDetail = async (postId:postIdProps) => {
  
  const [board, setBoardData] = useRecoilState<IBoard>(boardState);
  const [comments, setCommentsData] = useRecoilState<IComment[]>(commentsListState);

  await axios
    .get<IBoard>(`${baseURL}/community/post/${postId}`)
    .then((response) => {
      setBoardData(response.data);
      setCommentsData(response.data.comments);
      return response.data;
    })
    .catch((err) => {throw err});
};

export default GetPostDetail;
