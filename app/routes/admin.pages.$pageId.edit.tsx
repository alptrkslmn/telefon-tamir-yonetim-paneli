import { json, redirect, type ActionFunction, type LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getPage, updatePage } from "~/models/page.server";
import PageEditor from "~/components/admin/PageEditor";

export const loader: LoaderFunction = async ({ params }) => {
  const page = await getPage(params.pageId!);
  if (!page) {
    throw new Response("Sayfa bulunamadı", { status: 404 });
  }
  return json({ page });
};

export const action: ActionFunction = async ({ request, params }) => {
  const formData = await request.formData();
  const title = formData.get("title") as string;
  const slug = formData.get("slug") as string;
  const content = formData.get("content") as string;
  const isPublished = formData.get("isPublished") === "true";

  await updatePage({
    id: params.pageId!,
    title,
    slug,
    content,
    isPublished,
  });

  return redirect("/admin/pages");
};

export default function EditPage() {
  const { page } = useLoaderData<typeof loader>();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
          Sayfayı Düzenle: {page.title}
        </h1>
        <PageEditor
          defaultValues={{
            title: page.title,
            slug: page.slug,
            content: page.content,
            isPublished: page.isPublished,
          }}
          isEditing
        />
      </div>
    </div>
  );
}
