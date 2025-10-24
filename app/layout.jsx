import "./globals.css";
import Navbar from "@/components/Navbar";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
import "./nprogress.css";
import { Analytics } from "@vercel/analytics/react";
import Chat from "@/components/Chat";
import ClientTopProgressBar from "@/components/ClientTopProgressBar";

export const metadata = {
	title: "daffa's | Portofolio",

	description:
		"My name is Daffa, I'm a Full stack developer and I'm passionate about it. I'm graduate from President University .",

	author: "Daffa Febrian Saputra",
	siteUrl: "https://www.daffafs.my.id",
	applicationName: "Daffa's",

	keywords: [
		"alvalens",
		"alvalen",
		"alvalen shafel",
		"shafel",
		"alvalen shafelbilyunazra",
		"alvalen shafel bilyunazra",
		"bloodfallen",
		"alvalen porto",
		"alvalen um",
	],

	openGraph: {
		type: "website",
		url: "https://www.daffafs.my.id",
		title: "Daffa's | Portofolio",
		site_name: "Daffa's | Portofolio",
		description: "My name is Daffa, This is my portofolio website.",
		width: 1200,
		height: 630,
		images: [
			{
				url: "/og-image-rev.png",
				alt: "Daffa Portofolio",
			},
		],
		site_name: "Daffa's | Portofolio",
	}
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<ClientTopProgressBar />
				<Navbar />
				{children}
				<Chat />
				<Analytics />
			</body>
		</html>
	);
}
