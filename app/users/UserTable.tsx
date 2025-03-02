import { sort as fastSort } from 'fast-sort';
import Link from 'next/link';

export interface User {
  id: number;
  name: string;
  email: string;
}

enum SortType {
  ASC = 'ASC',
  DESC = 'DESC',
}

export type Sort = SortType.ASC | SortType.DESC;

interface Props {
  order?: keyof User;
  sort?: Sort;
}

function generateHerfByOrderAndSort(order: keyof User, sort: Sort): string {
  return `/users?order=${order}&sort=${sort === SortType.ASC ? SortType.DESC : SortType.ASC}`;
}

async function UserTable({ order = 'name', sort = SortType.ASC }: Props) {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  let users: User[] = await res.json();

  if (sort === SortType.ASC) {
    users = fastSort(users).asc(user => user[order]);
  } else {
    users = fastSort(users).desc(user => user[order]);
  }

  return (
    <table className="table">
      <thead>
        <tr>
          <th>
            <Link href={generateHerfByOrderAndSort('name', sort)}>Name</Link>
          </th>
          <th>
            <Link href={generateHerfByOrderAndSort('email', sort)}>Email</Link>
          </th>
        </tr>
      </thead>
      <tbody>
        {users.map(user =>
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
          </tr>
        )}
      </tbody>
    </table>
  )
}

export default UserTable;
