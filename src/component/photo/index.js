import "./index.css";

/*import photo from "./photo.jpg";

export default function Photo() {
  return (
    <div className="foto">
      <img src={photo} alt="photo" height={500} />
    </div>
  );
}*/

export default function Photo({ src, name }) {
  return <img src={src} alt={name} className="photo" />;
}