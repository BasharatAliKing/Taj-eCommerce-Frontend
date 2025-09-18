import React, { useState } from 'react'
const API_URL = import.meta.env.VITE_API_URL;  // ✅ Correct way in Vite
const Charity = () => {
    const [form, setForm] = useState({
    name: "",
    organization: "",
    email: "",
    phone: "",
    message: "",
    amountRequested: "",
    file: null,
  });
  const [loading, setLoading] = useState(false);

  const onChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      setForm((prev) => ({ ...prev, [name]: files[0] }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const validate = () => {
    if (!form.name.trim()) return "Please enter a name.";
    if (!form.email.trim()) return "Please enter an email.";
    // very basic email regex
    if (!/\S+@\S+\.\S+/.test(form.email)) return "Please enter a valid email.";
    if (!form.message.trim()) return "Please add a short description of your request.";
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const err = validate();
    if (err) {
      toast.error(err);
      return;
    }

    setLoading(true);
    try {
      // Send form as FormData (so file is supported)
      const payload = new FormData();
      payload.append("name", form.name);
      payload.append("organization", form.organization);
      payload.append("email", form.email);
      payload.append("phone", form.phone);
      payload.append("message", form.message);
      payload.append("amountRequested", form.amountRequested || "");
      if (form.file) payload.append("file", form.file);

      const res = await fetch(`${API_URL}/charityrequest`, {
        method: "POST",
        body: payload,
      });

      if (res.ok) {
        toast.success("Charity request submitted. We'll contact you soon.");
        setForm({
          name: "",
          organization: "",
          email: "",
          phone: "",
          message: "",
          amountRequested: "",
          file: null,
        });
      } else {
        const json = await res.json();
        toast.error(json.message || "Something went wrong. Try again.");
      }
    } catch (err) {
      console.error(err);
      toast.error("Network error. Try again later.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
          {/* WHY WE GIVE BACK */}
      <section className="bg-[#2b2b2b] border-t border-b border-yellow-400">
        <div className="max-w-6xl mx-auto px-6 py-12 text-center">
          <h3 className="text-2xl font-bold text-yellow-400 mb-3">Why we support charities</h3>
          <p className="text-gray-300 max-w-3xl mx-auto">
            We believe the table is a place where people come together. If your charity helps
            local families, children, the elderly, or community projects we’d love to hear from you.
          </p>
        </div>
    </section>
       {/* CHARITY REQUEST FORM */}
      <section id="charity" className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div className="bg-[#222] p-6 rounded-lg shadow-inner">
            <h3 className="text-2xl font-bold text-yellow-400 mb-4">Charity Request</h3>
            <p className="text-gray-300 mb-6">
              Fill out the form and our community manager will review your request. Please include
              as much detail as possible and any supporting documents.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm text-gray-300 mb-1">Full Name *</label>
                <input
                  name="name"
                  value={form.name}
                  onChange={onChange}
                  className="w-full px-4 py-2 rounded bg-[#111] border border-gray-700 text-white outline-none"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-300 mb-1">Organization</label>
                <input
                  name="organization"
                  value={form.organization}
                  onChange={onChange}
                  className="w-full px-4 py-2 rounded bg-[#111] border border-gray-700 text-white outline-none"
                  placeholder="Name of charity or group"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-300 mb-1">Email *</label>
                  <input
                    name="email"
                    value={form.email}
                    onChange={onChange}
                    className="w-full px-4 py-2 rounded bg-[#111] border border-gray-700 text-white outline-none"
                    placeholder="email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-300 mb-1">Phone</label>
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={onChange}
                    className="w-full px-4 py-2 rounded bg-[#111] border border-gray-700 text-white outline-none"
                    placeholder="+44 7123 456789"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-gray-300 mb-1">Brief Description *</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={onChange}
                  rows="5"
                  className="w-full px-4 py-2 rounded bg-[#111] border border-gray-700 text-white outline-none"
                  placeholder="Explain your cause, how the funds will be used and who benefits."
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-300 mb-1">Amount requested (optional)</label>
                  <input
                    name="amountRequested"
                    value={form.amountRequested}
                    onChange={onChange}
                    className="w-full px-4 py-2 rounded bg-[#111] border border-gray-700 text-white outline-none"
                    placeholder="e.g. £200"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-300 mb-1">Attach doc (optional)</label>
                  <input
                    type="file"
                    name="file"
                    onChange={onChange}
                    className="w-full text-sm text-gray-200"
                  />
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-yellow-400 text-black px-6 py-2 rounded font-semibold disabled:opacity-60"
                >
                  {loading ? "Submitting..." : "Submit Request"}
                </button>
                <button
                  type="button"
                  onClick={() =>
                    setForm({
                      name: "",
                      organization: "",
                      email: "",
                      phone: "",
                      message: "",
                      amountRequested: "",
                      file: null,
                    })
                  }
                  className="px-4 py-2 border border-gray-600 rounded text-gray-300"
                >
                  Reset
                </button>
              </div>
            </form>
          </div>

          {/* Sidebar / Contact */}
          <aside className="p-6 rounded-lg bg-[#1f1f1f]">
            <h4 className="text-xl font-semibold text-yellow-400 mb-3">Need help?</h4>
            <p className="text-gray-300 mb-4">
              If you'd like help filling this form, email{" "}
              <a href="mailto:community@k2taj.example" className="text-yellow-400">
                community@k2taj.example
              </a>{" "}
              or call <strong className="text-gray-100">01234 567890</strong>.
            </p>

            <div className="mt-6">
              <h5 className="text-sm text-gray-400 uppercase mb-2">What we consider</h5>
              <ul className="text-gray-300 space-y-2">
                <li>Local community impact</li>
                <li>Feasibility & plan</li>
                <li>Transparency of funds</li>
              </ul>
            </div>

            <div className="mt-8">
              <h5 className="text-sm text-gray-400 uppercase mb-2">Opening times</h5>
              <p className="text-gray-300">Mon–Thu: 12pm – 11pm</p>
              <p className="text-gray-300">Fri–Sat: 12pm – 12am</p>
            </div>
          </aside>
        </div>
      </section>
      {/* FOOTER small */}
      {/* <footer className="bg-[#111] text-gray-400 py-6">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p>© {new Date().getFullYear()} K2 Taj — All rights reserved</p>
        </div>
      </footer> */}
    </div>
  )
}

export default Charity
