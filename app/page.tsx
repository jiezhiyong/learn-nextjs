import Image from 'next/image';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'RootPage',
};

export default function RootPage() {
  return (
    <section className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
      <p className="text-xl text-gray-800 md:text-3xl md:leading-normal">
        <strong>Welcome to Next.js.</strong> This is the example for the Next.js Learn Course
      </p>
      <Link
        href="/login"
        className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
      >
        <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
      </Link>
    </section>
  );
}
