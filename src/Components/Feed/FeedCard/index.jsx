import "./feedCard.css"
import Instagram from "../../../Assets/Instagram.png";
import Twitter from "../../../Assets/Twitter.png";


export default function FeedCard({feed}) {
    return (
        <div className="FeedCard">
            <div className="leftCard">
                <div class='author'>
                    <img src={feed.avatarImg} alt='this is avatar'/>
                    <div class='authorsName'>Author's name</div>
                    <div class='greyWords'>in</div>
                    <div class='topicsName'>Topic's Name -</div>
                    <div class='greyWords'>7 July</div>
                </div>
                
                <div class='topicTittle'>7 Practical CSS Tips</div>
                <div class='topicItself'>
                    {feed.feedText}
                </div>

                <div class='share'>
                    <div class='shareLine'>
                        <button class='button'>Java Script</button>
                        <div class='shareTitle'>12 min read</div>
                        <div class='shareTitle'>- Selected for you</div>
                    </div>
                   
                    <div class='shareIcon'> 
                    <img className='share-img' src={Instagram} alt='this is Icon'/>
                   
                    <img className='share-img' src={Twitter} alt='this is Icon2'/>
                    </div>
                </div>

            </div>

            <img className='feed-img' src={require(`../../../Assets/laptopFeed.svg`).default} alt="some laptop"/>
       </div>
    )
    
    

}