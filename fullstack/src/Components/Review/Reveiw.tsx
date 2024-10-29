import Star from "../SVGs/Star";
import "./ReviewStyles.css";
export default function Review(props: { reviewNumber?: number }) {
  const { reviewNumber } = props;

  return (
    <div className="review-container">
      <div className="stars pt-3">
        <span>
          <Star />
        </span>
        <span>
          <Star />
        </span>
        <span>
          <Star />
        </span>
        <span>
          <Star />
        </span>
        <span>
          <Star />
        </span>
      </div>
      <div className="review-count pt-0 px-3">{`(${reviewNumber} reviews)`}</div>
    </div>
  );
}
