import React, { useState, ChangeEvent } from "react";

interface InvoiceItem {
  description: string;
  totalHour: number;
  hourlyRate: number;
}

interface InvoiceData {
  companyLogo: string;
  invoiceNo: string;
  paymentTerms: string;
  date: string;
  dueDate: string;
  clientName: string;
  clientAddress: string;
  cityZip: string;
  attention: string;
  phone: string;
  fax: string;
  email: string;
  job: string;
  paymentCompany: string;
  bankName: string;
  bankAccount: string;
  items: InvoiceItem[];
}

const CorporateInvoiceTemplate: React.FC = () => {
  const [data, setData] = useState<InvoiceData>({
    companyLogo: "",
    invoiceNo: "1001",
    paymentTerms: "Net 30",
    date: new Date().toISOString().substring(0, 10),
    dueDate: "",
    clientName: "Acme Corp.",
    clientAddress: "123 Main St",
    cityZip: "New York, NY 10001",
    attention: "Mr. John Doe",
    phone: "(555) 123-4567",
    fax: "(555) 123-4568",
    email: "john.doe@acmecorp.com",
    job: "Website Redesign Project Phase 1",
    paymentCompany: "Company System Inc.",
    bankName: "First National Bank",
    bankAccount: "1234567890",
    items: [
      { description: "Consulting Services (10 hours)", totalHour: 10, hourlyRate: 150 },
      { description: "Development Work", totalHour: 25, hourlyRate: 120 },
    ],
  });

  const handleChange = (key: keyof InvoiceData, value: string) =>
    setData((prev) => ({ ...prev, [key]: value }));

  const handleItemChange = (index: number, key: keyof InvoiceItem, value: string | number) => {
    const newItems = [...data.items];
    // Simple parsing logic: allows empty string for number inputs without crashing
    const parsedValue = typeof value === "string" && key !== 'description' ? Number(value) || 0 : value;
    
    // Ensure totalHour and hourlyRate are numbers for calculations
    if (key === 'totalHour' || key === 'hourlyRate') {
        newItems[index][key] = Number(parsedValue);
    } else {
        newItems[index][key] = parsedValue as any; // Cast for 'description'
    }
    
    setData({ ...data, items: newItems });
  };

  const addItem = () => {
    setData((prev) => ({
      ...prev,
      items: [...prev.items, { description: "", totalHour: 0, hourlyRate: 0 }],
    }));
  };
  
  // --- Calculations ---
  const subtotal = data.items.reduce(
    (sum, i) => sum + i.totalHour * i.hourlyRate,
    0
  );
  // Using fixed taxes as per original calculation logic
  const stateTaxRate = 0.03;
  const federalTaxRate = 0.02;
  const stateTax = subtotal * stateTaxRate;
  const federalTax = subtotal * federalTaxRate;
  const grandTotal = subtotal + stateTax + federalTax;

  // Helper for input styling to match the image's line structure
  const inputStyle = "w-full border-b border-gray-300 focus:outline-none focus:border-blue-500 bg-white";

  return (
    <div className="max-w-4xl mx-auto bg-white shadow-xl border border-gray-200 rounded-lg overflow-hidden">
      
      {/* HEADER */}
      <div className="bg-black text-white flex justify-between items-center p-6 min-h-[100px]">
        <div className="flex items-center space-x-3">
          {data.companyLogo ? (
            <img
              src={data.companyLogo}
              alt="Company Logo"
              className="w-40 h-16 object-contain bg-transparent" // Increased size and transparent background
            />
          ) : (
            <div className="relative w-40 h-16 bg-gray-700 flex items-center justify-center text-sm font-semibold rounded-md">
              <span className="text-gray-300">COMPANY LOGO</span>
              <label className="absolute inset-0 cursor-pointer bg-black/30 hover:bg-black/50 transition flex items-center justify-center rounded-md">
                <span className="text-white text-xs">Upload Logo</span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    const file = e.target.files?.[0];
                    if (file) handleChange("companyLogo", URL.createObjectURL(file));
                  }}
                  className="hidden"
                />
              </label>
            </div>
          )}
        </div>
        <h1 className="text-5xl font-extrabold tracking-wider">INVOICE</h1>
      </div>

      {/* TOP DETAILS */}
      <div className="grid grid-cols-2 gap-4 px-6 py-4 border-b border-gray-300 text-sm">
        <div className="space-y-2">
          <div className="flex items-center">
            <p className="w-20 font-semibold">No:</p>
            <input
              value={data.invoiceNo}
              onChange={(e) => handleChange("invoiceNo", e.target.value)}
              className={`${inputStyle} w-40 p-1`}
            />
          </div>
          <div className="flex items-center">
            <p className="w-20 font-semibold">Date:</p>
            <input
              type="date"
              value={data.date}
              onChange={(e) => handleChange("date", e.target.value)}
              className={`${inputStyle} w-40 p-1`}
            />
          </div>
        </div>
        <div className="space-y-2 text-right">
          <div className="flex items-center justify-end">
            <p className="font-semibold">Payment Terms:</p>
            <input
              value={data.paymentTerms}
              onChange={(e) => handleChange("paymentTerms", e.target.value)}
              className={`${inputStyle} w-40 p-1 text-right ml-2`}
            />
          </div>
          <div className="flex items-center justify-end">
            <p className="font-semibold">Due Date:</p>
            <input
              type="date"
              value={data.dueDate}
              onChange={(e) => handleChange("dueDate", e.target.value)}
              className={`${inputStyle} w-40 p-1 text-right ml-2`}
            />
          </div>
        </div>
      </div>

      {/* CLIENT INFO AND JOB */}
      <div className="grid grid-cols-2 gap-10 px-6 py-4 text-sm border-b border-gray-300">
        <div>
          <p className="font-bold text-gray-800 mb-2">Client :</p>
          <div className="space-y-1 text-gray-700">
            <input placeholder="[Company Name]" value={data.clientName} onChange={(e) => handleChange("clientName", e.target.value)} className={inputStyle} />
            <input placeholder="[Company Address]" value={data.clientAddress} onChange={(e) => handleChange("clientAddress", e.target.value)} className={inputStyle} />
            <input placeholder="[City, ST, ZIP Code]" value={data.cityZip} onChange={(e) => handleChange("cityZip", e.target.value)} className={inputStyle} />
            <input placeholder="Attn" value={data.attention} onChange={(e) => handleChange("attention", e.target.value)} className={inputStyle} />
            <input placeholder="Phone" value={data.phone} onChange={(e) => handleChange("phone", e.target.value)} className={inputStyle} />
            <input placeholder="Fax" value={data.fax} onChange={(e) => handleChange("fax", e.target.value)} className={inputStyle} />
            <input placeholder="Email" value={data.email} onChange={(e) => handleChange("email", e.target.value)} className={inputStyle} />
          </div>
        </div>

        <div>
          <p className="font-bold text-gray-800 mb-2">Job :</p>
          <textarea
            placeholder="Job details..."
            value={data.job}
            onChange={(e) => handleChange("job", e.target.value)}
            className={`${inputStyle} h-40 resize-none p-1`} // Made taller for better match
          />
        </div>
      </div>

      {/* ITEMS TABLE */}
      <table className="w-full text-sm">
        <thead className="bg-blue-800 text-white">
          <tr>
            <th className="py-2 px-3 w-10 text-left">No</th>
            <th className="py-2 px-3 text-left">Description</th>
            <th className="py-2 px-3 w-28 text-right">Total Hour</th>
            <th className="py-2 px-3 w-28 text-right">Hourly Rate</th>
            <th className="py-2 px-3 w-28 text-right">Amount</th>
          </tr>
        </thead>
        <tbody>
          {data.items.map((item, i) => (
            <tr key={i} className="border-b border-gray-200 last:border-none">
              <td className="py-2 px-3 text-center">{i + 1}</td>
              <td className="py-2 px-3">
                <input
                  value={item.description}
                  onChange={(e) => handleItemChange(i, "description", e.target.value)}
                  placeholder="Description"
                  className={inputStyle}
                />
              </td>
              <td className="py-2 px-3 text-right">
                <input
                  type="number"
                  value={item.totalHour || ""}
                  onChange={(e) => handleItemChange(i, "totalHour", e.target.value)}
                  className="w-full text-right focus:outline-none"
                />
              </td>
              <td className="py-2 px-3 text-right">
                <input
                  type="number" // changed to number for better mobile input, but can be text
                  value={item.hourlyRate || ""}
                  onChange={(e) => handleItemChange(i, "hourlyRate", e.target.value)}
                  className="w-full text-right focus:outline-none"
                />
              </td>
              <td className="py-2 px-3 text-right font-semibold text-gray-700">
                R {(item.totalHour * item.hourlyRate).toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button
        onClick={addItem}
        className="text-blue-700 text-sm font-semibold p-4 hover:bg-gray-50 transition-colors block ml-auto mr-0"
      >
        + Add Row
      </button>
      
      <hr className="border-gray-300"/>

      {/* PAYMENT + TOTALS */}
      <div className="grid grid-cols-2 gap-4 p-6 text-sm">
        <div className="bg-blue-800 text-white rounded-lg p-3 space-y-2 min-h-full">
          <p className="font-bold text-lg mb-2">Payment to:</p>
          <input 
            placeholder="[Company Name]" 
            value={data.paymentCompany} 
            onChange={(e) => handleChange("paymentCompany", e.target.value)} 
            className="w-full border-b border-white focus:outline-none bg-blue-800 text-white" 
          />
          <input 
            placeholder="[Bank Name]" 
            value={data.bankName} 
            onChange={(e) => handleChange("bankName", e.target.value)} 
            className="w-full border-b border-white focus:outline-none bg-blue-800 text-white" 
          />
          <input 
            placeholder="[Bank Account]" 
            value={data.bankAccount} 
            onChange={(e) => handleChange("bankAccount", e.target.value)} 
            className="w-full border-b border-white focus:outline-none bg-blue-800 text-white" 
          />
        </div>

        <div className="flex flex-col items-end justify-end space-y-1 text-gray-700">
          <div className="grid grid-cols-2 w-full max-w-xs text-base">
            <p className="text-right">Total:</p>
            <p className="text-right font-semibold border-b border-gray-300">R {subtotal.toFixed(2)}</p>
          </div>
          <div className="grid grid-cols-2 w-full max-w-xs text-base">
            <p className="text-right">State Tax ({stateTaxRate * 100}%):</p>
            <p className="text-right font-semibold border-b border-gray-300">R {stateTax.toFixed(2)}</p>
          </div>
          <div className="grid grid-cols-2 w-full max-w-xs text-base">
            <p className="text-right">Federal Tax ({federalTaxRate * 100}%):</p>
            <p className="text-right font-semibold border-b border-gray-300">R {federalTax.toFixed(2)}</p>
          </div>
          <div className="grid grid-cols-2 w-full max-w-xs text-lg font-bold text-black border-t-2 border-black pt-1 mt-2">
            <p className="text-right">Grand Total:</p>
            <p className="text-right">R {grandTotal.toFixed(2)}</p>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div className="bg-black text-white text-center py-3 text-xs">
        Company System Inc. | 8030 Harrington Rd, Miami, USA | Ph 555-555-1234 | Fax 555-555-4321 | info@companyinc.com
      </div>
    </div>
  );
};

export default CorporateInvoiceTemplate;