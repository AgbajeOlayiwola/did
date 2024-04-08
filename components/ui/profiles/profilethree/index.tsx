import Image from "next/image"
import { FaBitcoin } from "react-icons/fa"
import { FaEthereum } from "react-icons/fa6"
import { TbCurrencySolana } from "react-icons/tb"
import styles from "./styles.module.css"
const ProfileThree = ({
  tier,
  profileId,
}: {
  tier: string
  profileId: string
}) => {
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
                src="/images/Nft_logo.jpeg"
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
                <FaEthereum />
                <h1>
                  : 2ibbwsuejkdkbjcwaksjbviu2eid274789t845998392doihwiobufiwu4g
                </h1>
              </div>
              <div>
                <FaBitcoin />
                <h1>
                  : 2ibbwsuejkdkbjcwaksjbviu2eid274789t845998392doihwiobufiwu4g
                </h1>
              </div>
              <div>
                <TbCurrencySolana />
                <h1>
                  : 2ibbwsuejkdkbjcwaksjbviu2eid274789t845998392doihwiobufiwu4g
                </h1>
              </div>
            </div>
          </div>
          <div className={styles.portLev}>
            <h1>NFTS</h1>
            <div className={styles.portfolio}>
              <div>
                <Image
                  src="/images/Nft_001.jpeg"
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
                  src="/images/Nft_002.jpeg"
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
                  src="/images/Nft_003.jpeg"
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
                  src="/images/Nft_004.jpeg"
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
                  src="/images/Nft_005.jpeg"
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
                  src="/images/Nft_006.jpeg"
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

export default ProfileThree
