export type FilterTypes = 'name' | 'status'

export interface IFilter {
    id: number;
    name: string;
    type: FilterTypes;
}
