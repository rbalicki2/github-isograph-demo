import { useEffect, useState } from "react";

import { setNetwork, subscribe } from "@isograph/react";
import { getSession } from "next-auth/react";
import MainApp from "./MainApp";

type Session = NonNullable<Awaited<ReturnType<typeof getSession>>>;

function makeNetworkRequestFn(token: string) {
  return function makeNetworkRequest<T>(
    queryText: string,
    variables: any
  ): Promise<T> {
    let promise = fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + process.env.NEXT_PUBLIC_GITHUB_TOKEN,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query: queryText, variables }),
    }).then((response) => response.json());
    return promise;
  };
}

export default function ({ session }: { session: Session }) {
  // @ts-expect-error
  const accessToken = session.accessToken;
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setNetwork(makeNetworkRequestFn(accessToken));
    setIsMounted(true);
  }, [accessToken]);

  // N.B. we are rerendering the root component on any store change
  // here. Isograph will support more fine-grained re-rendering in
  // the future, and this will be done automatically as part of
  // useLazyReference.
  const [, setState] = useState<object | void>();
  useEffect(() => {
    return subscribe(() => setState({}));
  }, []);

  if (!isMounted) {
    return null;
  }

  return <MainApp />;
}
