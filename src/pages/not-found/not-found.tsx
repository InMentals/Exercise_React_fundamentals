import LinkButton from "../../components/ui/link-button";
import "./not-found.css";

function NotFound() {
  return (
    <main>
      <div className="not-found-container">
        Not found!
        <div className="go-home-button">
          <LinkButton to="/" $variant="primary">
            Go Home
          </LinkButton>
        </div>
      </div>
    </main>
  );
}
export default NotFound;
