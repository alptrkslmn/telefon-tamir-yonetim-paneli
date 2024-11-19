import { db } from "~/db.server";

export type Page = {
  id: string;
  title: string;
  slug: string;
  content: string;
  isPublished: boolean;
  createdAt: Date;
  updatedAt: Date;
};

export async function getPages() {
  return db.page.findMany({
    orderBy: { updatedAt: "desc" },
  });
}

export async function getPage(slug: string) {
  return db.page.findUnique({
    where: { slug },
  });
}

export async function createPage({
  title,
  slug,
  content,
  isPublished = false,
}: Pick<Page, "title" | "slug" | "content" | "isPublished">) {
  return db.page.create({
    data: {
      title,
      slug,
      content,
      isPublished,
    },
  });
}

export async function updatePage({
  id,
  title,
  slug,
  content,
  isPublished,
}: Pick<Page, "id" | "title" | "slug" | "content" | "isPublished">) {
  return db.page.update({
    where: { id },
    data: {
      title,
      slug,
      content,
      isPublished,
      updatedAt: new Date(),
    },
  });
}

export async function deletePage(id: string) {
  return db.page.delete({
    where: { id },
  });
}
