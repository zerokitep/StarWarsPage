import React from "react";
import { Row, Card, Col, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "../../styles/index.scss";

const SlidingCards = props => {
	const getId = item => {
		return item.url.substring(29, item.url.length - 1);
	};
	return (
		<Container>
			<Row className="slidingCardsRow">
				{" "}
				{props &&
					props.data.results.map(item => (
						<Col xs={3} key={getId(item)}>
							<Card style={{ width: "18rem" }}>
								<Card.Img variant="top" src="holder.js/100px180" />
								<Card.Body>
									<Card.Title>{item.name}</Card.Title>
									<Card.Text>Click below for more!</Card.Text>
									{/* <Link to={"/SingleView/" + getId(item)}> */}
									<div key={getId(item)}>
										<Link to={"/SingleView/" + getId(item)}>{item.name}</Link>
									</div>
									{/* </Link> */}
								</Card.Body>
							</Card>
						</Col>
					))}
			</Row>
		</Container>
	);
};

export default SlidingCards;
SlidingCards.propTypes = {
	data: PropTypes.array.isRequired
};
