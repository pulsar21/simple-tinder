import classNames from "classnames";

export default function Image({className, src, name, ...props}) {
    try {
        const image = src ? src : `/assets/img/${name}`;

        if (!image) {
            return null;
        } else {
            return (
                <img
                    className={classNames("image", className)}
                    src={image}
                    alt={props.alt}
                    {...props}
                />
            );
        }
    } catch (error) {
        return (
            <img
                className={classNames("image", className)}
                alt={props.alt}
                {...props}
            />
        );
    }
};