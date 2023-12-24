import { isoFetch, useLazyReference, read } from "@isograph/react";
import HomeRouteEntrypoint from "@iso/Query/home_page_list/entrypoint.isograph";

export default function MainApp() {
  const { queryReference } = useLazyReference(
    isoFetch<typeof HomeRouteEntrypoint>`
      Query.home_page_list
    `,
    {}
  );

  return read(queryReference)({});
}
