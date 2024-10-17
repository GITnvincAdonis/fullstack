import Star from "../SVGs/Star";
import "./ReviewStyles.css";
export default function Review() {
  return (
    <div className="review-container">
      <div className="stars pt-3">
        <Star></Star>
        <Star></Star>
        <Star></Star>
        <Star></Star>
        <Star></Star>
      </div>
      <div className="review-count pt-3 px-3">{`(no reviews)`}</div>
    </div>
  );
}
