"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function SkillsPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/#skills");
  }, [router]);

  return (
    <div className="min-h-screen bg-[#030712] flex items-center justify-center text-cyan-300 text-sm">
      Redirecting to Skills...
    </div>
  );
}

