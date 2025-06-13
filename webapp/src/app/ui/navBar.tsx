import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Avatar, Button, Stack, Typography } from "@mui/material";
// import { handleSignOut } from "../lib/actions";

const links = [
  { name: "Home", href: "/" },
  { name: "Courses", href: "/courses" },
  { name: "Community", href: "/community" },
  { name: "About", href: "/about" },
];

export default function NavBar() {
  const pathname = usePathname();

  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{
        my: 6,
      }}
    >
      {/* Logo Section */}
      <Stack direction="row" alignItems="center" spacing={2}>
        <Link
          href="/"
          style={{
            textDecoration: "none",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Image
            src="/assets/logo.svg"
            width={50}
            height={50}
            alt="CourseCo Logo"
          />
          <Typography variant="h3" color="primary" fontWeight="medium">
            CourseCo
          </Typography>
        </Link>
      </Stack>

      {/* Navigation Links */}
      <Stack direction="row" spacing={4} alignItems="center">
        {links.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            style={{
              textDecoration: "none",
            }}
          >
            <Typography
              variant="body1"
              fontWeight="500"
              color={pathname === link.href ? "error.main" : "text.primary"}
              sx={{
                px: 1,
                py: 0.5,
                "&:hover": {
                  color: "error.main",
                },
              }}
            >
              {link.name}
            </Typography>
          </Link>
        ))}
      </Stack>

      {/* Sign-Up Button */}

      <Button
        variant="contained"
        sx={{
          borderRadius: 6,
          gap: 2,
          px: 1,
        }}
        // onClick={handleSignOut}
      >
        <Avatar />
        Sign Out
      </Button>
    </Stack>
  );
}
