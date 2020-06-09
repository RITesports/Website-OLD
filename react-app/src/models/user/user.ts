export default interface User {
  _id: string;

  name: string;
  email: string;

  role: 'Admin' | 'Manager' | 'User';
  teamId?: string;
}
