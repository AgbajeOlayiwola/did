"use client"
import ProfileOne from "@/components/ui/profiles/profileone"
import ProfileThree from "@/components/ui/profiles/profilethree"
import ProfileTwo from "@/components/ui/profiles/profiletwo"
import { useEffect, useState } from "react"
import styles from "./styles.module.css"
const Profile = ({ params }: { params: { slug: string } }) => {
  const [page, setPage] = useState(1)
  const urlParams = new URLSearchParams(window.location.search)
  const id = urlParams.get("id")

  useEffect(() => {
    console.log(id)
    setPage(Number(id))
  }, [])
  const conditional_component = () => {
    switch (page) {
      case 1:
        return <ProfileOne tier={"/images/33.png"} profileId={params.slug} />
      case 2:
        return <ProfileThree tier={"/images/33.png"} profileId={params.slug} />
      case 3:
        return <ProfileTwo tier={"/images/33.png"} profileId={params.slug} />
    }
  }
  return <div className={styles.outer}>{conditional_component()}</div>
}

export default Profile
