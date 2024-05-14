import { LoaderCircle } from 'lucide-react';

export default function Loading() {
  return (
    <div className="fixed left-0 top-0 z-20 flex size-full items-center justify-center">
      <div className="flex animate-spin items-center">
        <LoaderCircle className="size-12 text-primary" />
      </div>
    </div>
  );
}
