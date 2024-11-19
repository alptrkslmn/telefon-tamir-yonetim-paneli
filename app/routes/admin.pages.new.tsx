import { redirect, type ActionFunction } from "@remix-run/node";
import { createPage } from "~/models/page.server";
import PageEditor from "~/components/admin/PageEditor";

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const title = formData.get("title") as string;
  const slug = formData.get("slug") as string;
  const content = formData.get("content") as string;
  const isPublished = formData.get("isPublished") === "true";

  await createPage({ title, slug, content, isPublished });

  return redirect("/admin/pages");
};

export default function NewPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Yeni Sayfa Oluştur</h1>
        <PageEditor />
      </div>
    </div>
  );
}
