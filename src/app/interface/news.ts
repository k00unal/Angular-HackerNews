export interface News {
  hits: [
    {
      objectID: string;
      points: string;
      num_comments: string;
      created_at: string;
      title: string;
      url: string;
      author: string;
    }
  ];
  page: number;
}
