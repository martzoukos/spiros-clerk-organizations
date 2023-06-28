import Link from "next/link"
import { OrganizationProfile } from "@clerk/nextjs"

export default function OrganizationHome({ params }: { params: { org_slug: string }}) {
  return(
    <>
      <ul className="m-4">
        <li>
          <Link href={`/organizations/${params.org_slug}/settings`}>Settings</Link>
        </li>
        <li>
          <Link href={`/organizations/${params.org_slug}/members`}>Members</Link>
        </li>
        <li>
          <Link href={`/organizations/${params.org_slug}/billing`}>Billing</Link>
        </li>
        <li>
          <Link href={`/organizations/${params.org_slug}/usage`}>Usage</Link>
        </li>
      </ul>
      <OrganizationProfile />
    </>
  )
}