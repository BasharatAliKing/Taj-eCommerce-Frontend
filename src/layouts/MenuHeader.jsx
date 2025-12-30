// src/layouts/Header.jsx
export default function Header() {
  return (
    <header className="bg-primary text-white px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Briercliffe Chippery</h1>
      <nav className="space-x-6 text-sm font-medium">
        <a href="#">Popular</a>
        <a href="#">Food Menu</a>
        <a href="#">Contact Us</a>
        <a href="#">Leave a Review</a>
      </nav>
    </header>
  );
}
