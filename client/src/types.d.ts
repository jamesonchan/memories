interface Post {
  _id?: string;
  title: string;
  message: string;
  creator: string;
  tags: string[];
  selectedFile: string;
  likeCount?: number;
  createdAt?: Date;
}
