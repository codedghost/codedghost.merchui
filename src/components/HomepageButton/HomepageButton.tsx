import { Card } from "react-bootstrap";

import HomepageButtonProps from "./HomepageButton.Props"

function HomepageButton(props: HomepageButtonProps) {
    return (
        <Card style={{width: '18rem'}}>
            <a href={props.Link}>
                <Card.Img variant="top" src={props.ImgSrc} />
            </a>
            <Card.Body>
                <Card.Title>{props.CardText}</Card.Title>
            </Card.Body>
        </Card>
    );
}

HomepageButton.defaultProps = {
    ImgSrc: "",
    CardText: "Placeholder",
    Link: "/"
} as HomepageButtonProps;

export default HomepageButton;