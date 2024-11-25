export default function Picture({imgs, name, styles}) {
  const {webp, jpg} = imgs
  return (
    <picture className={styles.includes("mask-image-fade") ? "1xl:basis-2/4" : ""}>
      <source 
        srcSet={webp} 
        type="image/webp" 
      />
      <img 
        className={styles} 
        src={jpg} alt={name} 
        loading="lazy" 
        width="300" 
        height="300" 
      />
    </picture>
  )
}
