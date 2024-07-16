'use client';
import Avatars from '@/components/avatars';
import ColorPalette from '@/components/color-palette';
import Link from 'next/link';

export default function AvatarsPage() {
  return (
    <div className="w-[40%] m-auto text-center">
      <Link href="/" style={{ color: 'blue' }}>
        Home
      </Link>

      <h1 className="text-2xl my-4">Avatars</h1>

      <Avatars></Avatars>
    </div>
  );
}
