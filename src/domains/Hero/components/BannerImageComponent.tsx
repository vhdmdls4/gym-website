import BannerImage from 'assets/scott-webb-bannerimage.jpg'
import styles from '../Hero.module.css'

export default function BannerImageComponent() {
  return (
    <div className="flex justify-center self-center w-full">
      <img
        src={BannerImage}
        alt="Woman doing exercises with a bar"
        title="Fitness Banner"
        className={styles.homeBannerImage}
        width={400}
      />
    </div>
  )
}
