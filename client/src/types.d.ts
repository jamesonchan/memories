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

interface SignUpForm {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface SignInForm {
  email: string;
  password: string;
}

interface CustomUser {
  token: string;
  password?: string;
  result: ProfileObj;
}

interface ProfileObj {
  googleId?: string;
  imageUrl?: string;
  email: string;
  name?: string;
  givenName?: string;
  familyName?: string;
}

interface AuthData {
  profileObj: ProfileObj;
  token: string;
}
