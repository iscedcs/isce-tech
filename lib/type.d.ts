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

type TeamCards = {
  name: string;
  role: string;
  image: string;
};

type DisplayCards = {
  title: string;
  image: string;
  link: string;
};

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
interface IAuthorCard {
	_id: string;
	slug: { current: string; _type: string };
	_createdAt: Date;
	name: string;
	bio: any;
	_updatedAt: string;
	image: { _type: string; alt: string; asset: {} };
	_rev: string;
	_type: string;
}
interface IPost {
	title: string;
	mainImage: {
		_type: string;
		alt: string;
		asset: {
			_ref: string;
			_type: string;
		};
		crop: {
			left: number;
			bottom: number;
			_type: string;
			right: number;
			top: number;
		};
		hotspot: {
			width: number;
			x: number;
			y: number;
			height: number;
			_type: string;
		};
	};
	body: {
		style: string;
		_key: string;
		markDefs: [];
		children: {
			_type: string;
			marks: [];
			text: string;
			_key: string;
		}[];
		_type: string;
	}[];
	publishedAt: string;
	author: AuthorCardI;
	categories: string;
	overview: string;
	content: any;
	_id: string;
	_rev: string;
	_type: string;

	slug: {
		_type: string;
		current: string;
	};
	_createdAt: Date;
	featured: boolean;
}