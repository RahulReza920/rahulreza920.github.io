export const SOCIAL_LINKS = {
	email: 'mailto:rahulreza920@gmail.com',
	github: 'https://github.com/RahulReza920',
	linkedin: 'https://linkedin.com/in/rahul-reza920',
	medium: 'https://medium.com/@rahulreza920',
};

export const PATHAO = {
	name: 'Pathao',
	role: 'Software Engineer (Backend) · Jan 2024 — Present',
	description:
		"I'm a backend engineer on Pathao's core ride-hailing and logistics platform — an auth system serving 1M+ users at 30ms P99, a fuzzy-search address builder, and the CI pipelines that ship 20+ microservices.",
	url: 'https://pathao.com',
	image: 'pathao-logo.png',
};

export const PROJECTS = [
	{
		name: 'Enterprise URL Shortener',
		stack: 'Go · PostgreSQL · Redis · Docker',
		description:
			'A production-grade URL shortener built with Clean Architecture — PASETO v4 auth, distributed rate limiting, and sub-10ms P95 latency.',
		url: 'https://github.com/RahulReza920/url-shortener',
	},
	{
		name: 'Real-Time Chat App',
		stack: 'Rust · Axum · Tokio · WebSockets',
		description:
			'A concurrent chat server on the Tokio async runtime with safe WebSocket handling and real-time broadcast channels.',
		url: 'https://github.com/RahulReza920/chat_app',
	},
];

export const TECHNOLOGIES = [
	'Go / Rust / C++',
	'PostgreSQL / MySQL / Redis',
	'Docker / Kubernetes / GCP',
	'gRPC / REST / RabbitMQ / Pub-Sub',
	'…and always exploring something new!',
];

export const AWARDS = [
	'Technical blog with 20,000+ monthly readers — Medium',
	'Kubernetes for the Absolute Beginners — KodeKloud Certificate',
	'Machine Learning Specialization — Stanford University (Coursera)',
	'Top 5, RUET Intra University Programming Contest',
	'Published: BHSGR-Net, Big Data IoT & Machine Learning Conf. (BIM 2023)',
];

export const PUBLICATIONS = [
	{
		title: 'BHSGR-Net: A Light-Weight Convolutional Neural Architecture for Recognition of Bengali Hand Sign Gestures',
		venue: 'International Conference on Big Data, IoT and Machine Learning (BIM 2023)',
		url: undefined,
	},
	{
		title: 'Empowering the Deaf Community: A Vision-Based Method for Understanding Bangla Sign Language Numerals',
		venue: 'Undergraduate Thesis, RUET',
		url: undefined,
	},
];

const CERT_REPO = 'https://github.com/RahulReza920/Certificates/blob/main';

export const CERTIFICATES = [
	{ title: 'Machine Learning Specialization — Stanford University (Coursera)', file: 'Machine Learning -Coursera.pdf' },
	{ title: 'Kubernetes for the Absolute Beginners — KodeKloud', file: undefined, url: 'https://github.com/RahulReza920/Certificates' },
	{ title: 'Intro to Machine Learning', file: 'Rahul Reza Roky - Intro to Machine Learning.png' },
	{ title: 'Publication Certificate — BHSGR-Net (BIM 2023)', file: 'Publication Certificates.pdf' },
	{ title: 'Top 5, RUET Intra University Programming Contest', file: 'RUET Programming Contest.jpg' },
	{ title: 'Undergraduate Thesis Completion Certificate', file: 'Thesis Completion Certificate.pdf' },
	{ title: 'YLRL Research Lab Certificate', file: 'YLRL Certificates.pdf' },
	{ title: 'Intra University Carrom Tournament', file: 'Intra University Carrom Tournament..jpg' },
].map((c) => ({
	...c,
	url: c.url ?? `${CERT_REPO}/${encodeURIComponent(c.file!)}`,
}));
