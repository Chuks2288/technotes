import { Routes, Route } from "react-router-dom";
import { Layout, Public, DashLayout } from "./components";
import {
  Login,
  Welcome,
  NotesList,
  UsersList,
  EditNote,
  EditUser,
  NewNote,
  NewUserForm,
  Prefetch,
} from "./feature";
import PersistLogin from "./feature/auth/PersistLogin";
import RequireAuth from "./feature/auth/RequireAuth";
import { ROLES } from "./config/roles";
import useTitle from './hooks/useTitle';

function App() {

  useTitle('Chuks D. Repairs');
  return (
    <Routes>
      <Route path="/" element={<Layout />}>

        {/* Public routes */}
        <Route index element={<Public />} />
        <Route path="login" element={<Login />} />

        {/* {protected Routes} */}
        <Route element={<PersistLogin />}>
          <Route element={<RequireAuth allowedRoles={[...Object.values(ROLES)]} />}>
            <Route element={<Prefetch />}>
              <Route path="dash" element={<DashLayout />}>

                <Route index element={<Welcome />} />

                <Route element={<RequireAuth allowedRoles={[(ROLES.Admin, ROLES.Manager)]} />}>
                  <Route path="users">
                    <Route index element={<UsersList />} />
                    <Route path=":id" element={<EditUser />} />
                    <Route path="new" element={<NewUserForm />} />
                  </Route>
                </Route>

                <Route path="notes">
                  <Route index element={<NotesList />} />
                  <Route path=":id" element={<EditNote />} />
                  <Route path="new" element={<NewNote />} />
                </Route>

                {/* End Dash */}
              </Route>
            </Route>

            {/* End Protected Routes */}
          </Route>
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
