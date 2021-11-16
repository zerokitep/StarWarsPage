import React from "react";
import SlidingCards from "../component/SlidingCards";
import "../../styles/home.scss";
import useSWR from "swr";
import { Fetcher } from "./Fetcher";
import { Spinner } from "react-bootstrap";

export const FrontView = () => {
	const { data: people, isValidating } = useSWR("/api/people", Fetcher);

	const { data: planets, isFetching } = useSWR("/api/planets", Fetcher);

	const { data: vehicles, isLoading } = useSWR("/api/vehicles", Fetcher);

	return (
		<div className="text-center mt-5">
			{/* this is people */}
			{isValidating &&
				!people && (
					<div>
						<Spinner animation="border" /> <span className="visually-hidden">Loading... </span>
					</div>
				)}
			{people && (
				<div>
					<SlidingCards data={people} />
				</div>
			)}
			{/* this is planets */}
			{isFetching &&
				!planets && (
					<div>
						<Spinner animation="border" /> <span className="visually-hidden">Loading... </span>
					</div>
				)}
			{planets && (
				<div>
					<SlidingCards data={planets} />
				</div>
			)}
			{/* this is vehicles */}
			{isLoading &&
				!vehicles && (
					<div>
						<Spinner animation="border" /> <span className="visually-hidden">Loading... </span>
					</div>
				)}
			{vehicles && (
				<div>
					<SlidingCards data={vehicles} />
				</div>
			)}
			{/* <SlidingCards />
			<SlidingCards /> */}
		</div>
	);
};
