export interface QuestionType {
    title: string;
    content: {
        type: 'text' | 'image';
        data: any;
    };
    hint?: string;
    answers?: string[];
    time: number;
}

export interface ResultType {
    answer: string;
    data?: any;
    description: string;
    author: string;
}
