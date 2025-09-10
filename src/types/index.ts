export interface DataRecord {
  key: string;
  organization: string;
  owner: string;
  products: string[];
  status: 'Rejected' | 'In Negotiation' | 'Under Review' | 'Accepted' | 'Prospective';
  creationDate: string;
}
export interface UserRecord {
  key: string;
  id: string;
  name: string;
  email: string;
  role: 'Admin' | 'Owner' | 'Member' | 'Viewer';
  status: boolean;
  lastLogin: string;
  creationDate: string;
}