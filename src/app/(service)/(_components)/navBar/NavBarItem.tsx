import Link from "next/link";
import { REG_EXP } from "../../../../shared/const/regExp";
import "./NavBarItem.module.css";

interface Props {
  href: string;
  baseUrl: string;
  label: string;
  exact?: boolean;
  showExternalMark?: boolean;
}

export default function NavBarItem({
  href,
  baseUrl,
  label,
  exact,
  showExternalMark,
}: Props) {
  const isExternal = REG_EXP.EXTERNAL_URL.test(href);
  const isActive = exact ? href === baseUrl : baseUrl.startsWith(href);

  return (
    <Link href={href}>
      <span>{label}</span>
      {showExternalMark && isExternal}
    </Link>
  );
}
