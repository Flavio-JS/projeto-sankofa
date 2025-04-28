import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Associação Sankofa | Arte, Educação e Cultura Afro-Brasileira",
  description:
    "Desde 2015, a Associação Sankofa promove ações artísticas, pedagógicas e de pesquisa em percussão e cultura afro-brasileira. Atuando no IFG-Inhumas, o projeto realiza espetáculos, oficinas e desenvolve grupos como Sankofa/2GP, Afro Samba, Duo e Ritmos e Danças.",
  keywords: [
    "Associação Sankofa",
    "cultura afro-brasileira",
    "percussão",
    "educação musical",
    "música de concerto",
    "manifestações culturais",
    "samba",
    "IFG Inhumas",
    "Kemuel Kesley",
    "arte e educação",
    "ritmos afro",
    "projeto cultural",
    "performance musical",
    "grupos de percussão",
    "Sankofa Ritmos e Danças",
  ],
  authors: [
    { name: "Kemuel Kesley", url: "https://www.instagram.com/pro_sankofa" },
    { name: "Flávio JS", url: "https://www.instagram.com/flavio.js.softwares" },
  ],
  openGraph: {
    title: "Associação Sankofa | Cultura, Ritmo e Educação",
    description:
      "Projeto de extensão do IFG que une performance musical, educação e valorização da cultura afro-brasileira. Conheça nossos espetáculos, oficinas e ações pedagógicas.",
    url: "https://www.seusite.com/projetosankofa",
    siteName: "Associação Sankofa",
    images: [
      {
        url: "https://instagram.fbsb9-1.fna.fbcdn.net/v/t51.2885-15/483101534_18485860423014826_7060171874026351462_n.jpg?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0uaW1hZ2VfdXJsZ2VuLjEyMDV4OTA4LnNkci5mNzU3NjEuZGVmYXVsdF9pbWFnZSJ9&_nc_ht=instagram.fbsb9-1.fna.fbcdn.net&_nc_cat=110&_nc_oc=Q6cZ2QE0iSx6x8kVJrA3bY9Gvy75t7xuYCZ6UdvT1oOWARXIRbWi2mCamlWugxAZiTzTAG8&_nc_ohc=NtBpnu_NtYEQ7kNvwGg_WT-&_nc_gid=xq3CJ4mkP_2oH6R_hA-zkQ&edm=AP4sbd4BAAAA&ccb=7-5&ig_cache_key=MzU4MTI2NTUyNTc4Mzc1NzQ1MQ%3D%3D.3-ccb7-5&oh=00_AfHwK3PKnmH3jcQvvqIEELu0jTPVuViqMZ5nOmdSk9ZIow&oe=680DF497&_nc_sid=7a9f4b",
        width: 1200,
        height: 630,
        alt: "Associação Sankofa - Cultura Afro-Brasileira e Educação Musical",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
