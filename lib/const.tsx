import { HeartPulseIcon } from "lucide-react";
import {
  Customer,
  Data,
  Empowerment,
  Research,
  Innovation,
  Result,
  LightbulbIcon,
  UserPlusIcon,
  TwitterIcon,
  WebIcon,
  MobileIcon,
  DomainIcon,
  AcademyIcon,
  DigitalIcon,
  GraphicIcon,
  UXIcon,
} from "./svg";

export const PROJECT_ITEM: IPROJECT[] = [
  {
    image: "/images/ariaria.png",
    title: "Ariaria NG",
    description: "An e-commerce website",
    weblink: "https://www.ariariang.com/",
    figlink:
      "https://www.figma.com/file/RFbWimhXksL0rVeMUTLfTO/ARIARIA-NG.COM-(Copy)?type=design&node-id=3%3A2&mode=design&t=2utpT2hM5PbwnjOG-1",
    hasFigLink: true,
  },
  {
    image: "/images/transpay.png",
    title: "Transpay",
    description: "Transport revenue system",
    weblink: "https://www.transpaytms.com/",
    figlink:
      "https://www.figma.com/file/g1s1367l2cGU1yL59q8wkt/TRANSPAY?type=design&node-id=131%3A1112&mode=design&t=FfpPS5wV9Ds378Zp-1",
    hasFigLink: true,
  },
  {
    image: "/images/purplepack.png",
    title: "Purple Pack",
    description: "Resturant Website",
    weblink: "https://www.purplepack.co.uk/",
    figlink: "",
    hasFigLink: false,
  },
];

export const coreValues: CoreValues[] = [
  {
    icon: <UserPlusIcon className="text-[#bd1e59] text-4xl mb-4" />,
    title: "Effortless Connectivity",
    description:
      "ISCE harnesses the power of NFC technology to create an ecosystem where devices seamlessly communicate with a simple tap. Enjoy the convenience of effortless connectivity, making daily tasks smoother and more efficient. Our committment to redefining daily living.",
  },
  {
    icon: <HeartPulseIcon className="text-[#bd1e59] text-4xl mb-4" />,
    title: "Contactless Solutions for All",
    description:
      "ISCE is dedicated to bringing the benefits of contactless technology to everyone. Whether its secure payments access control or smart interactions ISCEs solutions cater to diverse needs, ensuring a user-friendly experience for individuals and businesses alike",
  },
  {
    icon: <LightbulbIcon className="text-[#bd1e59] text-4xl mb-4" />,
    title: "Innovative Applications",
    description:
      " ISCE goes beyond the ordinary by integrating NFC into innovative applications that redefine daily routines. From smart homes to connected workplaces, ISCE's solutions open doors to a world where technology enhances, rather than complicates, our lives ",
  },
];
export const services: IService[] = [
  {
    title: "Tech Solutions",
    description: `Harness the full potential of technology with ISCE's comprehensive Tech Solutions. From optimizing business processes to enhancing personal experiences, we offer a range of innovative solutions tailored to meet your unique needs. Unlock efficiency, connectivity, and seamless integration with our cutting-edge tech solutions.`,
  },
  {
    title: "Consultancy",
    description: `Leverage the expertise of ISCE's Tech Consultancy services to navigate the rapidly evolving tech landscape. Our seasoned consultants provide strategic insights, helping you make informed decisions and stay ahead in the dynamic world of technology. From planning to implementation, we guide you towards technological excellence.`,
  },
  {
    title: "Software Development",
    description: `Empower your business with bespoke software solutions crafted by ISCE's expert developers. Our Software Development services cover a spectrum of needs, from user-friendly applications to robust backend systems. We bring your ideas to life with agile development processes and a commitment to delivering high-quality software.`,
  },
  {
    title: "Hardware",
    description: `Seamlessly integrate hardware solutions into your tech ecosystem with ISCE's Hardware Integrations service. Whether it's connecting devices for improved functionality or optimizing hardware performance, we ensure that your hardware components work harmoniously to enhance overall efficiency and productivity.`,
  },
  {
    title: "Smart Works",
    description: `Transform your workspace into a smart, connected environment with ISCE's Smart Works solutions. Enhance efficiency, optimize workflows, and create a connected workplace that adapts to your needs. Our Smart Works services encompass smart office solutions, IoT integrations, and advanced technologies to elevate your work environment.`,
  },
];

export const CORE_VALUES: ICOREVALUE[] = [
  {
    icon: Data,
    title: "Data Security & Privacy",
    description:
      "Prioritizing the security and privacy of user data, adhering to industry best practices and compliance standards.",
  },
  {
    icon: Customer,
    title: "Customer Centric Approach",
    description:
      "Placing clients at the center of decision-making processes, understanding their needs, and delivering solutions that exceed expectations.",
  },
  {
    icon: Empowerment,
    title: "Empowerment",
    description:
      "Empowering individuals within the organization to contribute their best ideas, skills, and efforts, fostering a sense of ownership and achievement.",
  },
  {
    icon: Research,
    title: "Research",
    description:
      "Demonstrating a steadfast commitment to advancing knowledge through continuous research initiatives, ensuring that ISCE Tech remains at the forefront of technological innovation.",
  },
  {
    icon: Innovation,
    title: "Innovation",
    description:
      "Fostering a culture of continuous innovation to stay at the forefront of technological advancements and provide cutting-edge solutions. From secure mobile payment to smart interactions.",
  },
  {
    icon: Result,
    title: "Result Driven",
    description:
      "Focusing on delivering tangible results and measurable impact, aligning efforts with organizational goals and objectives.Our solutions tailored to empower our clients",
  },
];

export const SERVICEMAIN: ISERVICEMAIN[] = [
  {
    icon: WebIcon,
    title: "Web Development",
    description:
      "In today's digital age, a robust online presence is non-negotiable. Explore the prowess of ISCE in web development, offering innovative designs, tailored solutions, and a holistic approach to propel your business forward.",
  },
  {
    icon: MobileIcon,
    title: "Mobile Development",
    description:
      "In the mobile-dominated landscape, a strong mobile presence is paramount. Uncover the expertise of ISCE in mobile development, offering innovative solutions to catapult your brand into the hands of your audience.",
  },
  {
    icon: DomainIcon,
    title: "Hosting and Domains",
    description:
      "In the digital realm, reliable hosting and domain services are the backbone of a successful online presence. Explore the capabilities of ISCE in hosting and domains, providing a robust foundation for your website's performance and identity.",
  },
  {
    icon: AcademyIcon,
    title: "Institution and Tech Training",
    description: "howwwwwww",
  },
  {
    icon: DigitalIcon,
    title: "Digital Marketing and SEO",
    description:
      "In the crowded digital landscape, effective digital marketing and SEO are paramount for business success. Discover the prowess of ISCE in comprehensive digital marketing and SEO services, designed to elevate your brand visibility and drive meaningful online engagement.",
  },
  {
    icon: GraphicIcon,
    title: "Grapic Design",
    description:
      "Visual appeal is a powerful tool in making a lasting impression online. Explore the creative prowess of ISCE in graphic design, offering bespoke visual solutions to enhance your brand identity and captivate your audience.",
  },
  {
    icon: UXIcon,
    title: "User Experience Design",
    description:
      "In the digital age, user experience (UX) is a key differentiator for online success. Uncover the transformative capabilities of ISCE in UX design, committed to creating seamless and delightful interactions for your audience.",
  },
];

export const REVIEWS: IReview[] = [
  {
    name: "Ariaria",
    review: `ISCE Tech's creation for Ariaria stands out as a seamless e-commerce website and app. The user interface is intuitive, making navigation a breeze. The robust backend ensures smooth transactions, making it a top-notch solution for our online shopping.`,
    title: "Founder",
    image: "/images/ariariayoungwoman.jpg",
  },
  {
    name: "Yoma Care",
    review: `ISCE Tech's project delivery for Yoma Care exemplify efficiency and purpose. Amazing job!`,
    title: "CEO/Founder",
    image: "/images/person.jpg",
  },
  {
    name: "Transpay",
    review: `ISCE Tech's website and management system for Yoma Care exemplify efficiency and purpose.`,
    title: "Minister Of Transportation",
    image: "/images/yomacareboss.jpg",
  },
];