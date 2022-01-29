import Head from "next/head";

import { motion } from "framer-motion";
import QRCode from "../components/QRCode";

export default function Home() {
  return (
    <div className="px-2 bg-light-gray">
      <Head>
        <title>QR Code Component</title>
        <meta name="description" content="Generated by Mike van Peeren" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen flex flex-col justify-center items-center bounce-in-top">
        <div className="bg-white shadow-2xl w-10/12 md:w-5/12 lg:w-4/12 xl:w-3/12 2xl:w-3/12 flex flex-col justify-center items-center rounded-2xl px-4">
          <div className="my-4 p-4 bg-blue w-full rounded-2xl">
            <div className="flex items-center justify-center">
              <QRCode className={`w-full h-full color-change-3x`} />
            </div>
          </div>
          <h1 className="mt-2 font-bold text-2xl text-dark-navy text-center">
            Improve your front-end skills by building projects
          </h1>
          <h2 className="mt-4 mb-10 font-normal text-base text-gray text-center">
            Scan the QR code to visit Mike van Peeren&apos;s website and take
            your coding skills to the next level by contacting him!
          </h2>
        </div>
      </div>
    </div>
  );
}
