import Animelist from "@/components/Animelist";
import Header from "@/components/Animelist/header";

const Page = async ({ params }) => {
  const { keyword } = params;
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${keyword}`
  );
  const searchAnime = await response.json();
  return (
    <>
      {/* anime populer */}
      <section>
        <Header title={`Pencarian untuk ${keyword}...`} />
        <Animelist api={searchAnime} />
      </section>
    </>
  );
};
export default Page;
