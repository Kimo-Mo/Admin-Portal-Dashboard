export interface User {
  key: string;
  id: string;
  name: string;
  email: string;
  role: 'Admin' | 'Owner' | 'Member' | 'Viewer';
  status: boolean;
  lastLogin: string;
  creationDate: string;
}
