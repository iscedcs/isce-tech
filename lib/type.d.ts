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
  figlink: string;
}
<<<<<<< HEAD

interface ICOREVALUE{
  icon: React.ReactNode;
  title: string;
  description: string;
=======
interface IService {
	title: string;
	description: string;
>>>>>>> 6d411f2e927bc1bd9a179469f0b190d3f459c536
}