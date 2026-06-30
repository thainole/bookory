export interface OpinionForm {
  user_id?: number;
  title: string;
  opinion: string;
  rating: number;
}

export interface OpinionToUpdate extends OpinionForm {
  opinion_id: number;
}

export interface Opinion extends OpinionForm {
  opinion_id: number;
  created_at: string;
  author: string;
}
