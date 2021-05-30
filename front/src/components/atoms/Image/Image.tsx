import './Image.scss';

interface ImageProps {
    src: string;
    alt: string;
}

const Image = ({ src, alt }: ImageProps) => (
    <img className="image" src={src} alt={alt} />
);

export default Image;
