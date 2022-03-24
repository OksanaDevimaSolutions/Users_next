import Link from "next/link";
import React from "react";
import useSwr from "swr";

import fetcher from "../src/utils/fetcher";

export default function Index() {
  const { data, error } = useSwr("/api/users", fetcher);

  if (error) return <div>Failed to load users</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <ul>
      {data.map((user) => (
        <li key={user.id}>
          <Link href="/users/[id]" as={`/users/${user.id}`} passHref>
            <a href="replace">{`User ${user.id}`}</a>
          </Link>
        </li>
      ))}
      {data.map((product) => (
        <li key={product.id}>
          <Link href="/products/[id]" as={`/products/${product.id}`} passHref>
            <a href="replace">{`Product ${product.id}`}</a>
          </Link>
        </li>
      ))}
    </ul>
  );
}
