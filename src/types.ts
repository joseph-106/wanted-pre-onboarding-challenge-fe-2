export interface TodoData {
  id: string;
  content: string;
  completed: boolean;
  category: string;
  tags?: string[];
}

export type CreateTodo = (
  content: string,
  category: string,
  tags?: string[]
) => void;

export type ReadTodo = (id?: string) => TodoData | TodoData[];

export type UpdateTodo = (id: string, tagIndex?: number) => void;

export type DeleteTodo = (id?: string, tagIndex?: number) => void;
