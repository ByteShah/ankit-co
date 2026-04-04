import type { Metadata } from "next";
import ResourcesClient from "./ResourcesClient";
import { FIRM } from "@/lib/constants";

export const metadata: Metadata = {
  alternates: { canonical: `${process.env.NEXT_PUBLIC_SITE_URL ?? 'https://ankitshahco.com'}/resources` },
  title: "Knowledge Hub",
  description: `Tax insights, GST alerts, compliance guides and financial tools from ${FIRM.name}.`,
};

export default function ResourcesPage() {
  return <ResourcesClient />;
}
