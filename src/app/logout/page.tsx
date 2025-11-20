import { logoutAction } from "./actions";

export default function LogoutPage() {
  return (
    <form action={logoutAction}>
      <script
        dangerouslySetInnerHTML={{
          __html: `document.currentScript.parentElement.requestSubmit();`,
        }}
      />
    </form>
  );
}
