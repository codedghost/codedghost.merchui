import { Container, Nav, Navbar, Image } from "react-bootstrap";
import FacebookLogo from "../../vectors/facebook.svg";
import InstagramLogo from "../../vectors/instagram.svg";
import TwitchLogo from "../../vectors/twitch.svg";
import TwitterLogo from "../../vectors/twitter.svg";
import YoutubeLogo from "../../vectors/youtube.svg";

function NavBar() {

    return (
        <div>
            <Navbar className="login-bar">
                <Container fluid>
                    <Navbar.Collapse id="login-and-socials" className="justify-content-end">
                        <Nav>
                            <Nav.Link href="#" className="login-link">Login</Nav.Link>
                            <Nav.Link href="https://www.twitch.tv/codedghost2">
                                <Image src={TwitchLogo} width="25" height="25" alt="CodedGhost's Twitch" />
                            </Nav.Link>
                            <Nav.Link href="https://www.youtube.com/c/codedghost">
                                <Image src={YoutubeLogo} width="25" height="25" alt="CodedGhost's Youtube" />
                            </Nav.Link>
                            <Nav.Link href="https://twitter.com/CodedGhost">
                                <Image src={TwitterLogo} width="25" height="25" alt="CodedGhost's Twitter" />
                            </Nav.Link>
                            <Nav.Link href="https://instagram.com/CodedGhost">
                                <Image src={InstagramLogo} width="25" height="25" alt="CodedGhost's Instagram" />
                            </Nav.Link>
                            <Nav.Link href="https://www.facebook.com/CodedGhost">
                                <Image src={FacebookLogo} width="25" height="25" alt="CodedGhost's Facebook" />
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default NavBar