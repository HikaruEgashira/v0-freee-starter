import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  const allowIndex = process.env.NEXT_PUBLIC_ALLOW_ROBOTS === "true"
  return {
    rules: {
      userAgent: "*",
      ...(allowIndex ? { allow: "/" } : { disallow: "/" }),
    },
  }
}
