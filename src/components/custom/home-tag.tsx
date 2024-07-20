import { Link } from "react-router-dom";
import { ArrowRightIcon } from "lucide-react";

export function Announcement() {
  return (
    <>
      <Link
        to={""}
        className="inline-flex items-center rounded-lg bg-muted px-3 py-1 text-sm font-medium mb-10"
      >
        <span>or check out on github</span>
        <ArrowRightIcon className="ml-1 h-4 w-4" />
      </Link>
    </>
  );
}
