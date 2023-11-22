import Animelist from "@/components/Animelist";
import Header from "@/components/Animelist/header";

const Page = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`
  );
  const TopAnime = await response.json();
  return (
    <>
      {/* anime populer */}
      <section>
        <Header
          title="Paling Populer"
          linktitle="Show all"
          linkhref="/populer"
        />
        <Animelist api={TopAnime} />
      </section>
    </>
  );
};
export default Page;
