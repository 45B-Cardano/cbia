import Head from "next/head";

interface Props {
  title?: string;
  description?: string;
  productionLink?: string;
  preview?: string;
  keywords?: string;
}

const Seo = ({
  title = "The Cardano Blockchain Infrastructure Alliance",
  description = "The CBIA brings together experts, innovators and industry leaders that have shaped the Cardano ecosystem with blockchain infrastructure and tooling.",
  productionLink = "",
  preview = "/images/thumbnail.png",
  keywords = "",
}: Props) => (
  <Head>
    <title>{title}</title>
    <meta property="og:title" content={title} />

    <meta property="og:description" content={description.substring(0, 160)} />
    <meta name="description" content={description.substring(0, 160)} />

    <meta name="keywords" content={keywords} />

    <link rel="shortcut icon" href="/favicon.png" type="image/png" />

    {productionLink && <link rel="canonical" href={productionLink} />}

    <meta property="og:image" content={preview} />

    <meta name="twitter:card" content="summary" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description.substring(0, 160)} />
    <meta name="twitter:image" content={preview} />
  </Head>
);

export default Seo;
