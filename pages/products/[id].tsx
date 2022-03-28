import { useRouter } from "next/router";
import React from "react";
import useSwr from "swr";

import fetcher from "../../src/utils/fetcher";

export default function Product() {
  const router = useRouter();
  const { data, error } = useSwr(
    router.query.id ? `/api/product/${router.query.id}` : null,
    fetcher
  );

  if (error) return <div>Failed to load user</div>;
  if (!data) return <div>Loading...</div>;

  return <div>{data.title}</div>;
}
