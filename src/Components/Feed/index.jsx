import FeedCard from "./FeedCard";
import "./feed.css";
import {feeds} from "../../data/feedData";

export default function Feed(feeds) {
    return (
        <div className="Feed">
            {[feeds].map((feed)=> (
                <FeedCard key={feed.id} feed={feed}/>
            )   
            )}
    </div>
    );   
}