import { useState } from 'react';
import { Link } from '@remix-run/react';
import { 
  FaHome, 
  FaTicketAlt, 
  FaTools, 
  FaChartBar, 
  FaUser, 
  FaSignOutAlt 
} from 'react-icons/fa';
import Button from '~/components/ui/button';

export default function DashboardPage() {
  const [activeSection, setActiveSection] = useState('home');

  const dashboardStats = {
    totalTickets: 42,
    pendingTickets: 12,
    completedTickets: 30,
    revenue: 45600
  };

  const recentTickets = [
    { id: 'T001', customer: 'Ahmet Yılmaz', device: 'iPhone 12', status: 'Beklemede' },
    { id: 'T002', customer: 'Ayşe Demir', device: 'Samsung S21', status: 'Devam Ediyor' },
    { id: 'T003', customer: 'Mehmet Kaya', device: 'Huawei P40', status: 'Tamamlandı' }
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Kenar Menü */}
      <div className="w-64 bg-white shadow-md">
        <div className="p-6 border-b text-center">
          <h2 className="text-2xl font-bold text-primary">Telefon Tamir</h2>
          <p className="text-gray-600">Yönetim Paneli</p>
        </div>

        <nav className="p-4">
          <ul className="space-y-2">
            <li>
              <button 
                onClick={() => setActiveSection('home')}
                className={`w-full flex items-center p-3 rounded-md ${
                  activeSection === 'home' 
                    ? 'bg-primary text-white' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <FaHome className="mr-3" /> Anasayfa
              </button>
            </li>
            <li>
              <button 
                onClick={() => setActiveSection('tickets')}
                className={`w-full flex items-center p-3 rounded-md ${
                  activeSection === 'tickets' 
                    ? 'bg-primary text-white' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <FaTicketAlt className="mr-3" /> Tamir Biletleri
              </button>
            </li>
            <li>
              <button 
                onClick={() => setActiveSection('services')}
                className={`w-full flex items-center p-3 rounded-md ${
                  activeSection === 'services' 
                    ? 'bg-primary text-white' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <FaTools className="mr-3" /> Servisler
              </button>
            </li>
            <li>
              <button 
                onClick={() => setActiveSection('reports')}
                className={`w-full flex items-center p-3 rounded-md ${
                  activeSection === 'reports' 
                    ? 'bg-primary text-white' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <FaChartBar className="mr-3" /> Raporlar
              </button>
            </li>
          </ul>

          <div className="mt-auto p-4 border-t">
            <button 
              className="w-full flex items-center p-3 text-red-600 hover:bg-red-50 rounded-md"
            >
              <FaSignOutAlt className="mr-3" /> Çıkış Yap
            </button>
          </div>
        </nav>
      </div>

      {/* Ana İçerik */}
      <div className="flex-1 p-8">
        <div className="grid grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-gray-500 mb-2">Toplam Tamir Biletleri</h3>
            <p className="text-3xl font-bold text-primary">{dashboardStats.totalTickets}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-gray-500 mb-2">Bekleyen Biletler</h3>
            <p className="text-3xl font-bold text-yellow-500">{dashboardStats.pendingTickets}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-gray-500 mb-2">Tamamlanan Biletler</h3>
            <p className="text-3xl font-bold text-green-500">{dashboardStats.completedTickets}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-gray-500 mb-2">Toplam Gelir</h3>
            <p className="text-3xl font-bold text-blue-500">₺{dashboardStats.revenue.toLocaleString()}</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Son Tamir Biletleri</h2>
            <Link to="/repair-tickets" className="text-primary hover:underline">
              Tümünü Görüntüle
            </Link>
          </div>

          <table className="w-full">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="p-3 text-left">Bilet No</th>
                <th className="p-3 text-left">Müşteri</th>
                <th className="p-3 text-left">Cihaz</th>
                <th className="p-3 text-left">Durum</th>
                <th className="p-3 text-right">İşlemler</th>
              </tr>
            </thead>
            <tbody>
              {recentTickets.map(ticket => (
                <tr key={ticket.id} className="border-b hover:bg-gray-50">
                  <td className="p-3">{ticket.id}</td>
                  <td className="p-3">{ticket.customer}</td>
                  <td className="p-3">{ticket.device}</td>
                  <td className="p-3">
                    <span className={`
                      px-2 py-1 rounded-full text-xs
                      ${ticket.status === 'Beklemede' ? 'bg-yellow-100 text-yellow-800' : 
                        ticket.status === 'Devam Ediyor' ? 'bg-blue-100 text-blue-800' : 
                        'bg-green-100 text-green-800'}
                    `}>
                      {ticket.status}
                    </span>
                  </td>
                  <td className="p-3 text-right">
                    <Button variant="outline" size="sm">
                      Detay
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
