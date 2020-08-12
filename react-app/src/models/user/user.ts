export default interface User {
  _id: string;

  name: string;
  email: string;
  profileId: string;

  role: 'Admin' | 'Manager' | 'User';
  teamId?: string;
}
