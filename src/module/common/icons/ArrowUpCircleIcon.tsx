import { SvgIcon, SvgIconProps } from "@peersyst/react-native-components";
import { Path } from "react-native-svg";

export function ArrowUpCircleIcon(props: Omit<SvgIconProps, "children">): JSX.Element {
    return (
        <SvgIcon
            // @ts-ignore
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            {...props}
            {...{ testID: "ArrowUpCircleIcon" }}
        >
            <Path d="M12 20C16.4183 20 20 16.4183 20 12C20 7.5817 16.4183 4 12 4C7.5817 4 4 7.5817 4 12C4 16.4183 7.5817 20 12 20ZM22 12C22 17.5229 17.5229 22 12 22C6.4772 22 2 17.5228 2 12C2 6.4772 6.4772 2 12 2C17.5229 2 22 6.4772 22 12ZM12 18C11.4477 18 11 17.5523 11 17L11 9.4142L8.7071 11.7071C8.3166 12.0976 7.6834 12.0976 7.2929 11.7071C6.9024 11.3166 6.9024 10.6834 7.2929 10.2929L11.2929 6.2929C11.6834 5.9024 12.3166 5.9024 12.7071 6.2929L16.7071 10.2929C17.0976 10.6834 17.0976 11.3166 16.7071 11.7071C16.3166 12.0976 15.6834 12.0976 15.2929 11.7071L13 9.4142L13 17C13 17.5523 12.5523 18 12 18Z" />
        </SvgIcon>
    );
}
