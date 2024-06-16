import { AppShell, Space } from "@mantine/core";
import NavbarAdmin from "features/Admin/components/Navbar/NavbarAdmin";
import HeaderPageLayout from "features/Admin/layouts/Header/HeaderPageLayout";

import { Outlet, useLocation } from "react-router-dom";

const AdminLayout = () => {
  const { pathname } = useLocation();

  const headerTitle = pathname.split("/")[pathname.split("/").length - 1];

  const convertHeaderTitle = () => {
    const getFirstWord = headerTitle.split("")[0].toUpperCase();
    const getRestWord = headerTitle.slice(1, headerTitle.split("").length);
    return `${getFirstWord}${getRestWord}`;
  };

  return (
    <AppShell
      classNames={{
        main: `bg-neutral-100 `,
        header: `px-8 flex flex-col justify-center align-items -z-10`,
        navbar: `bg-blue-800`,
      }}
      //   header={{ height: 80 }}
      navbar={{
        width: 300,
        breakpoint: "sm",
      }}
      padding={"xl"}
    >
      {/* <AppShell.Header>
        <HeaderAdminLayout />
      </AppShell.Header> */}
      <AppShell.Navbar p={"xl"} className="">
        <NavbarAdmin />
      </AppShell.Navbar>
      <AppShell.Main>
        <HeaderPageLayout title={`${convertHeaderTitle()} Page`} />
        <Space h={20} />
        {/* {children} */}
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
};

export default AdminLayout;
