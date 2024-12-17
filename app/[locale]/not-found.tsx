import { Link } from "@/i18n/routing";
import { MainLayout } from "@/views/layout/MainLayout";

export const dynamic = "force-dynamic";

export default function NotFound() {
  return (
    <MainLayout>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/">Return Home</Link>
    </MainLayout>
  );
}
