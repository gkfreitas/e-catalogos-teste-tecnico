export default function LandscapePhoto(props) {
  const { src, alt } = props;
  return (
    <img
      src={ src }
      alt={ alt }
      className="object-contain w-full h-full "
    />
  );
}
