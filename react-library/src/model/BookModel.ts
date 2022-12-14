export class BookModel {
    constructor(private _id: number, private _title: string,
        private _author?: string, private _description?: string,
        private _copies?: number, private _copiesAvailable?: number,
        private _category?: string, private _img?: string) {}
    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }
    public get title(): string {
        return this._title;
    }
    public set title(value: string) {
        this._title = value;
    }
    public get author(): string | undefined {
        return this._author;
    }
    public set author(value: string | undefined) {
        this._author = value;
    }
    public get description(): string | undefined {
        return this._description;
    }
    public set description(value: string | undefined) {
        this._description = value;
    }
    public get copies(): number | undefined {
        return this._copies;
    }
    public set copies(value: number | undefined) {
        this._copies = value;
    }
    public get copiesAvailable(): number | undefined {
        return this._copiesAvailable;
    }
    public set copiesAvailable(value: number | undefined) {
        this._copiesAvailable = value;
    }
    public get category(): string | undefined {
        return this._category;
    }
    public set category(value: string | undefined) {
        this._category = value;
    }
    public get img(): string | undefined {
        return this._img;
    }
    public set img(value: string | undefined) {
        this._img = value;
    }

}