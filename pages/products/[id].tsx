import { useRouter } from 'next/router';
import useSwr from 'swr';
import React from 'react';
import fetcher from '../../src/utils/fetcher';

// const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Product() {
  const router = useRouter();
  const { data, error } = useSwr(
    router.query.id ? `/api/product/${router.query.id}` : null,
    fetcher,
  );

  if (error) return <div>Failed to load user</div>;
  if (!data) return <div>Loading...</div>;

  return <div>{data.title}</div>;
}
