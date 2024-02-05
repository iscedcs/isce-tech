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

export const CLICK_BUTTONS = [
  {
    id: 0,
    text: "Create interactive marketing campaigns and foster deeper customer connections.",
    image: "/images/payment.png",
    button: "Enhanced Brand Engagement",
  },
  {
    id: 1,
    text: "Streamline business workflows and empower employees with tap-and-go solutions.",
    image: "/images/convenience.png",
    button: "Convenience",
  },
  {
    id: 2,
    text: " Offer contactless payment options, loyalty programs, and personalized interactions.",
    image: "/images/logos7.png",
    button: "Personalized Customer Experience",
  },
  {
    id: 3,
    text: "We provide multiple integrations though ISV’s Partners and hardware providers enabling you to unlock your business’s full potential. ",
    image: "/images/convenience7.png",
    button: "Effortless Integration",
  },
];

export const CLICK_BUTTON = [
	{
		id: 0,
		text: "Ditch passwords and tap your way to instant access. No more struggling to remember complex logins.",
		image: "/images/Effortless.png",
		button: "Effortless",
	},
	{
		id: 1,
		text: "Military-grade encryption safeguards your data, keeping your information safe and secure.",
		image: "/images/Secure.png",
		button: "Secure",
	},
	{
		id: 2,
		text: " Experience lag-free interactions with NFC's ultra-fast technology. Say goodbye to waiting!",
		image: "/images/Quick.png",
		button: "Instant",
	},
	{
		id: 3,
		text: "Simplify your life with a tap. Unlock doors, share contact info, and more - all with a single touch.",
		image: "/images/Flexible.png",
		button: "Seamless",
	},
];


export const REMOTE_IMAGES = [
	{
		id: 0,
		name: 'visa',
		src: 'https://images.prismic.io/vivadotcom/ba4c8651-e79a-4a78-aafa-3964b98fd1e5_VISA_white+logo.svg',
	},
	{
		id: 1,
		name: 'mastercard',
		src: 'https://images.prismic.io/vivadotcom/4c249be6-c021-4192-a26d-140abe7be84c_Mastercard.svg',
	},
	{
		id: 2,
		name: 'bancontact',
		src: 'https://images.prismic.io/vivadotcom/4074bd93-e49c-4b0a-970d-0075e71440b1_Bancontact+%281%29.svg',
	},
	{
		id: 3,
		name: 'amex',
		src: 'https://images.prismic.io/vivadotcom/76e326c6-1c4b-4017-b041-4de5a5cc904b_AMEX.svg',
	},
	{
		id: 4,
		name: 'klarna',
		src: 'https://images.prismic.io/vivadotcom/c0e16744-d047-4e13-95be-4ce12d21fade_Klarna.svg',
	},
	{
		id: 5,
		name: 'paypal',
		src: 'https://images.prismic.io/vivadotcom/f50f8aec-2c57-45f3-933b-478cccf5e055_PayPal_vertical+logo+white.svg',
	},
	{
		id: 6,
		name: 'diners',
		src: 'https://images.prismic.io/vivadotcom/3a88eda9-8c56-40c4-9cb0-ebdfeb3295f2_Diners+%281%29.svg',
	},
	{
		id: 7,
		name: 'discover',
		src: 'https://images.prismic.io/vivadotcom/28177fe7-f750-4d3e-8481-b48ca89fb67e_Discover+%281%29.svg',
	},
	{
		id: 8,
		name: 'samsungpay',
		src: 'https://images.prismic.io/vivadotcom/4c5ed988-3ef2-47e4-a96a-1af10bc7845b_Samsung+Pay_vertical+logo+white.svg',
	},
	{
		id: 9,
		name: 'applepay',
		src: 'https://images.prismic.io/vivadotcom/007044bd-d45b-4fb3-b0d1-3fa023f08060_Apple+Pay+%281%29.svg',
	},
	{
		id: 9,
		name: 'googlepay',
		src: 'https://images.prismic.io/vivadotcom/10fa55d3-21e9-4709-8b3f-6ed35edba277_Google+Pay_logo+white.svg',
	},
	{
		id: 10,
		name: 'payconiq',
		src: 'https://images.prismic.io/vivadotcom/78b9396a-cf4d-45ac-8512-86aeb243c5ca_Payconiq.svg',
	},
	{
		id: 11,
		name: 'cartesbancaires',
		src: 'https://images.prismic.io/vivadotcom/afa639f4-128a-461a-b77b-2dee8b6f1a7d_Cartes+Bancaires.svg',
	},
	{
		id: 12,
		name: 'alipay',
		src: 'https://images.prismic.io/vivadotcom/d3f67343-79db-4daf-a044-42a4f12a08b5_Alipay_logo+white.svg',
	},
	{
		id: 13,
		name: 'multibanco',
		src: 'https://images.prismic.io/vivadotcom/0bc76356-1445-4851-8756-773a8913f860_MULTIBANCO+-+logo-white-01.svg',
	},
	{
		id: 14,
		name: 'mbway',
		src: 'https://images.prismic.io/vivadotcom/6b13fd75-63e5-4593-81d3-d48877bdab28_mbway-logo-white-01.svg',
	},
];

export const SERVICEMAIN: ISERVICEMAIN[] = [
  {
    icon: WebIcon,
    hasIcon: true,
    title: "Web Development",
    description:
      "In today's digital age, a robust online presence is non-negotiable. Explore the prowess of ISCE in web development, offering innovative designs, tailored solutions, and a holistic approach to propel your business forward.",
  },
  {
    icon: MobileIcon,
    hasIcon: true,
    title: "Mobile Development",
    description:
      "In the mobile-dominated landscape, a strong mobile presence is paramount. Uncover the expertise of ISCE in mobile development, offering innovative solutions to catapult your brand into the hands of your audience.",
  },
  {
    icon: DomainIcon,
    hasIcon: true,
    title: "Hosting and Domains",
    description:
      "In the digital realm, reliable hosting and domain services are the backbone of a successful online presence. Explore the capabilities of ISCE in hosting and domains, providing a robust foundation for your website's performance and identity.",
  },
  {
    icon: AcademyIcon,
    hasIcon: true,
    title: "Institution and Tech Training",
    description:
      "This comprehensive service is designed to cater to the unique needs of educational institutions, businesses, and individuals seeking to enhance their technological proficiency.",
  },
  {
    icon: DigitalIcon,
    hasIcon: true,
    title: "Digital Marketing and SEO",
    description:
      "In the crowded digital landscape, effective digital marketing and SEO are paramount for business success. Discover the prowess of ISCE in comprehensive digital marketing and SEO services, designed to elevate your brand visibility and drive meaningful online engagement.",
  },
  {
    icon: GraphicIcon,
    hasIcon: true,
    title: "Grapic Design",
    description:
      "Visual appeal is a powerful tool in making a lasting impression online. Explore the creative prowess of ISCE in graphic design, offering bespoke visual solutions to enhance your brand identity and captivate your audience.",
  },
  {
    icon: UXIcon,
    hasIcon: true,
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
    image: "/images/ariariaperson.jpg",
  },
  {
    name: "Whiten Lighten",
    review: `ISCE Tech's project delivery for Whiten Lighten exemplify efficiency and purpose. Amazing job!`,
    title: "CEO/Founder",
    image: "/images/whitenlightenperson.jpg",
  },
  {
    name: "Transpay",
    review: `ISCE Tech's website and management system for Yoma Care exemplify efficiency and purpose.`,
    title: "AIRS Chairman",
    image: "/images/transpayperson.jpg",
  },
];

export const PRODUCTIVITY: ISERVICEMAIN[] = [
  {
    title: "Secure Data",
    description:
      "In an era where data is the lifeblood of productivity, ISCE stands at the forefront of ensuring the utmost security for our clients' valuable data. Recognizing the inseparable link between data security and organizational productivity, ISCE has strategically implemented a multifaceted approach to fortify client data.",
    hasIcon: false,
  },
  {
    title: "Accessibility",
    description:
      "ISCE has developed a client-centric approach to ensuring your data or products are easily accessed without any hassles. We recognize the correlation between accessibility and heightened productivity, fostering a secure yet accessible platform for your designed products.",
    hasIcon: false,
  },
  {
    title: "Integration",
    description:
      "Whatever project that is a product of ISCE has an advantage to easy integration, we reduce the stress a client may face by ensuring the product can be easily integrated facilitating heightened productivity and efficient experience.",
    hasIcon: false,
  },
  {
    title: "Time Saving",
    description:
      "With the understanding that time is a precious commodity, we ensure that our products are speed oriented with good optimization. ISCE looks towards seemless and efficient process whilst our product is in use which in turn boosts your productivity.",
    hasIcon: false,
  },
  {
    title: "Performance Optimization",
    description:
      "Product performance is key to ensuring efficient client productivity, with that in mind we ensure product speed, efficiency and workflow with our optimized products. ISCE aims at seeing to it that you never need any reason to complain as performance is a top priority.",
    hasIcon: false,
  },
  {
    title: "Support",
    description:
      "Beyond product delivery, our commitment continues with unwavering support. We troubleshoot issues, offering direct and indirect assistance. Moreover, we guide you on the dos and don'ts, ensuring a glitch-free experience.",
    hasIcon: false,
  },
];