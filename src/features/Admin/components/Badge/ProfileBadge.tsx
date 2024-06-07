import { forwardRef } from "react";
import { Group, Avatar, Text, UnstyledButton } from "@mantine/core";
import { MdChevronRight } from "react-icons/md";

interface ProfileBadgeProps extends React.ComponentPropsWithoutRef<"button"> {
  image?: string;
  name: string;
  role: string;
  icon?: React.ReactNode;
}

const ProfileBadge = forwardRef<HTMLButtonElement, ProfileBadgeProps>(
  ({ image, name, role, icon, ...others }: ProfileBadgeProps, ref) => (
    <UnstyledButton
      ref={ref}
      style={{
        padding: "var(--mantine-spacing-md)",
        color: "var(--mantine-color-text)",
        borderRadius: "var(--mantine-radius-sm)",
      }}
      {...others}
    >
      <Group>
        <Avatar src={image} radius="xl" />

        <div style={{ flex: 1 }}>
          <Text size="md" fw={500}>
            {name}
          </Text>

          <Text c="dimmed" size="sm">
            {role}
          </Text>
        </div>

        {icon || <MdChevronRight size="1rem" />}
      </Group>
    </UnstyledButton>
  ),
);

export default ProfileBadge;
