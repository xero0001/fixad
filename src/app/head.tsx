import { METADATA } from '../shared/const'

export default function Head() {
  return (
    <>
      <title>{METADATA.TITLE}</title>
      <meta property="og:type" content="website" key="type" />
      <meta property="og:title" content={METADATA.TITLE} key="title" />
      <meta property="og:description" content={METADATA.DESC} key="description" />
      <meta property="og:image" content={METADATA.IMAGE} key="image" />
      <meta property="og:image:width" content={METADATA.IMAGE_WIDTH} />
      <meta property="og:image:height" content={METADATA.IMAGE_HEIGHT} />
      {/* <meta name="twitter:card" content="summary" /> */}
      {/* <meta name="twitter:title" content={METADATA.TITLE} /> */}
      {/* <meta name="twitter:description" content={METADATA.DESC} /> */}
      {/* <meta name="twitter:image" content={METADATA.IMAGE_RECTANGLE} /> */}
      <meta content="width=device-width, initial-scale=1.0, user-scalable=no" name="viewport" />
      <link rel="icon" href="/favicon.ico" />
    </>
  )
}
