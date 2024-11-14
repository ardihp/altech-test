interface Tier {
  name: string;
  price?: number | string;
  features: string[];
}

export const tiers: Tier[] = [
  {
    name: "Basic",
    price: 150000,
    features: [
      "Mencatat barang masuk",
      "Mencatat barang keluar",
      "Mencatat hasil keuntungan",
    ],
  },
  {
    name: "Business",
    price: 400000,
    features: [
      "Mencatat barang masuk",
      "Mencatat barang keluar",
      "Mencatat hasil keuntungan",
      "Dapat menganalisa hasil penjualan dengan CHART",
      "Support 7x24 Jam",
    ],
  },
  {
    name: "Enterpreneur",
    price: "custom",
    features: [
      "Mencatat barang masuk",
      "Mencatat barang keluar",
      "Mencatat hasil keuntungan",
      "Dapat menganalisa hasil penjualan dengan CHART",
      "Support 7x24 Jam",
      "Export data ke Excel",
      "AI prediksi penghasilan",
    ],
  },
];
