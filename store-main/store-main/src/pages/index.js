import Head from "next/head";
import dynamic from "next/dynamic";

// Dynamic import to avoid SSR issues with R3F
const ShoeGrid = dynamic(() => import("@/components/grid/ShoeGrid"), {
  ssr: false,
});

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Mina Lidya | Haute Couture</title>
        <meta name="description" content="Özel tasarım gelinlik, nişan elbisesi ve haute couture koleksiyonlarımızı keşfedin. Randevunuzu hemen oluşturun." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />

        {/* Open Graph / WhatsApp Sharing SEO */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Mina Lidya | Haute Couture Gelinlik" />
        <meta property="og:description" content="Özel tasarım gelinlik ve haute couture elbiseler. İnegöl & Valencia Atelier mağazalarındaki koleksiyonlarımızı keşfedin." />
        <meta property="og:image" content="https://minalidya.com/wp-content/uploads/2026/03/estela-4-scaled.avif" />
        <meta property="og:url" content="https://minalidya.wedding/" />
      </Head>
      <ShoeGrid />
    </>
  );
}
