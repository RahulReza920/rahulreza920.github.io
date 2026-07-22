export const SOCIAL_LINKS = {
	email: 'mailto:rahulreza920@gmail.com',
	github: 'https://github.com/RahulReza920',
	linkedin: 'https://linkedin.com/in/rahul-reza920',
	medium: 'https://medium.com/@rahulreza920',
};

export const PROJECTS = [
	{
		name: 'Enterprise URL Shortener',
		stack: 'Go · PostgreSQL · Redis · Docker',
		description:
			'Production-grade URL shortener built with Clean Architecture — PASETO v4 auth, distributed GCRA rate limiting, collision-free bijective ID encoding, and sub-10ms P95 latency. Full unit/integration/E2E test suite automated via Makefile.',
		url: 'https://github.com/RahulReza920/url-shortener',
	},
	{
		name: 'Real-Time Chat Application',
		stack: 'Rust · Axum · Tokio · WebSockets',
		description:
			'Concurrent chat server on the Tokio async runtime with safe WebSocket handling — broadcast channels distribute messages across clients in real time, with structured tracing throughout.',
		url: 'https://github.com/RahulReza920/chat_app',
	},
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
