import Footer from "@/components/Footer";

export const metadata = {
  title: "Daffa's | About"
};
export default function Layout({ children }) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}
