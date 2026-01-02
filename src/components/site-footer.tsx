import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="w-full border-t py-6 text-center text-sm text-muted-foreground">
      <p>Built by ncdai</p>
      <p>
        <Link href="https://github.com/yhackerxl/kennedy">
          Source on GitHub
        </Link>
      </p>
    </footer>
  );
}
