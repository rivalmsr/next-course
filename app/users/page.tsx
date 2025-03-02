import UserTable, { Sort, User } from "./UserTable";

interface Props {
  searchParams: { order: keyof User, sort: Sort }
}

function Page({ searchParams: { order, sort } }: Props) {
  return (
    <div>
      <h2>User List</h2>
      <UserTable order={order} sort={sort} />
    </div>
  );
}

export default Page;
