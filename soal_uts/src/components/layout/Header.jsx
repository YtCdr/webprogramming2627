// TODO 9
import { NavLink } from 'react-router-dom'; 
import logo from '../assets/logo.png';
// 2. Import gambar dari folder assets: header-bg.png beri nama bgGambar
// 3. Buat component function dengan nama Header
// 4. Struktur wajib di dalam return:
function Header() {
    return (
        <header> className="header-area"
            <div className="header-text">
                <h1>ProdiInformatika</h1>
                <p>Universitas Matana.</p>
            </div>
            <nav className="nav-menu">
                <NavLink to="/">Beranda</NavLink>
            </nav>
        </header>
    );
}
// 5. lakukan push dan commit "selesai TODO 9" dengan todo 9
