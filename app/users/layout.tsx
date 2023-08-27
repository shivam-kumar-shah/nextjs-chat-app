import getUsers from "../actions/getUsers";
import Sidebar from "../components/sidebar/Sidebar";
import UserList from "./components/UserList";

export default async function UsersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const users = await getUsers();

  // REMEMBER: Good technique to add a responsive sidebar by making it the parent of whole pages content
  return (
    <Sidebar>
      <div className="h-full">
        <UserList items={users!} />
        {children}
      </div>
    </Sidebar>
  );
}
