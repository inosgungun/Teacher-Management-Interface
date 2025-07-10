"use client";

import { FC, useState } from "react";
import { Plus } from "lucide-react";

interface ContactItem {
  label: string;
  value: string;
}

interface ContactItemCardProps {
  title: string;
  items: ContactItem[];
  onAdd: () => void;
}

const ContactItemCard: FC<ContactItemCardProps> = ({ title, items, onAdd }) => (
  <div className="bg-white shadow-md rounded-lg p-4 w-full max-w-md">
    {/* Header */}
    <div className="flex justify-between items-center border-b pb-2 mb-4">
      <h2 className="text-lg font-semibold">{title}</h2>
      <button
        onClick={onAdd}
        aria-label={`Add ${title}`}
        className="hover:text-gray-600 transition"
      >
        <Plus className="w-4 h-4" />
      </button>
    </div>

    {/* List of items */}
    <div className="space-y-1 text-black">
      {items.map((item, index) => (
        <div key={index} className="justify-between flex items-center">
          <span className="font-bold text-gray-800">{item.label}:</span> {item.value}
        </div>
      ))}
    </div>
  </div>
);

export const ContactCard: FC = () => {
  const [addEmail, setAddEmail] = useState(false);
  const [addPhone, setAddPhone] = useState(false);
  const [addAddress, setAddAddress] = useState(false);

  return (
    <div className="space-y-4">
      <ContactItemCard
        title="Email"
        items={[
          { label: "Work", value: "gungun@gmail.com" },
        ]}
        onAdd={() => setAddEmail(!addEmail)}
      />
      <ContactItemCard
        title="Phone"
        items={[
          { label: "Mobile", value: "+91 9876543210" },
        ]}
        onAdd={() => setAddPhone(!addPhone)}
      />
      <ContactItemCard
        title="Address"
        items={[
          { label: "Home", value: "123, Sipri Bazar, Jhansi" },
        ]}
        onAdd={() => setAddAddress(!addAddress)}
      />
    </div>
  );
};
