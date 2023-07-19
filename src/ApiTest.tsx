import { Fragment, useEffect, useState } from "react";

interface Props {
  users: Users[];
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

async function fetchData(apiUrl: string): Promise<any[]> {
  return fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        console.warn("Network not OK");
        return [];
      } else {
        return response.json();
      }
    })
    .then((apiData: any[]) => {
      if (apiData.length === 0) {
        return [];
      } else {
        console.log("inside fetchData");
        console.log(apiData);
        return apiData;
      }
    });
}

export function ApiTest() {
  const [data, setData] = useState<Props>({ users: [], isLoaded: false });

  const apiUrl = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    fetchData(apiUrl).then((users: Users[]) => {
      console.log("inside useEffect");
      console.log(users);
      setData({ ...data, users: users, isLoaded: true });
    });
  }, []);

  return (
    <Fragment>
      {!data?.isLoaded && <p>Loading...</p>}
      {data?.isLoaded && (
        <ul>
          {data.users.map((user) => {
            return (
              <li key={user.id}>
                Name: {user.name} | Email: {user.email}
              </li>
            );
          })}
        </ul>
      )}
    </Fragment>
  );
}
