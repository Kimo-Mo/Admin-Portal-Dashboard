// -------- Types --------
export interface User {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  status: string;
  role?: string;
  is_owner?: boolean;
  organization?: string;
  national_id: string;
}

export interface CreateUserDto {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  confirm_password: string;
  phone: string;
  role?: string;
  is_owner?: boolean;
  organization?: string;
  national_id: string;
}

export interface UpdateUserDto {
  first_name?: string;
  last_name?: string;
  email?: string;
  status?: string;
  phone?: string;
  role?: string;
  is_owner?: boolean;
  national_id?: string;
  password?: string;
  confirm_password?: string;
}
