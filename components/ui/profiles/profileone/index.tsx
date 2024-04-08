import Image from "next/image"
import { useRouter } from "next/navigation"
import { FaFacebook, FaTelegramPlane } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"
import { RiInstagramFill } from "react-icons/ri"
import styles from "./styles.module.css"
const ProfileOne = ({
  tier,
  profileId,
}: {
  tier: string
  profileId: string
}) => {
  const router = useRouter()
  console.log(router)
  return (
    <div className={styles.outer}>
      <div className={styles.inner}>
        <div>
          <div className={styles.profileImag}>
            <div className={styles.progTier}>
              <Image
                src={tier}
                width={40}
                height={40}
                alt="tier 3"
                className={styles.tierLogoImage}
              />
              <img
                src="/images/testimonial-02.jpg"
                width={250}
                height={250}
                className={styles.logoImage}
              />
            </div>
            <div className={styles.profileId}>
              <h1>Profile Id :</h1>
              <h2> {profileId}</h2>
            </div>
          </div>
          <div className={styles.socials}>
            <div className={styles.socialsDiv}>
              <div>
                <FaXTwitter />
                <h1>: @jalaibii</h1>
              </div>
              <div>
                <FaFacebook />
                <h1>: @jalaibii</h1>
              </div>
              <div>
                <RiInstagramFill />
                <h1>: @jalaibii</h1>
              </div>
              <div>
                <FaTelegramPlane />
                <h1>: @jalaibii</h1>
              </div>
            </div>
          </div>
          <div className={styles.portLev}>
            <h1>Portfolio</h1>
            <div className={styles.portfolio}>
              <div>
                <Image
                  src="/images/agency_001.jpeg"
                  width={400}
                  height={400}
                  alt="Image"
                />
                <div className={styles.overlay}>
                  <h3>Website #1</h3>
                </div>
              </div>
              <div>
                <Image
                  src="/images/agency_002.jpeg"
                  width={400}
                  height={400}
                  alt="Image"
                />
                <div className={styles.overlay}>
                  <h3>Website #1</h3>
                </div>
              </div>
              <div>
                <Image
                  src="/images/Agency_003.jpeg"
                  width={400}
                  height={400}
                  alt="Image"
                />
                <div className={styles.overlay}>
                  <h3>Website #1</h3>
                </div>
              </div>
              <div>
                <Image
                  src="/images/Agency_004.jpeg"
                  width={400}
                  height={400}
                  alt="Image"
                />
                <div className={styles.overlay}>
                  <h3>Website #1</h3>
                </div>
              </div>
              <div>
                <Image
                  src="/images/Agency_005.jpeg"
                  width={400}
                  height={400}
                  alt="Image"
                />
                <div className={styles.overlay}>
                  <h3>Website #1</h3>
                </div>
              </div>
              <div>
                {" "}
                <Image
                  src="/images/Agency_006.jpeg"
                  width={400}
                  height={400}
                  alt="Image"
                />
                <div className={styles.overlay}>
                  <h3>Website #1</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileOne
