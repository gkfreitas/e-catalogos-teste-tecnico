export default function PortraitPhoto(props) {
  const { src, alt, className, id } = props;
  return (
    <img
      id={ id }
      src={ src }
      alt={ alt }
      className={ `object-contain h-full ${className}` }
    />
  );
}
