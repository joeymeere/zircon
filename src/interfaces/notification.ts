export interface NotificationMetadata {
  id: string;
  data: {
    name: string;
    profilePicUrl: string;
    text: string;
    timestamp: number;
    href: string;
    viewed: boolean;
  };
}