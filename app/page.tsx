import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Next.js',
};

export default function Home() {
  return (
    <section className="">
      <Image className="dark:invert" src="/next.svg" alt="Next.js logo" width={180} height={38} priority />
    </section>
  );
}
