export interface QuestionType {
    title: string;
    content?: {
        type: 'text' | 'image' | 'music';
        data: any;
    };
    hint?: string;
    choices?: string[];
    time: number;
}

export interface ResultType {
    answer: string;
    data?: any;
    description: string;
    author: string;
}
