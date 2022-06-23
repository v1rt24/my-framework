interface IComments {
    name: string;
}

export interface IPostType {
    user: {
        name: string,
        family: string,
    };
    content: {
        img: string,
        title: string,
        desc: string,
        nameButton: string,
    };
    comments: IComments[];
}