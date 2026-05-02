import { useState } from "react";
import "../styles/main.css";

function Account() {
  const [profile, setProfile] = useState(() => {
    const saved = localStorage.getItem("profile");
    return saved ? JSON.parse(saved) : { name: "", email: "", mobile: "", addr1: "", addr2: "", city: "", state: "", zip: "" };
  });
  const [edit, setEdit] = useState(false);

  const faqs = [
    { q: "How to return products?", a: "Return within 30 days for full refund. No questions asked." },
    { q: "What is the delivery time?", a: "2-5 business days for metro areas, 5-7 for others." },
    { q: "Do you offer warranty?", a: "Yes, 1-2 year warranty on electronics and 6 months on fashion." },
    { q: "Is there free shipping?", a: "Free shipping on orders above ₹500." },
    { q: "How do I track my order?", a: "Track via email notification or account dashboard." },
    { q: "What payment methods accepted?", a: "Credit/Debit cards, UPI, wallet, net banking."  },
    { q: "Is my data secure?", a: "Yes, we use 256-bit SSL encryption for all transactions." },
    { q: "How do I contact support?", a: "Email: support@cartify.com or call 1-800-CARTIFY." }
  ];

  const handleSave = () => {
    localStorage.setItem("profile", JSON.stringify(profile));
    setEdit(false);
    alert("✓ Profile saved successfully!");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile(p => ({ ...p, [name]: value }));
  };

  return (
    <div className="account-page">
      <div className="account-section">
        <h2>👤 My Profile</h2>
        <div className="account-form">
          <input disabled={!edit} name="name" placeholder="Full Name" value={profile.name} onChange={handleChange} />
          <input disabled={!edit} name="email" placeholder="Email" value={profile.email} onChange={handleChange} />
          <input disabled={!edit} name="mobile" placeholder="Mobile Number" value={profile.mobile} onChange={handleChange} />
          <h3 style={{ marginTop: 16 }}>Address</h3>
          <input disabled={!edit} name="addr1" placeholder="Address Line 1" value={profile.addr1} onChange={handleChange} />
          <input disabled={!edit} name="addr2" placeholder="Address Line 2" value={profile.addr2} onChange={handleChange} />
          <div style={{ display: "flex", gap: 12 }}>
            <input disabled={!edit} name="city" placeholder="City" value={profile.city} onChange={handleChange} />
            <input disabled={!edit} name="state" placeholder="State" value={profile.state} onChange={handleChange} />
            <input disabled={!edit} name="zip" placeholder="ZIP Code" value={profile.zip} onChange={handleChange} />
          </div>
          {!edit ? (
            <button className="account-btn" onClick={() => setEdit(true)}>✏️ Edit Profile</button>
          ) : (
            <>
              <button className="account-btn" onClick={handleSave}>💾 Save Profile</button>
              <button className="account-btn account-btn--cancel" onClick={() => setEdit(false)}>Cancel</button>
            </>
          )}
        </div>
      </div>
      <div className="account-section">
        <h2>❓ FAQs & Help</h2>
        <div className="faq-list">
          {faqs.map((faq, i) => (
            <div key={i} className="faq-item">
              <p className="faq-q">Q: {faq.q}</p>
              <p className="faq-a">A: {faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Account;