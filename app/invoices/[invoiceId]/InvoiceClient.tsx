"use client";

import Link from "next/link";

import { Item } from "@prisma/client";
import { SafeInvoice } from "@/app/types";

import { ArrowLeft } from "@/app/assets/icons/icons";
import InvoiceHead from "@/app/components/invoice/InvoiceHead";
import InvoiceInfo from "@/app/components/invoice/InvoiceInfo";
import InvoiceActionButtons from "@/app/components/invoice/InvoiceActionButtons";

interface InvoiceClientProps {
  invoice: SafeInvoice & { items: Item[] };
}

const InvoiceClient: React.FC<InvoiceClientProps> = ({ invoice }) => {
  const status =
    invoice.status === "PENDING"
      ? "pending"
      : invoice.status === "DRAFT"
      ? "draft"
      : "paid";

  return (
    <div className="flex flex-col h-full gap-6 text-sm font-bold text-primary">
      <Link href="/" className="flex items-center self-start gap-5 p-2">
        <ArrowLeft />
        <span>Go back</span>
      </Link>
      <InvoiceHead status={status} invoiceId={invoice.id} />
      <InvoiceInfo invoice={invoice} />
      <div className="flex justify-between flex-1 sm:hidden px-6 py-4 bg-[#FFFFFF] dark:bg-[#1E2139] items-center rounded-t-md">
        <InvoiceActionButtons invoiceId={invoice.id} status={status} />
      </div>
    </div>
  );
};

export default InvoiceClient;
