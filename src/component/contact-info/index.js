import "./index.css";

export default function ContactInfo({
  name,
  image,
  response_rate,
  response_time,
  info,
  phone,
}) {
  return (
    <div className="contact">
      <div>
        <img src={image} alt="Face" width="80" height="80" />
      </div>
      <div className="contact__right">
        <h1 className="contact__text">Господар {name}</h1>
        <div className="contact__sub-block">
          <span className="contact__sub-value">{phone}</span>
          <span className="contact__sub-value">{response_time}</span>
          <span className="contact__sub-value">{response_rate} % Швидкості відгуку</span>
        </div>
      </div>
    </div>
  )
}