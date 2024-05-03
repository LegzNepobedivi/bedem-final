import { Search } from "@/components/adminpage/Search";
import DragAndDrop from "@/components/adminpage/DragAndDrop";
import { CustomKanban } from "@/components/adminpage/NotionKanban";

export default async function IndexPage({ searchParams }) {
  const search = searchParams.q ?? "";
  const offset = searchParams.offset ?? 0;

  return (
    <main className="flex flex-1 flex-col p-4 md:p-6">
      <div className="flex items-center mb-8">
        <h1 className="font-semibold text-lg md:text-2xl">Users</h1>
      </div>
      {/* <div className="w-full mb-4">
        <Search value={searchParams.q} />
      </div> */}
      <DragAndDrop />
      <CustomKanban />
    </main>
  );
}
