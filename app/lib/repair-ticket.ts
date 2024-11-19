import { z } from 'zod';
import { UserRole } from './auth';

// Tamir durumları
export enum RepairStatus {
  PENDING = 'Beklemede',
  IN_PROGRESS = 'Devam Ediyor',
  COMPLETED = 'Tamamlandı',
  CANCELLED = 'İptal Edildi'
}

// Telefon markası sabitler
export const PhoneBrands = [
  'Apple', 
  'Samsung', 
  'Huawei', 
  'Xiaomi', 
  'Oppo', 
  'Vivo', 
  'Google', 
  'Sony', 
  'LG', 
  'Diğer'
] as const;

// Tamir bileti şeması
export const RepairTicketSchema = z.object({
  id: z.string().optional(),
  customerName: z.string().min(2, { message: 'Müşteri adı en az 2 karakter olmalıdır' }),
  customerPhone: z.string()
    .regex(/^[0-9]{10}$/, { message: 'Geçerli bir telefon numarası girin (10 haneli)' }),
  deviceBrand: z.enum(PhoneBrands),
  deviceModel: z.string().min(2, { message: 'Cihaz modeli en az 2 karakter olmalıdır' }),
  repairDescription: z.string().min(10, { message: 'Tamir açıklaması en az 10 karakter olmalıdır' }),
  status: z.nativeEnum(RepairStatus).default(RepairStatus.PENDING),
  assignedTechnicianId: z.string().optional(),
  estimatedCost: z.number().min(0, 'Maliyet 0\'dan küçük olamaz').optional(),
  createdAt: z.date().default(() => new Date()),
  updatedAt: z.date().optional()
});

// Tamir bileti arayüzü
export interface RepairTicket extends z.infer<typeof RepairTicketSchema> {}

// Tamir bileti yönetim fonksiyonları
export const createRepairTicket = async (ticketData: Omit<RepairTicket, 'id' | 'createdAt' | 'status'>): Promise<RepairTicket | null> => {
  // TODO: Gerçek tamir bileti oluşturma implementasyonu
  return {
    id: Date.now().toString(),
    status: RepairStatus.PENDING,
    createdAt: new Date(),
    ...ticketData
  };
};

export const updateRepairTicketStatus = async (ticket: RepairTicket, newStatus: RepairStatus): Promise<RepairTicket | null> => {
  // TODO: Tamir bileti güncelleme ve yetkilendirme kontrolü
  return {
    ...ticket,
    status: newStatus,
    updatedAt: new Date()
  };
};

export const updateRepairTicket = async (
  ticketId: string, 
  updateData: Partial<RepairTicket>, 
  userRole: UserRole
): Promise<RepairTicket | null> => {
  // TODO: Tamir bileti güncelleme ve yetkilendirme kontrolü
  return null;
};

export const listRepairTickets = async (
  filters?: Partial<RepairTicket>, 
  userRole?: UserRole
): Promise<RepairTicket[]> => {
  // TODO: Tamir biletlerini filtreleme ve yetkilendirme kontrolü
  return [];
};

export const getRepairTickets = async (
  filters?: Partial<RepairTicket>, 
  userRole?: UserRole
): Promise<RepairTicket[]> => {
  // TODO: Tamir biletlerini filtreleme ve yetkilendirme kontrolü
  return [];
};
