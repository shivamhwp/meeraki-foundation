"use client";
import { CldVideoPlayer } from "next-cloudinary";
import "next-cloudinary/dist/cld-video-player.css";

export default function CloudinaryVideoPlayer(props: any) {
  return <CldVideoPlayer {...props} />;
}
