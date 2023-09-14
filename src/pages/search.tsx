import { GetServerSideProps } from "next";

//@ts-ignore
export const getServerSideProps: GetServerSideProps = async context => {
	const query = context.query;
	const search_query = query.search_query;
	if (!search_query) {
		const props: SearchProps = {
			results: {
				message: {
					text: "Something went wrong! No search queries were passed to this url. Try searching again",
					type: "Error",
				},
			},
		};
		return {
			props,
		};
	}

	const request = await fetch(
		`https://api.adviceslip.com/advice/search/${search_query}`
	);
	const response = await request.json();

	const props: SearchProps = {
		results: response,
	};

	return {
		props,
	};
};

export default function Search({ results }: SearchProps) {
	// To check if we've received an not find any advices or not passed any search query to url error.
	if ("message" in results) {
		const message = (results as NotFoundAdvices).message;
		return (
			<p>
				{message.text} {message.type}
			</p>
		);
	}

	return (
		<section>
			{results.slips.map(slip => {
				return (
					<article key={slip.id}>
						<p> {slip.advice} </p>
						<time>{slip.date}</time>
					</article>
				);
			})}
		</section>
	);
}
