"use client"

import Link from "next/link"
import { useOrganizationList } from "@clerk/nextjs"

export default function Dashboard() {
  const {
    isLoaded: areOrgsLoaded,
    organizationList,
  } = useOrganizationList();

  if (!areOrgsLoaded) {
    return null;
  }

  return(
    <div className='m-3'>
      <div>
        My Projects:
      </div>
      <div>
        My Organizations:
        {organizationList.length > 0 && (
          <ul>
            {organizationList.map(({organization}) => (
              <li key={organization.id}>
                <Link href={`/organizations/${organization.slug}`}>{organization.name}</Link>
              </li>
            ))}
          </ul>
        )}
        <div>
          <Link href='/organizations/new'>Create an Organization</Link>
        </div>
      </div>
      <div>
        <Link href='/settings'>My Settings</Link>
      </div>
    </div>
  )
}