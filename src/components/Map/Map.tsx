// Como utilizar o .map() para renderizar uma lista de elementos
// https://www.youtube.com/watch?v=8FpmlwTg56E

interface userInfo {
  name: string;
  age: number;
  address: string;
  isAdmin: boolean;
}

const users: userInfo[] = [
  { name: "John", age: 20, address: "123 Main St", isAdmin: false },
  { name: "Rita", age: 23, address: "100 Closer St", isAdmin: true },
  { name: "Richard", age: 30, address: "500 Ribbon St", isAdmin: false },
  { name: "Jason", age: 20, address: "123 Main St", isAdmin: false },
  { name: "Max", age: 23, address: "100 Closer St", isAdmin: true },
  { name: "Joyce", age: 30, address: "500 Ribbon St", isAdmin: false },
];

export default function Map() {
  return (
    <>
      <h1>MAP</h1>
      <ul>
        {users.map((x, i) => (
          <li key={i}>
            {x.name} - {x.age}
            {x.address} - {x.isAdmin ? "Admin" : "User"}
          </li>
        ))}
      </ul>
    </>
  );
}
