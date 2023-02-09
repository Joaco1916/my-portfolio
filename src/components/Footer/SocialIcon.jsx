import Image from 'next/image'
import styles from '../../../styles/Footer.module.css'

const SocialIcon = ({
    src,
    alt,
    url,
    className,
    target = "_blank",
    width='32px',
    height='32px'
}) => {
    return (
        <a
          href={url}
          target={target}
        >
          <span className={className}>
            <Image src={src} alt={alt} width={width} height={height}/>
          </span>
        </a>
    )
}

export default SocialIcon