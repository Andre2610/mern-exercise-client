import axios from "axios";
import { API_URL } from "../config/constants";

const fetchPosts = () => axios.get(`${API_URL}/posts`);
