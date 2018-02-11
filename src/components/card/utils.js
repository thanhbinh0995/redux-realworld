export const translate3d = (x, y) => {
    const translate = `translate3d(${x}px, ${y}px, 0px)`;
    return {
        msTransform: translate,
        WebkitTransform: translate,
        transform: translate
    }
};

export const getBackgroundImage = (link) => {
    const SERVER_URL = "http://localhost:9000/";
    return {
        background: `url(${SERVER_URL + link}) no-repeat center center fixed`
    }
};
export const DIRECTIONS = ['Right', 'Left', 'Top', 'Bottom'];
