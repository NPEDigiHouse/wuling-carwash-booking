import { AppShell } from "@mantine/core";
import HeaderAdmin from "features/Admin/components/Header/HeaderAdmin";
import NavbarAdmin from "features/Admin/components/Navbar/NavbarAdmin";
import { ReactNode } from "react";

interface IAdminLayout {
  children: ReactNode;
}

const AdminLayout = ({ children }: IAdminLayout) => {
  return (
    <AppShell
      classNames={{
        main: `bg-neutral-100 `,
        header: `px-8 flex flex-col justify-center align-items`,
      }}
      header={{ height: 80 }}
      navbar={{
        width: 300,
        breakpoint: "sm",
      }}
      padding={"lg"}
    >
      <AppShell.Header>
        {/* <Burger
          opened={opened}
          onClick={toggle}
          hiddenFrom="sm"
          size="sm"
        /> */}
        <HeaderAdmin />
      </AppShell.Header>
      <AppShell.Navbar p={"lg"}>
        <NavbarAdmin />
      </AppShell.Navbar>
      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
};

export default AdminLayout;
