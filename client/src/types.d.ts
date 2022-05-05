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

interface ProfileObj {
  googleId: string;
  imageUrl: string;
  email: string;
  name: string;
  givenName: string;
  familyName: string;
}

interface AuthData {
  profileObj: ProfileObj;
  token: string;
}
