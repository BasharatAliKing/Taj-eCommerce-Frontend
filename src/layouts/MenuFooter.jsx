// src/components/Footer.jsx
export default function Footer() {
  return (
    <footer className="container py-10 px-6 grid md:grid-cols-2 gap-10">
      <div>
        <h4 className="font-bold text-yellow text-xl md:text-2xl mb-4">Our Location</h4>
        <iframe
          className="w-full h-60 rounded-lg"
          src="https://maps.google.com/maps?q=Briercliffe%20Chippery&t=&z=13&ie=UTF8&iwloc=&output=embed"
        />
      </div>

      <div>
        <h4 className="font-bold text-yellow text-xl md:text-2xl mb-4">Contact Us</h4>
        <p>📍 167 Briercliffe Road, Burnley</p>
        <p>📞 01282 432611</p>
        <p className="mt-4 underline cursor-pointer">
          Leave a Review
        </p>
      </div>
    </footer>
  );
}
