import PageEditor from "../components/PageEditor";
import { emptyPage } from "@/types/page";
import { createPageAction } from "./actions";

export default function NewPage() {
  return <PageEditor initialPage={emptyPage} onSave={createPageAction} />;
}
