export type Project = {
    image: string;
    title: string;
    content: string;
    type: string;
    subtype?: string;
    size: string;
    techStack: string[];
    github: string;
    deployed?: string;
}