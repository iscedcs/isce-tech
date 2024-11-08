interface ICAROUSELDISPLAY {
	header?: string;
	content: string;
	link: string;
	className?: string;
	buttonTitle: string;
	type?: 'video' | 'image';
}

interface IReview {
	name: string;
	review: string;
	title: string;
	image: string;
}

interface IPROJECT {
	image: string;
	title: string;
	description: string;
	weblink: string;
	figlink?: string;
	hasFigLink: boolean;
}

interface ICOREVALUE {
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

interface CardBenefitsP {
	image: string;
	title: string;
	description: string;
}

interface CardP {
	image: string;
	num: number;
	text: string;
}

interface ClickBtnP {
	id?: number;
	button: string;
	image: string;
	text: string;
	selected: boolean;
	setSelected: React.Dispatch<React.SetStateAction>;
}
interface ISERVICEMAIN {
	icon?: React.ReactNode;
	title: string;
	description: string;
	hasIcon: boolean;
}
