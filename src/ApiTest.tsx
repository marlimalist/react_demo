import { Fragment, useEffect, useState } from "react";

interface Props {
  items: Users[];
  isLoaded: boolean;
}

interface Users {
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {};
  };
  company: { name: string; catchPhrase: string; bs: string };
  email: string;
  id: number;
  name: string;
  phone: string;
  username: string;
  website: string;
}

export function ApiTest() {
  const [data, setData] = useState<Props>({ items: [], isLoaded: false });

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json() as Promise<Users[]>)
      .then((json) => {
        setData({ ...data, items: json, isLoaded: true });
      });
  }, []);

  return (
    <Fragment>
      <div>{!data.isLoaded && <p>Loading....</p>}</div>
      {data.isLoaded && (
        <ul>
          {data.items.map((user) => {
            return (
              <li key={user.id}>
                Name: {user.address.city} | Email: {user.email}
              </li>
            );
          })}
        </ul>
      )}
    </Fragment>
  );
}
