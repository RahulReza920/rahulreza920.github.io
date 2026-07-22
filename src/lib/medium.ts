export interface MediumPost {
	title: string;
	url: string;
	date: string;
}

// Hardcoded fallback so the build never breaks if the feed is unreachable.
const FALLBACK_POSTS: MediumPost[] = [
	{ title: 'Go Concurrency — The Master Sheet', url: 'https://medium.com/@rahulreza920/go-concurrency-the-master-sheet-4e72ef8d4ee3', date: '2026-07-08' },
	{ title: 'Stop Prompting Claude Code, Start Engineering It', url: 'https://medium.com/@rahulreza920/everything-i-wish-id-known-on-day-one-of-claude-code-3cc608b3fe01', date: '2026-06-21' },
	{ title: 'Go pprof: Stop Guessing, Start Seeing', url: 'https://medium.com/@rahulreza920/go-pprof-stop-guessing-start-seeing-e71320fa449a', date: '2026-05-01' },
	{ title: 'Go 1.26 Just Dropped — And It’s a Big One', url: 'https://medium.com/@rahulreza920/go-1-26-just-dropped-and-its-a-big-one-82370ca4d309', date: '2026-02-14' },
	{ title: 'The Go Interface Philosophy: A Comprehensive Guide', url: 'https://medium.com/@rahulreza920/the-go-interface-philosophy-a-comprehensive-guide-df18812c2e36', date: '2026-02-05' },
];

const FEED_URL = 'https://medium.com/feed/@rahulreza920';

function extractTag(xml: string, tag: string): string {
	const match = xml.match(new RegExp(`<${tag}>([\\s\\S]*?)</${tag}>`));
	if (!match) return '';
	return match[1].replace('<![CDATA[', '').replace(']]>', '').trim();
}

export async function getMediumPosts(limit = 5): Promise<MediumPost[]> {
	try {
		const res = await fetch(FEED_URL, { signal: AbortSignal.timeout(12000) });
		if (!res.ok) return FALLBACK_POSTS.slice(0, limit);

		const xml = await res.text();
		const items = xml.split('<item>').slice(1);
		if (items.length === 0) return FALLBACK_POSTS.slice(0, limit);

		const posts = items.slice(0, limit).map((item) => {
			const rawDate = extractTag(item, 'pubDate');
			const date = rawDate ? new Date(rawDate).toISOString().slice(0, 10) : '';
			return {
				title: extractTag(item, 'title'),
				url: extractTag(item, 'link').split('?')[0],
				date,
			};
		});

		return posts.every((p) => p.title && p.url) ? posts : FALLBACK_POSTS.slice(0, limit);
	} catch {
		return FALLBACK_POSTS.slice(0, limit);
	}
}
