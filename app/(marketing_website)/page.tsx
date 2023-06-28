import Link from "next/link";

export default function Home() {
  return (
    <div className="m-10 flex justify-center align-middle">
      <div>
        <h1 className="text-2xl mb-3">Clerk Organizations</h1>
        <p>
          In order to get better acquainted with our users' needs around setting up an Organization and using Stripe to set up seat-based pricing, we are going to create a mock project that will support the following functionality:
        </p>
        <ul>
          <li>
            Users can sign up via the Clerk components
          </li>
          <li>
            Users can manage their accounts via the Clerk components
          </li>
          <li>
            These users can create Organizations and manage them via the Clerk components
          </li>
          <li>
          They should be able to invite another user into their Orgs and assign them a role of "member"
          </li>
          <li>
            They should be able to get the list of Organizations and show in which plans they are
          </li>
          <li>
            These plans should come from Stripe.
          </li>
          <li>
            They should be able to change an Org's plan from one to another
          </li>
          <li>
            The number of users should be able to count against the Stripe invoice. If possible, go for pro-rated charging.            
          </li>
        </ul>
        <div>
          <Link className="text-slate-600" href={'https://linear.app/clerk/issue/ORG-27/spike-create-a-b2b-saas-mock-project'}>Linear Ticket</Link>
        </div>
      </div>
    </div>
  )
}
