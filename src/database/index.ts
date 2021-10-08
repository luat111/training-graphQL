import { connect } from "mongoose";

export class DB {
    mongoUrl: string;

    constructor(url:string) {
        this.mongoUrl = url;
    }

    connectDb(): void {
        connect(this.mongoUrl, (err) => {
            if (err) {
                console.log(err);
            }
            else {
                console.log("Connect success!");
            }
        });
    }
}