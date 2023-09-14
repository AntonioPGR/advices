import { useRef } from "react";
import { useRouter } from "next/router";

export async function getServerSideProps() {
	const response = await fetch("https://api.adviceslip.com/advice");
	const json = (await response.json()) as RandomAdvice;

	const props: getPropsReturn<HomeProps> = {
		props: {
			advice: json,
		},
	};

	return props;
}

export default function Home({ advice }: HomeProps) {
	const search_input = useRef<HTMLInputElement>(null);
	const router = useRouter();

	function onSearch() {
		const input_value = search_input.current?.value;
		if (input_value) {
			router.push({
				pathname: "/search",
				query: {
					search_query: input_value,
				},
			});
		}
	}

	return (
		<>
			<div>
				<input type='text' ref={search_input} />
				<button onClick={onSearch}>buscar</button>
			</div>
			<h1> {advice.slip.advice} </h1>
		</>
	);
}
