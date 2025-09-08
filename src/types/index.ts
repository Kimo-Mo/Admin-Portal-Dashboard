export interface DataRecord {
  key: string;
  organization: string;
  owner: string;
  products: string[];
  status: 'Rejected' | 'In Negotiation' | 'Under Review' | 'Accepted' | 'Prospective';
  creationDate: string;
}
