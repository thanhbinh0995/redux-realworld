import React from "react";
import {action} from "@kadira/storybook";
import Cards from "./Cards";
import Card from "./CardSwitcher";

const CustomAlertLeft = () => <span>Dislike</span>;
const CustomAlertRight = () => <span>Like</span>;

const SwipeCard = ({users}) => {
    console.log(users);
    return (
        <div>
            <Cards
                alertRight={<CustomAlertRight />}
                alertLeft={<CustomAlertLeft />}
                onEnd={action('end')}
                className='master-root'>
                {users.map((user, key) =>
                    <Card
                        key={key}
                        image={}
                        onSwipeLeft={action('swipe left')}
                        onSwipeRight={action('swipe right')}>
                        <h2>{user.username}</h2>
                    </Card>
                )}
            </Cards>
        </div>
    );
};

export default SwipeCard;
