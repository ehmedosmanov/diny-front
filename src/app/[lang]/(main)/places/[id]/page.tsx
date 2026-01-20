import React from 'react';
export { generateStaticParams } from '../static-params';

export default async function OrderPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <div>salam {id}</div>;
}
