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
} from "./svg";

export const PROJECT_ITEM: IPROJECT[] = [
  {
    image: "/images/ariaria.png",
    title: "Ariaria NG",
    description:
      "A description that i came up with, I am still thinkng about a content",
    weblink: "https://www.ariariang.com/",
    figlink:
      "https://www.figma.com/file/RFbWimhXksL0rVeMUTLfTO/ARIARIA-NG.COM-(Copy)?type=design&node-id=3%3A2&mode=design&t=2utpT2hM5PbwnjOG-1",
  },
  {
    image: "/images/transpay.png",
    title: "Transpay",
    description:
      "A description that i came up with, I am still thinkng about a content",
    weblink: "https://www.transpaytms.com/",
    figlink:
      "https://www.figma.com/file/g1s1367l2cGU1yL59q8wkt/TRANSPAY?type=design&node-id=131%3A1112&mode=design&t=FfpPS5wV9Ds378Zp-1",
  },
  {
    image: "/images/purplepack.png",
    title: "Purple Pack",
    description:
      "A description that i came up with, I am still thinkng about a content",
    weblink: "https://www.purplepack.co.uk/",
    figlink: "",
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
    title: "NFC ",
    description: `Explore the potential of contactless living with ISCE's NFC solutions. From secure mobile payments to smart interactions, our NFC technology services redefine convenience. Embrace the future with secure, efficient, and innovative NFC solutions that simplify daily interactions and transactions.`,
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
