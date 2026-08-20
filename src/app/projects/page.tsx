"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ProjectsPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/#projects");
  }, [router]);

  return (
    <div className="min-h-screen bg-[#030712] flex items-center justify-center text-cyan-300 text-sm">
      Redirecting to Projects...
    </div>
  );
}

