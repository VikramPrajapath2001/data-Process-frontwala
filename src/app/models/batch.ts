import { Department } from './department';
import { Student } from './student';

export interface Batch {
  id: number;
  name: string;
  staffName: string;
  capacity: number;
  department: Department;
  students?: Student[];
}
