import { Schema, model } from "mongoose";

interface IMovie{
    plot:String;
    genres:[String];
    cast:[String];
    num_mflix_comments:Number;
    title:String;
    fullplot:String;
    countries:[String];
    released:Date;
    directors:[String];
    rated:String;
    awards:{
        wins:Number;
        nominations:Number;
        text:string;
    };
    lastupdated:String;
    year:Number
    imdb:{
        rating:Number;
        votes:Number;
        id:Number;
    };
    type:String;
    tomatoes:{
        viewer:{
            rating:Number;
            numReviews:Number;
            meter:Number;
        };
        lastUpdated:Date;
    };

}

const movieSchema = new Schema<IMovie>({});

const movie = model("movie",movieSchema);

export default movie;