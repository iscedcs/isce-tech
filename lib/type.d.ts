interface ICAROUSELDISPLAY {
  header: string;
  content: string;
  link: string;
  className?: string;
  buttonTitle: string;
}

interface IReview {
  name: string;
  review: string;
  title: string;
  image: string;
}

interface IPROJECT{
  image: string;
  title: string;
  description: string;
  weblink: string;
  figlink?: string;
  hasFigLink: boolean;
}

interface ICOREVALUE{
  icon: React.ReactNode;
  title: string;
  description: string;
}
interface IService {
	title: string;
	description: string;
}
interface CoreValues {
	icon: React.ReactNode;
	title: string;
	description: string;
}
