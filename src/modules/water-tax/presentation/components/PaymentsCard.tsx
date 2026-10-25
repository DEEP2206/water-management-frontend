"use client";

import React from "react";
import { Card } from "@/common/component/Card";
import { Button } from "@/common/component/Button";
import { Receipt, CheckCircle2 } from "lucide-react";
import { WaterPaymentSummary } from "../../domain/entities/WaterPayment";

export interface PaymentsCardProps {
  paymentSummary: WaterPaymentSummary;
  onPayNow?: () => void;
  onViewReceipt?: () => void;
  onViewPaymentHistory?: () => void;
  className?: string;
}

export const PaymentsCard: React.FC<PaymentsCardProps> = ({
  paymentSummary,
  onPayNow,
  onViewReceipt,
  onViewPaymentHistory,
  className = "",
}) => {
  return (
    <Card
      padding="md"
      title="Payments"
      className={`h-full min-h-[300px] flex flex-col border-slate-200/90 shadow-xs hover:shadow-sm ${className}`}
      headerAction={
        <button
          type="button"
          onClick={onViewPaymentHistory}
          className="text-[11px] font-semibold text-[#1A6CF0] hover:underline cursor-pointer"
        >
          View Payment History
        </button>
      }
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 pt-1 flex-1">
        {/* Pending Payment Box */}
        <div className="flex flex-col justify-between p-3.5 rounded-xl border border-rose-100/80 bg-rose-50/20">
          <div className="flex items-start gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#FEE2E2] text-[#DC2626]">
              <Receipt className="h-4 w-4" />
            </div>
            <div className="space-y-0.5">
              <span className="text-[11px] font-medium text-slate-500">
                {paymentSummary.pendingTitle}
              </span>
              <div className="text-xl font-bold text-[#E13B30] tracking-tight">
                {paymentSummary.pendingFormatted}
              </div>
              <p className="text-[11px] text-slate-500">
                {paymentSummary.pendingSubtitle}
              </p>
            </div>
          </div>

          <Button
            variant="danger"
            size="md"
            fullWidth
            onClick={onPayNow}
            className="rounded-lg font-semibold py-2 mt-3"
          >
            Pay Now
          </Button>
        </div>

        {/* Recent Payment Box */}
        <div className="flex flex-col justify-between p-3.5 rounded-xl border border-emerald-100/80 bg-emerald-50/20">
          <div className="flex items-start gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#DCFCE7] text-[#16A34A]">
              <CheckCircle2 className="h-4 w-4" />
            </div>
            <div className="space-y-0.5">
              <span className="text-[11px] font-medium text-slate-500">
                {paymentSummary.recentTitle}
              </span>
              <div className="text-xl font-bold text-slate-800 tracking-tight">
                {paymentSummary.recentFormatted}
              </div>
              <p className="text-[11px] text-slate-500">
                {paymentSummary.recentDateFormatted}
              </p>
            </div>
          </div>

          <Button
            variant="outline-gray"
            size="md"
            fullWidth
            onClick={onViewReceipt}
            className="rounded-lg text-[#1A6CF0] hover:border-[#1A6CF0] font-semibold py-2 mt-3"
          >
            View Receipt
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default PaymentsCard;
