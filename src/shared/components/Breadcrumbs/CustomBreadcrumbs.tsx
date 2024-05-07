import { Breadcrumbs, Anchor } from "@mantine/core";

interface ICustomBreadcrumbsProps {
  items: { title: string; href: string }[];
  pathname: string;
}

const CustomBreadcrumbs = ({ items, pathname }: ICustomBreadcrumbsProps) => {
  const breadcrumbItem = items.map((item, index) => (
    <Anchor
      href={item.href}
      key={index}
      className={`${pathname.includes(item.title.toLowerCase()) ? "rounded-full bg-neutral-500  px-7 py-2 text-gray-300" : "text-white"} `}
    >
      {item.title}
    </Anchor>
  ));

  return (
    <>
      <Breadcrumbs
        separator=">"
        separatorMargin="md"
        mt="xs"
        classNames={{
          separator: `text-white`,
        }}
      >
        {breadcrumbItem}
      </Breadcrumbs>
    </>
  );
};

export default CustomBreadcrumbs;
