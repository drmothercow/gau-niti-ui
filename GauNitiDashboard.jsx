import React from "react";

export default function GauNitiDashboard() {
  return (
    <div style={{ padding: 20, maxWidth: 1000, margin: 'auto' }}>
      <h1 style={{ fontSize: 36, marginBottom: 20, textAlign: 'center' }}>Gau Niti – Gomay Commodity Exchange</h1>
      <div style={{ display: 'flex', gap: 20 }}>
        <div style={{ flex: 1, padding: 20, background: '#f0f0f0', borderRadius: 10 }}>
          <h2>📈 Investor Panel</h2>
          <p>Track profits, returns, and token holdings for each Gomay-based batch.</p>
          <button>Invest in New Batch</button>
        </div>
        <div style={{ flex: 1, padding: 20, background: '#f0f0f0', borderRadius: 10 }}>
          <h2>🛒 Live Market</h2>
          <p>View real-time prices of Panchgavya products listed by Gaupalaks.</p>
          <button>View All Products</button>
        </div>
        <div style={{ flex: 1, padding: 20, background: '#f0f0f0', borderRadius: 10 }}>
          <h2>🐄 Vendor Dashboard</h2>
          <p>List your Gomay-based products, track orders, and see buyer activity.</p>
          <button>Add New Product</button>
        </div>
      </div>
    </div>
  );
}
