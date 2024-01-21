export interface Event {
    id: number;
    title: string | null;
    description: string | null;
    location: string | null;
    startTime: string | null;
    endTime: string | null;
    creatorId: number | null;
    inviteList: number | null;
}