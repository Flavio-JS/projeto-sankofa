import { AdminHero } from "@/components/admin/components/admin-hero";
import { AdminTabs } from "@/components/admin/components/admin-tabs";
import { ContentTable } from "@/components/admin/components/content-table";
import { EditorModal } from "@/components/admin/components/editor-modal";
import { Pagination } from "@/components/admin/components/pagination";

export default function Admin() {
  return (
    <div className="min-h-screen bg-[#fefefe]">
      <AdminHero />
      <div className="container mx-auto px-6 py-8">
        <AdminTabs />
        <ContentTable />
        <Pagination />
      </div>
      <EditorModal />
    </div>
  );
}
