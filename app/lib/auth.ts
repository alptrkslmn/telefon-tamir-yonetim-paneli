import { z } from 'zod';

// Kullanıcı rolleri
export enum UserRole {
  ADMIN = 'ADMIN',
  TECHNICIAN = 'TECHNICIAN',
  CUSTOMER = 'CUSTOMER'
}

// Kullanıcı şema tanımları
export const LoginSchema = z.object({
  email: z.string().email('Geçerli bir email adresi girin'),
  password: z.string().min(6, 'Şifre en az 6 karakter olmalıdır')
});

export const RegisterSchema = z.object({
  name: z.string().min(2, 'Ad en az 2 karakter olmalıdır'),
  email: z.string().email('Geçerli bir email adresi girin'),
  password: z.string().min(6, 'Şifre en az 6 karakter olmalıdır'),
  role: z.nativeEnum(UserRole).default(UserRole.CUSTOMER)
});

// Kullanıcı arayüzü
export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
}

// Kimlik doğrulama fonksiyonları
export const authenticate = async (email: string, password: string): Promise<User | null> => {
  // TODO: Gerçek kimlik doğrulama implementasyonu
  return null;
};

export const register = async (userData: z.infer<typeof RegisterSchema>): Promise<User | null> => {
  // TODO: Kullanıcı kayıt implementasyonu
  return null;
};
