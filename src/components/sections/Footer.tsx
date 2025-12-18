export default function Footer() {
  return (
    <footer className="bg-black py-20 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-start gap-10">
        <div>
          <h2 className="text-3xl font-bold mb-4">Nubian</h2>
          <p className="text-gray-500 max-w-xs">
            The journey from silence to speech.
            <br />
            © 2025 Nubian Inc.
          </p>
        </div>
        
        <div className="flex gap-20">
          <div>
            <h3 className="font-bold mb-4">Learn</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">Swahili</a></li>
              <li><a href="#" className="hover:text-white">Yoruba</a></li>
              <li><a href="#" className="hover:text-white">Kinyarwanda</a></li>
              <li><a href="#" className="hover:text-white">Amharic</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">About</a></li>
              <li><a href="#" className="hover:text-white">Careers</a></li>
              <li><a href="#" className="hover:text-white">Blog</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
