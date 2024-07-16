'use client';
import ColorPalette from '@/components/color-palette';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Link href="/avatars" style={{ color: 'blue' }}>
        Avatars
      </Link>

      <ColorPalette />
    </div>
  );
}
