export interface IProjectTeam {
  teamId: number;
  teamName: string;
  memberCount: number;
  members: IMember[];
}

export interface IMember {
  userId: number;
  userName: string;
  profileImage: string;
}
