import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { RepairTicketSchema, RepairStatus, PhoneBrands } from '~/lib/repair-ticket';
import Button from '~/components/ui/button';

export default function RepairTicketsPage() {
  const [tickets, setTickets] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const { 
    register, 
    handleSubmit, 
    reset,
    formState: { errors } 
  } = useForm({
    resolver: zodResolver(RepairTicketSchema)
  });

  const onSubmit = async (data: any) => {
    setIsLoading(true);
    try {
      // TODO: Gerçek tamir bileti oluşturma işlemi
      const newTicket = {
        ...data,
        id: Date.now().toString(),
        createdAt: new Date(),
        status: RepairStatus.PENDING
      };
      setTickets(prev => [...prev, newTicket]);
      reset(); // Formu sıfırla
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-primary mb-6">
        Tamir Biletleri
      </h1>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Tamir Bileti Oluşturma Formu */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Yeni Tamir Bileti Oluştur</h2>
          
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label htmlFor="customerName" className="block text-sm font-medium text-gray-700 mb-2">
                Müşteri Adı
              </label>
              <input
                type="text"
                id="customerName"
                {...register('customerName')}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                placeholder="Müşteri adını girin"
              />
              {errors.customerName && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.customerName.message as string}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="customerPhone" className="block text-sm font-medium text-gray-700 mb-2">
                Müşteri Telefonu
              </label>
              <input
                type="tel"
                id="customerPhone"
                {...register('customerPhone')}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                placeholder="Telefon numarasını girin"
              />
              {errors.customerPhone && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.customerPhone.message as string}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="deviceBrand" className="block text-sm font-medium text-gray-700 mb-2">
                Cihaz Markası
              </label>
              <select
                id="deviceBrand"
                {...register('deviceBrand')}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
              >
                {PhoneBrands.map(brand => (
                  <option key={brand} value={brand}>{brand}</option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="deviceModel" className="block text-sm font-medium text-gray-700 mb-2">
                Cihaz Modeli
              </label>
              <input
                type="text"
                id="deviceModel"
                {...register('deviceModel')}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                placeholder="Cihaz modelini girin"
              />
              {errors.deviceModel && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.deviceModel.message as string}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="repairDescription" className="block text-sm font-medium text-gray-700 mb-2">
                Tamir Açıklaması
              </label>
              <textarea
                id="repairDescription"
                {...register('repairDescription')}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                placeholder="Tamir ile ilgili detayları açıklayın"
                rows={4}
              />
              {errors.repairDescription && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.repairDescription.message as string}
                </p>
              )}
            </div>

            <Button 
              type="submit" 
              variant="primary" 
              className="w-full"
              disabled={isLoading}
            >
              {isLoading ? 'Oluşturuluyor...' : 'Tamir Bileti Oluştur'}
            </Button>
          </form>
        </div>

        {/* Tamir Biletleri Listesi */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Mevcut Tamir Biletleri</h2>
          
          {tickets.length === 0 ? (
            <p className="text-gray-500 text-center">Henüz tamir bileti bulunmuyor.</p>
          ) : (
            <div className="space-y-4">
              {tickets.map(ticket => (
                <div 
                  key={ticket.id} 
                  className="border border-gray-200 rounded-md p-4 hover:bg-gray-50 transition-colors"
                >
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-semibold">{ticket.customerName}</h3>
                    <span 
                      className={`px-2 py-1 rounded-full text-xs ${
                        ticket.status === RepairStatus.PENDING 
                          ? 'bg-yellow-100 text-yellow-800'
                          : ticket.status === RepairStatus.IN_PROGRESS
                          ? 'bg-blue-100 text-blue-800'
                          : ticket.status === RepairStatus.COMPLETED
                          ? 'bg-green-100 text-green-800'
                          : 'bg-red-100 text-red-800'
                      }`}
                    >
                      {ticket.status}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm">
                    {ticket.deviceBrand} - {ticket.deviceModel}
                  </p>
                  <p className="text-gray-500 text-sm mt-1">
                    {ticket.repairDescription}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
