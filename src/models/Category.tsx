import internal from "stream";

export default interface Category {
    id: number;
    parent_id: number;
    image_url: string;
    size: string;
    title: string;
    selected: boolean;
    isExpanded: boolean;
    children: Category[];
}