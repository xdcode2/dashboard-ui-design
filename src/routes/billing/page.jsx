// src/routes/billing/page.jsx
import React from "react";

const BillingPage = () => {
  return (
    <div className="flex flex-col gap-y-4">
      <h1 className="title">Billing</h1>

      <div className="card">
        <div className="card-header">
          <p className="card-title">Create New Bill</p>
        </div>
        <div className="card-body bg-slate-100 dark:bg-slate-950 transition-colors">
          <p className="text-slate-600 dark:text-slate-300">
            Billing module will allow you to generate, view, and manage bills. Coming soon.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BillingPage;
