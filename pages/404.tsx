import React from "react";
import Link from "next/link";

function NotFoundPage() {
  return (
    <div className="container h-screen flex flex-col items-center justify-center bg-background text-center">
      <div className="text-6xl md:text-9xl text-primary font-bold">404</div>
      <div className="text-4xl md:text-6xl text-primary font-bold">
        Oops Not Found
      </div>
      <div className="text-xl md:text-2xl text-primary mt-3">
        You&apos;re looking for doesn&apos;t exist.
      </div>
      <Link href="/" className="mt-12 text-primary hover:underline">
        Go back home
      </Link>
    </div>
  );
}

export default NotFoundPage;
